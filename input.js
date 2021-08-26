const connect = require("./client");
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);

  stdin.setEncoding("utf8");

  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003' || data === 'q') {
    process.exit();
  } else if (data === 'w') {
    connection.write(`Move: up`);
  } else if (data === 'a') {
    connection.write(`Move: left`);
  } else if (data === 's') {
    connection.write(`Move: down`);
  } else if (data === 'd') {
    connection.write(`Move: right`);
  }
};

connect();

module.exports = setupInput