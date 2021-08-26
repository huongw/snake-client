const net = require('net');

const connect = function () {
  const conn = net.createConnection({ // used node's net library to create an object named conn
    host: `135.23.223.133`,
    port: 50542
  });

  conn.setEncoding(`utf8`);

  conn.on(`connect`, () => {
    conn.write(`Name: WH`);

    // setInterval(() => { conn.write(`Move: up`) }, 50);

    console.log(`I am connected`)
  })

  conn.on(`data`, (data) => {
    console.log(data)
  })

  return conn; // the conn object that node returned represents the connection with the server
};


console.log(`connecting...`);

module.exports = connect;