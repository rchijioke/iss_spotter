//{"ip":"50.71.110.119"}

// index.js
const { fetchMyIP } = require('./iss');

Ip = `https://api.ipify.org/?format=json`
const NewIp = function (Ip, callback) {
  request(Ip, (error, response, body) => {
      callback(error, response, body);
    }
  );
};

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
