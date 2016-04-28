
$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });

    //Check if there is a code preference, if so set it
    if(getCookie("code-preference") != "" && getCookie("code-preference") != null) {
        setTabsToPreference(getCookie("code-preference"));
    }

    //When a user clicks a tab, set that as the new preference for 30 days
    $(".nav-tabs li a").click(function(e) { 
        var preference = $(e.target).text();

        setCookie("code-preference", preference, 30)
        
        var href = $(e.target).attr("href"); // #(language)-(name) => #(language)-code-(name)
        var pos = href.indexOf("-");
        var methodName = href.substring(pos+1);
        var methodHook =  href.substring(0, pos+1) + "code-" + methodName;

        setCopyTarget(methodName, methodHook);
    });

    var clipboard = new Clipboard('.copy-button');


    //Set entity cookie if there is a URL parameter
    if(window.location.search != "" && window.location.search.indexOf("=") > -1) {
        var entityValue = window.location.search.split("=")[1];
        setCookie("entity", entityValue);
    }

    if(getCookie("entity") != "" && getCookie("entity") != null) {
        var entityValue = getCookie("entity");
        //hide anything that is hidden for that entity
        $("." + entityValue).hide();
    }
});

function setCopyTarget(methodName, methodHook) {
    $("#copy-" + methodName).attr("data-clipboard-target", methodHook);
}

function setTabsToPreference(preference) {

    $(".nav-tabs li").removeClass("active");

    $(".nav-tabs li").each(function() {
        
        var value = $(this).children()[0].text.toLowerCase();

        if(value == preference.toLowerCase()) {
            $(this).children()[0].click();

            var href = $(this).children()[0].href.substring($(this).children()[0].href.indexOf("#")); // #(language)-(name) => #(language)-code-(name)
            var pos = href.indexOf("-");
            var methodName = href.substring(pos+1);
            var methodHook =  href.substring(0, pos+1) + "code-" + methodName;

            setCopyTarget(methodName, methodHook);

        }
    });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

