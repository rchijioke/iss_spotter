//{"ip":"50.71.110.119"}

// index.js
const {fetchMyIp, fetchCoordsByIP}  = require("./iss");


fetchMyIp( (error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});


fetchCoordsByIP( "50.71.110.119",(error, data) => {
 if (error){ 
  console.log("IPv4 didnt workIt didn't work! Error: Success status was false. Server message says: Invalid IP address when fetching for IP", error)
  return
 }
 
 console.log(data)
 
 });
