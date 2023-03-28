//{"ip":"50.71.110.119"}

// index.js
const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("50.71.110.119", (error, data) => {
  if (error) {
    console.log(
      "IPv4 didnt workIt didn't work! Error: Success status was false. Server message says: Invalid IP address when fetching for IP",
      error
    );
    return;
  }

  console.log(data);
});

const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned flyover times:", passTimes);
});
