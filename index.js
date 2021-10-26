const { version } = require("./package.json");
const blocklist = require("./blocklist.json");

const getVersion = () => {
  return version;
}

const getBlocklist = () => {
  return blocklist;
}

exports.getVersion = getVersion;
exports.getBlocklist = getBlocklist;
