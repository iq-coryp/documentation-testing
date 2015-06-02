using System;
using System.Json;
using System.Linq;
using System.Net.Http;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;

namespace RestClient
{
    /// <summary>
    /// This code sample needs the HttpClient NuGet package if not running .NET 4.5
    /// 
    /// "This package contains a general purpose HttpClient with rich support for JSON and XML formats"
    /// 
    /// It is part of the WebAPI component which is included in ASP.NET MVC 4.0.
    /// 
    /// </summary>
    class Program
    {
        private const string BaseUrl = "https://xqtest.iqmetrix.net/api";
        private static string _sessionKey;

        static void Main(string[] args)
        {
            HttpClient client = new HttpClient {MaxResponseContentBufferSize = 1024*1024};

            // Log in and create a session key for your account
            LogIn(client, "jeffv", "Password");

            // Returns 50 products in the logged in user's account.
            dynamic model = Get50Products(client).AsDynamic();

            foreach (var product in model.Products)
                Console.WriteLine(product.Model.Value);

            // Returns 20 products that contain "BlackBerry"
            model = Get20ProductsWithBlackberry(client).AsDynamic();

            foreach (var product in model.Products)
                Console.WriteLine(product.Model.Value);

            // Returns all stores associated with an account
            var stores = GetAllStores(client).AsDynamic();

            foreach (dynamic store in stores)
                Console.WriteLine(store.Name.Value);

            client.Dispose();
        }

        /// <summary>
        /// Login to the XQ API and save the session key
        /// </summary>
        /// <param name="client">HttpClient</param>
        /// <param name="username">username</param>
        /// <param name="password">password</param>
        private static void LogIn(HttpClient client, string username, string password)
        {
            Credentials credentials = new Credentials {password = password, username = username};  // .NET object to send
            JsonValue jsonCredentials = JsonValueExtensions.CreateFrom(credentials);                // convert to JSON

            HttpContent loginBody = new StringContent(jsonCredentials.ToString(), Encoding.UTF8, @"application/json");

            Task<HttpResponseMessage> loginResult = client.PostAsync(BaseUrl + "/sessions", loginBody);
            loginResult.Wait();

            HttpContent loginResponse = loginResult.Result.Content;
            if (loginResult.Result.IsSuccessStatusCode)
            {
                Task<SessionModel> loginSession = loginResponse.ReadAsOrDefaultAsync<SessionModel>();
                loginSession.Wait();
                _sessionKey = loginSession.Result.SessionKey.Trim(new[] {'"'});
            }
            else
            {
                Task<JsonValue> error = loginResponse.ReadAsOrDefaultAsync<JsonValue>();
                error.Wait(); 
                Console.WriteLine(loginResult.Result.StatusCode);   // error code
                Console.WriteLine(error.Result["Message"]);         // error message
            }
        }

        /// <summary>
        /// Get the first 50 products for this account
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        private static JsonValue Get50Products(HttpClient client)
        {
            return ExecuteGet<JsonValue>(client, "/products");
        }

        /// <summary>
        /// Get the first 20 products for the account that contain the phrase "blackberry"
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        private static JsonValue Get20ProductsWithBlackberry(HttpClient client)
        {
            string url = TackOnParameter("/products", "blackberry", "keyword");
            url = TackOnParameter(url, "20", "pagesize");
            return ExecuteGet<JsonValue>(client, url);
        }

        /// <summary>
        /// Get a list of all stores for the account
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        private static JsonValue GetAllStores(HttpClient client)
        {
            return ExecuteGet<JsonValue>(client, "/stores");
        }

        /// <summary>
        /// Execute an HTTP GET against the XQ API
        /// </summary>
        /// <typeparam name="T">Return Type</typeparam>
        /// <param name="client"></param>
        /// <param name="endpoint"></param>
        /// <returns></returns>
        private static T ExecuteGet<T>(HttpClient client, string endpoint)
        {
            string url = TackOnParameter(BaseUrl + endpoint, _sessionKey, "api_key");

            var call = client.GetAsync(url);
            call.Wait();
         
            if (!call.Result.IsSuccessStatusCode)
            {
                Task<JsonValue> error = call.Result.Content.ReadAsOrDefaultAsync<JsonValue>();
                error.Wait();                                          // wait for async to finish
                throw new Exception(string.Format("Failed {0} - {1}", call.Result.StatusCode, error.Result["Message"]));
            }

            Task<T> resultToJsonCall = call.Result.Content.ReadAsOrDefaultAsync<T>();
            resultToJsonCall.Wait();

            return resultToJsonCall.Result;
        }

        /// <summary>
        /// Helper method for adding query parameters
        /// </summary>
        /// <param name="url">url to add parameters to</param>
        /// <param name="value">parameter value</param>
        /// <param name="key">parameter key</param>
        /// <returns>completed url</returns>
        static string TackOnParameter(string url, string value, string key)
        {
            if (string.IsNullOrWhiteSpace(value))
                return url;

            var paramval = Uri.EscapeUriString(value);
            var keystring = string.Format("{0}={1}", key, paramval);

            return string.Format("{0}{1}{2}", url, (url.Contains('?') ? "&" : "?"), keystring);
        }
    }

    /// <summary>
    /// POCO for credentials
    /// </summary>
    public class Credentials
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    /// <summary>
    /// POCO for login response
    /// </summary>
    public class SessionModel
    {
        public string SessionKey { get; set; }
        public DateTime Expires { get; set; }
        public string Id { get; set; }
        public Guid AccountId { get; set; }
        public string[] Roles { get; set; }
    }
}
