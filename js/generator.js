#!/usr/bin/env node

'use strict';

var path = require('path');
var raml2obj = require('raml2obj');
var nunjucks = require('nunjucks');
var Q = require('q');
var fs = require('fs');
var util = require('util');

var RESOURCE_FILE = "generated/resources.json";
var RESOURCES;

exports = module.exports = {
  getDefaultConfig: getDefaultConfig,
  render: render
};

/*
 The config object can contain the following keys and values:
 template: url to the main template (required)
 templatesPath: a folder containing the templates (optional, by default it's relative to your working directory)
 processOutput: function that takes data, return a promise (optional)
 */
function render(source, config, versions, resources) {
  config = config || {};

  var env = nunjucks.configure(config.templatesPath, {watch: false});

  RESOURCES = resources;

  addFilters(env, versions);

  return raml2obj.parse(source).then(function(ramlObj) {
    ramlObj.config = config;

    return Q.fcall(function() {
      var result = env.render(config.template, ramlObj);
      if (config.processOutput) {
        return config.processOutput(result);
      }

      return result;
    });
  });
}

function getDefaultConfig(mainTemplate, templatesPath) {
  if (!mainTemplate) {
    mainTemplate = './lib/template.nunjucks';

    // When using the default template, make sure that Nunjucks isn't
    // using the working directory since that might be anything
    templatesPath = __dirname;
  }

  return {
    template: mainTemplate,
    templatesPath: templatesPath,
    processOutput: function(data) {
      return data.replace(/\n{3,}/g, '\n\n');
    }
  };
}

