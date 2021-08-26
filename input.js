
const connect = require("./client");
const { keyboard } = require("./constants");
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
  } 

  connection.write(keyboard[data])
};

connect();

module.exports = setupInput