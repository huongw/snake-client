const net = require('net');
const {IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({ // used node's net library to create an object named conn
    host: IP,
    port: PORT
  });

  conn.setEncoding(`utf8`);

  conn.on(`connect`, () => {
    conn.write(`Name: WH`);

    console.log(`I am connected`);
  })

  conn.on(`data`, (data) => {
    console.log(data);
  })

  return conn; // the conn object that node returned represents the connection with the server
};


console.log(`connecting...`);

module.exports = connect;