function addFilters(env, versions) {

    env.addFilter('convertToLink', function(name) {
      return name.replace(/ /g, "-").toLowerCase();
    });

    env.addFilter('printVersions', function(name) {

      if(versions) {
        var block = "{{tip}}This API reference has the following versions:<br/><ul>";

          for(var i = 0; i < versions.length; i++) {
            var linkTitle = toTitleCase(name) + " " + versions[i].toUpperCase();
            var url = "/api/" + name;

            if(i != (versions.length - 1)) {
              url += "-" + versions[i];
            }

            block += "<li><a href='" + url + "'>" + linkTitle + "</a></li>";

          }

        block += "</ul>{{end}}";

        return block;
      }

    });

    env.addFilter('printRequestName', function(obj) {

      var name = "";

      if(obj) {
        name = obj.toLowerCase().split(" ");
        name = name.join("-");
      } 
      else {
        console.log("ERROR printRequestName, you may have forgotten to give a request a displayName");
      }
      
      return util.format("<h2 id='%s' class='clickable-header top-level-header'>%s</h2>", name, obj);
    });

    env.addFilter('printCode', function(codeSamples, requestName) {

      var request = requestName.substring(requestName.indexOf("=") + 1).trim();

      for(var i = 0; i < codeSamples.length; i++) {
        if(codeSamples[i].uniqueId == request) {
          return codeSamples[i].content
        }
      }
    });

    env.addFilter('printExample', function(obj, apiName, hideGenerated, isRAMLGenerated) {

      var jsonObj = safeJsonParse(obj, "printExample");
      var exampleString = "";
      var prefixTabs = 4;

      if(jsonObj.name) {

        exampleString = createExampleForResource(obj, jsonObj.name, apiName, hideGenerated);

        //If we are returning an array, surround with []
        if(jsonObj.type === "array") {
          exampleString = "[" + exampleString + "]";
        }
      } else {
        console.log("ERROR: PrintExample parsing JSON");
      }

      if(isRAMLGenerated) {
        prefixTabs = 0;
      }

      var test = safeJsonParse(exampleString, "printExample");

      return JSON.stringify(test, undefined, prefixTabs);
    });

    env.addFilter('printResponseSchema', function (schema, title, method) {   

      var responseParameters = "";
      var requiredList = getRequiredList(schema);
      var outerSchema = safeJsonParse(schema, "printResponseSchema");

      var printBullets = false;

      //If the outer schema is not a custom resource
      if(outerSchema.exclude) {

        //Get the inner schema (array of object, object of object, etc)
        var innerSchema = extractResource(title, outerSchema.name);

        //Print if this is an array of non-custom objects
        if(!innerSchema.exclude && outerSchema.type == "array") {
          printBullets = false;
        } else {
          printBullets = true;
        }
      }

      if(printBullets) 
      {
        responseParameters += printResponseBullets(schema, title);        
      } 
      else
      {
        //Skip everything and just print a link to the resource
        var schemaObj = safeJsonParse(schema, "printResponseSchema");

        responseParameters += printResourceLink(schemaObj.type, schemaObj.name);
      }

      return responseParameters;
    });

    env.addFilter('printResponseSchemaSpecification', function(schema, method) {

      var schema = safeJsonParse(schema, "printResponseSchemaSpecification");

      var responseParameters = "";

      var properties = getPropertyNames(schema, "printResponseSchemaSpecification"); //[ "Id", "CustomerTypeId" ... ]
      var requiredList = getRequiredList(schema);

      properties = sortProperties(properties, requiredList);

      for(var i = 0; i < properties.length; i++)
      {
        var name = properties[i];
        var property = schema.properties[name];
        var type = property.type;
        var responseString = "";

        if(requiredList && requiredList.indexOf(name) > -1 || property.generated)
        {
          responseString += printBullet(name, property.putDescription, "<strong>Required</strong>");
        }
        else {
          responseString += printBullet(name, property.putDescription, "Optional");          
        }

        responseString = prefixTabs(properties[i], responseString);
        responseParameters += responseString + '\n';
      }
      

      return responseParameters;
    });

    env.addFilter('printFormParameters', function (obj) {   

      var parameters = Object.keys(obj);
      var formParams = "";

      for(var i = 0; i < parameters.length; i++) {

        var name = parameters[i];
        var property = obj[name];
        var requestString = "";

        if(property.required) {
          requestString = printBullet(name, property.description, "<strong>Required</strong>");
        }
        else {
          requestString = printBullet(name, property.description, "Optional");
        }

        formParams += requestString + '\n';
      }

      return formParams;
    });

    env.addFilter('printRequestParameters', function(schema, title, method) {

      var requestParameters = "";
      var requiredList = getRequiredList(schema);
      var outerSchema = safeJsonParse(schema, "printRequestParameters");

      var printBullets = false;

      requestParameters = printRequestBullets(schema, title, method);        
      
      return requestParameters;
    });

    env.addFilter('printResourceTable', function(obj, name, title) {

      var jsonObj = safeJsonParse(obj, "printResourceTable");
      var isExcluded = jsonObj.exclude;
      var schema = extractResource(title, name);
      var table = "";

      if(!isExcluded) {

        table += "###" + name + "\n\n";

        if(schema.description)
        {
          table += schema.description + "\n\n";
        }

        table += "| Name | Data Type | Description | Example |\n|:-----|:----------|:------------|:--------|\n";

        var properties = getPropertyNames(schema, "printResourceTableProperties"); //[ "Id", "CustomerTypeId" ... ]

        if(properties) {
          table += printResourceTableProperties(schema, properties, "");
        }
        else {
          console.log("ERROR printResourceTable no properties to print!");
        }

      }

      return table;
    });

    env.addFilter('fixTitleUrl', function(title, version) {

      var title = title.replace(" ", "-");

      if(versions && versions[versions.length - 1] != version) {
        title += "-" + version;
      }

      return title;
    });

    env.addFilter('fixTitle', function(title) {
      var fixedTitle = "";

      if(!title) {
        console.log("ERROR: fixTitle missing title");
      }

      switch(title.toLowerCase()) {
        case "cmi":
          fixedTitle = "Customer Managed Inventory";
          break;
        case "crm":
          fixedTitle = "Customers";
          break;
        case "availability":
          fixedTitle = "Inventory Availability";
          break;
        case "entity-store":
          fixedTitle = "Entities";
          break;
        case "epc":
          fixedTitle = "Electronic Product Catalog (EPC)";
          break;
        case "product-library":
          fixedTitle = "Products";
          break;
        default:
          fixedTitle = title;
      }

      fixedTitle = fixedTitle.replace("-", " ");

      return toTitleCase(fixedTitle);
    });

    env.addFilter('insertDate', function() {
      // Date format: dd-mm-yyyy
      var date = convertDateToUTC(new Date());
      var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      return dateString;
    });

    env.addFilter('replaceWithExamples', function(uri, obj) {
      
      var sections = uri.split('{');
      var uriWithExamples = uri;

      if(sections.length > 1)
      {
        for (var i = 1; i < sections.length; i++) {
          var section = sections[i].substr(0,sections[i].indexOf('}'));
          var sectionText = "{" + section + "}";
          var exampleVal = obj[section].example;

          //Nunjucks messes up the date, put it back to normal format. Notably, NOT the best way of determining that this is a date string
          if(obj[section].type === "string" && obj[section].displayName.indexOf("Date") > -1) {
            exampleVal = convertDateToUTC(new Date(exampleVal)).toISOString();    
          }
          
          uriWithExamples = uriWithExamples.replace(sectionText, exampleVal);
        }
      }

      return uriWithExamples;
    });

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function processName(name) {

  if(name && name.indexOf(".") > -1) {
    var tokens = name.split(".");
    name = tokens[tokens.length - 1]; //Actual name
  }

  return name;
}

function prefixTabs(name, str) {

  var tokens = name.split(".");

  //Prefix padding for each .
  for(var i = 0; i < tokens.length; i++) {
    str = "  " + str;
  }

  return str;
}

//Inefficient sort is inefficient
function sortProperties(names, requiredList) {
  var sortedNames = [];

  for(var i = 0; i < names.length; i++) {

    var name = names[i];

    //If this is an object, do not attempt to sort
    if(name.indexOf('.') > -1) {
      return names;
    }

    if(requiredList.indexOf(name) > -1) {
      sortedNames.push(name);
    }
  }

  //Add all remaining "non-required" values to the end
  for(var i = 0; i < names.length; i++) {
    var name = names[i];

    if(sortedNames.indexOf(name) == -1) {
      sortedNames.push(names[i]);
    }
  }

  return sortedNames;
}

function createExampleForResource(obj, schemaName, apiName, hideGenerated) {

  var exampleString = "{";
  var resource;
  var resourceProperties;

  //Get the resource
  if(schemaName) {
    resource = extractResource(apiName, schemaName);
  }
  else {
    resource = safeJsonParse(obj, "createExampleForResource");

    if(!resource || !resource.properties) {
      console.log("ERROR: createExampleForResource Resource failed to parse");
    }
  }

  resourceProperties = getPropertyNames(resource, "createExampleForResource");

  for(var i = 0; i < resourceProperties.length; i++) {

    var name;
    var property;
    var example;
    var hideProperty = false;
    var isLegacy = false;

    if(schemaName) {
      name = resourceProperties[i];
      property = resource.properties[name];
    } else {
      name = resourceProperties[i];
      property = resource.properties[name];
    }

    if(property.description) 
    {
        isLegacy = doNotPrint(property.description);
    }

    if(isLegacy || property.hideFromExample) {
      //case 1 - hide this property if it is legacy or forced to "off" with hideFromExample enabled
      hideProperty = true;
    } else if(hideGenerated && property.generated) {
      //case 2 - hide this property if "hide generated" is enabled and this is a generated property
      hideProperty = true;
    } else if (name.indexOf(".") > -1) {
      //case 3 - none of the above, hide property
      hideProperty = true;
    }

    if(!hideProperty) {
      property.name = name;

      exampleString += createExampleForProperty(property, apiName, hideGenerated);

       //Add comma if this is NOT the last resource
       if(i != (resourceProperties.length - 1)) {
           exampleString += ",";
       }

    } else {
      //Remove trailing comma if the last parameter was not printed (hidden)
      if(i == (resourceProperties.length - 1)) {
        var pos = exampleString.lastIndexOf(",")
        exampleString = exampleString.substring(0, pos) + exampleString.substring(pos + 1);
      }
    }
  }

  exampleString += "}";

  return exampleString;
}

function createExampleForProperty(property, apiName, hideGenerated) {

  var exampleString = "";
  var name = property.name;
  var example = "";
  var resourceName = "";

  if(!property.type) {
    console.log("ERROR: createExampleForProperty %s in %s has no type", name, apiName);
  }

  var type = property.type.toLowerCase();

  var referenceValue = property.ref;

  //If this is a simple value replace, do so
  if(referenceValue && type != "object" && type != "array") {
    property.example = getValueFromAPI(referenceValue);
  }

  //Put the values back, as we are passing the property as an object b/w calls
  example = property.example;
  property.type = type;

  if (type === "array")
  {
      exampleString += printArrayExample(property, apiName, hideGenerated);
  }
  else if (type === "object") {

    if(example) {
      exampleString += printExample(name, type, example, hideGenerated);
    } 
    else if (!referenceValue) {
      exampleString += printExample(name, type, "{}", hideGenerated);
    }
    else {
      //Extract the reference name and print next level
      exampleString += util.format("\"%s\": ", name);

      apiName = referenceValue.split(".")[0];
      resourceName = referenceValue.split(".")[1];

      exampleString += createExampleForResource(null, resourceName, apiName, hideGenerated);    
    }
  }
  else {
    exampleString += printExample(name, type, example, hideGenerated);
  }

  return exampleString;  
}

function printArrayExample(property, apiName, hideGenerated) {
  var exampleString = "";
  var referenceValue = "";

  if(property.example || !property.ref) {
    //Array has an override example, so use it
    if(property.arrayType == "string") {
      exampleString += printExample(property.name, property.type, "[\"" + property.example + "\"]");
    } else {
      exampleString += printExample(property.name, property.type, "[" + property.example + "]");
    }
  } 
  else if (property.ref) {

    var resourceName = property.ref;
    var tokens = property.ref.split(".");

    exampleString += util.format("\"%s\": [", property.name);

    if(tokens.length > 1) {
      apiName = property.ref.split(".")[0];
      referenceValue = property.ref.split(".")[1];
    } 

    exampleString += createExampleForResource(null, referenceValue, apiName, hideGenerated);    
    exampleString += "]";      

  } else {
    console.log("ERROR: printArrayExample Unable to parse array");
  }

  return exampleString;
}

function printExample(name, type, example) {

  var exampleString = "";
  var quoteless = [ "boolean", "byte", "decimal", "integer", "object", "array" ];
  var quoted = [ "string", "datetime", "guid" ];

  if(quoted.indexOf(type.toLowerCase()) > -1) {
    exampleString += util.format('"%s": "%s"', name, example);
  } 
  else if(quoteless.indexOf(type.toLowerCase()) > -1) {
    exampleString += util.format('"%s": %s', name, example);
  } else {
    console.log("ERROR: Unsupported type in printExample %s", type);
  }

  return exampleString;
}

function getValueFromAPI(propertyName) {

  var tokens = propertyName.split(".");
  var value;

  if (tokens.length === 3) {

    var resource = extractResource(tokens[0], tokens[1]);
    var property = resource.properties[tokens[2]];

    if(resource && property) {
      value = property.example;
    }
    else {
      console.log("ERROR: getValueFromAPI Resource or property %s could not be found", propertyName);
    }
  }
  else {
      console.log("ERROR: getValueFromAPI Reference value cannot be parsed: %s", propertyName);
  }

  return value;
}

function printBullet(name, description, paramString) {

  var bulletString = "";

  if(description) {
    description = "- " + description;
  } else {
    description = "";
  }

  bulletString += "<li><code>" + name + "</code> ("+ paramString +") " + description + "</li>";

  return bulletString;
}

function doNotPrint(description) {
  return description && (description.indexOf("legacy") > -1 || description.indexOf("reserved") > -1 || description.indexOf("internal use") > -1 || description.indexOf("future use") > -1);
}

function extractResource(apiName, resourceName) {

  var found = false;

  for (var i = 0; i < RESOURCES.length; i++) {
    var API = RESOURCES[i];
    if(apiName === API.name) {
      //Found the correct API
      for(var j = 0; j < API.resources.length; j++) {
        var resource = API.resources[j];
        if(resource.name === resourceName) {
          //Found the correct resource
          found = true;
          return resource.schema;
        }
      }
    }
  }

  if(!found) {
    console.log("ERROR: extractResource SCHEMA NOT FOUND for %s", apiName);
  }
}

function getPropertyNames(obj, source) {

  if(!obj || !obj.properties) {
    console.log("ERROR: getPropertyNames originating from %s", obj.name);
  }
  else
  {
    return Object.keys(obj.properties);
  }
}

function printResourceLink(schemaType, schemaName) {

  var resourceLink = "";

  if(schemaType === "object") {
    resourceLink = linkWrap(schemaName);
  } 
  else if(schemaType === "array") {
    resourceLink += "Array[" + linkWrap(schemaName) + "]";
  } else {
    console.log("ERROR: Unsupported type in schema %s, must be array or object", schemaName);
  }  

  return resourceLink;
}

function linkWrap(value) {
  return util.format("<a href='#%s'>%s</a>", value.toLowerCase(), value);
}

function printResponseBullets(schema, title, method) {

  //Get the schema if we do not have it
  if(!schema.name) {
    var schemaObj = safeJsonParse(schema, "printRequestBullets");
    schema = extractResource(title, schemaObj.name);
  }

  var properties = getPropertyNames(schema, "printResponseSchema");
  var responseParameters = "<ul>";

  if(properties.length == 0) {
    return "";
  }

  for(var i = 0; i < properties.length; i++)
  {
      var name = properties[i];
      var responseString = "";

      //Ignore resources that are included in the table only for response bullets
      if(name.indexOf(".") == -1) {

        var property = schema.properties[name];

        //Not a simple replacement
        if(property.ref && (property.type === "array" || property.type === "object")) {

          var tokens = property.ref.split(".");

          if(tokens.length > 1) {

            var apiName = tokens[0];
            var resourceName = tokens[1];
            var resource = extractResource(apiName, resourceName);

            //Do not print links to custom resources
            if(resource.exclude) {
              responseString += printBullet(name, property.putDescription, toTitleCase(property.type));
            } 
            else {
              responseString += printBullet(name, property.putDescription, printResourceLink(property.type, resourceName));
            }

            //Print bullets for sub-object
            responseString += printResponseBullets(resource, apiName);
          }
        } 
        else {
          responseString += printBullet(name, property.putDescription, toTitleCase(property.type));
        }
    }

    responseParameters += responseString;
  }

  responseParameters += "</ul>";

  return responseParameters;
}

function printResourceTableProperties(schema, properties, prefix) {

  var table = "";

  for(var i = 0; i < properties.length; i++) {
    var name = properties[i];
    var dataType = "";
    var description = "";
    var example = "";
    var property = schema.properties[name];
    var alreadyPrinted = false;

    if(prefix != "" && !schema.exclude) {
      prefix = "";
    }

    if(!property) {
      console.log(properties)
    }

    //Override case, do not show if set or if the name has a "." (legacy case)
    var hideFromTable = property.hideFromTable || name.indexOf(".") > -1;

    if(!hideFromTable) {

      if(property.type) {
        dataType = property.type;
      }

      if(property.description)
      {
        description = property.description;
      }

      if(property.ref) {
        //If this is a simple value replace, do so
        if(property.ref && dataType != "object" && dataType != "array") {
            property.example = getValueFromAPI(property.ref);
        } 
        else {

          var tokens = property.ref.split(".");
          var value = tokens[tokens.length - 1];

          //Special case - Nesting allows us to nest the table.
          //STOP NEST is used if we want to have a semi-nested object - one level of nesting, one level of split-resource, to designate where to stop
          if(property.isNested && !property.stopNest) {

            //First print the header
            if(property.arrayType) {
              //case 1: Nested array, print array of object/string/etc
              dataType = util.format("Array[%s]", property.arrayType);
            } 
            else {
              //case 2: Nested object, print object
              dataType = property.type;
            }

            table += "| " + prefix + name + " | " + dataType +" | " + description +" | " + example + " |\n";

            alreadyPrinted = true;

            var apiName = tokens[0];
            var schemaName = tokens[1];
            var innerSchema = extractResource(apiName, schemaName);

            //Recurse!
            var innerProperties = getPropertyNames(innerSchema, "printResourceTableProperties"); //[ "Id", "CustomerTypeId" ... ]

            prefix = prefix + name + ".";

            table += printResourceTableProperties(innerSchema, innerProperties, prefix);
          }
          else {
            if(property.arrayType) {
              //case 3: Regular table, print array of link to object
              dataType = util.format("Array[%s]", linkWrap(value));
            }
            else {
              //case 4: Regular table, print link to object
              dataType = linkWrap(value);
            }
          }
        }
      } 
      else if (property.type == "array" && property.arrayType) {
        dataType = "Array[" + property.arrayType + "]";
      }

      if(property.size) {
        dataType += "("+ property.size +")";
      }

      if(property.example) {
        example = "`" + property.example + "`";
      }

      if(dataType.match(/guid/i) && dataType.match(/guid/i).length > 0) {
        dataType = "GUID";
      }
      else if (dataType.match(/datetime/i) && dataType.match(/datetime/i).length > 0) {
        dataType = "DateTime";
      }
      else if (dataType.indexOf("#") == -1) {
        dataType = toTitleCase(dataType);
      }

      var isLegacy = doNotPrint(property.description);

      if(!alreadyPrinted) {
        if(isLegacy) {
          table += "| *" + prefix + name + "* | *" + dataType +"* | *" + description +"* | |\n";
        }
        else {
          table += "| " + prefix + name + " | " + dataType +" | " + description +" | " + example + " |\n";
        }    
      }      
    }
  }  
  

  return table;
}

function printRequestBullets(schema, title, method) {

  //Get the schema if we do not have it
  if(!schema.name) {

    var schemaObj = safeJsonParse(schema, "printRequestBullets");
    schema = extractResource(title, schemaObj.name);
  }

  var table = "";
  var requestParameters = "";
  var requiredList = getRequiredList(schema);
  var properties = getPropertyNames(schema, "printRequestBullets"); //[ "Id", "CustomerTypeId" ... ]

  if(requiredList) {
    properties = sortProperties(properties, requiredList);
  }

  requestParameters = "<ul>";

  for(var i = 0; i < properties.length; i++)
  {
    var name = properties[i];
    var property = schema.properties[name];

    var requestString = "";
    var isGenerated = property.generated;
    var legacy = doNotPrint(property.description);

    if(!legacy)
    {
      if(!isGenerated || ( method == "put" && property.putGenerate)) {

        //Ignore anything in the schema with a "." in the name, those are only for table display
        if(name.indexOf(".") == -1) {

          var description = property.putDescription;
          var required = "Optional";

          if(requiredList && requiredList.indexOf(properties[i]) > -1 || property.generated) {
            required = "<strong>Required</strong>";
          }

          requestString += printBullet(name, description, required);

          if(property.ref && (property.type === "array" || property.type === "object")) {
            var tokens = property.ref.split(".");

            var apiName = tokens[0];
            var schemaName = tokens[1];
            var innerSchema = extractResource(apiName, schemaName);

            requestString += printRequestBullets(innerSchema, apiName, method);
          }
        }
      }
    }

    requestParameters += requestString;
  }

  requestParameters += "</ul>";

  return requestParameters;
}

function fixSpacing(subStrings) {

  var tokens = subStrings.split("\n");
  var tabbedString = "";

  for (var i = 0; i < tokens.length; i++) {
    tokens[i] = "  " + tokens[i];
  }

  tabbedString += tokens.join("\n");

  return tabbedString;
}

function safeJsonParse(obj, functionName) {
  var jsonObj;

  try {
    jsonObj = JSON.parse(obj);
  } 
  catch(e) {
    console.log(obj);
    console.log("JSON error parse at %s", functionName);
  }

  return jsonObj;
}

function getRequiredList(schema) {

  var requiredList = null;

  if(schema.required) {
    requiredList = schema.required;
  }

  return requiredList;
}

function convertDateToUTC(date) { 
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}
