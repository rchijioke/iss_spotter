/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");
ip = `https://api.ipify.org/?format=json`;

const fetchMyIp = function (callback) {
  // use request to fetch IP address from JSON API
  request(ip, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    callback(null, data.ip);
  });
};

apiUrl = `http://ipwho.is/`
const fetchCoordsByIP = function (iP,callback) {
request(apiUrl + iP,(error, response, body) => {
  if (error) {
    callback(error, null);
    return;
};
const parsedBody = JSON.parse(body);

// check if "success" is true or not
if (!parsedBody.success) {
  const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
  callback(Error(message), null);
  return;
}
let parsedLat = parsedBody.latitude
let parsedLong = parsedBody.longitude
const result = "{latitude: " + parsedLat + ", longitude: "+ parsedLong + " }"; 
callback(null, result)
})
}
module.exports =  {fetchMyIp, fetchCoordsByIP}