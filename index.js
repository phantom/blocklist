const { version } = require("./package.json");
const blocklist = require("./blocklist.json");
const blocklistMultichain = require("./multichain/blocklist.json");

const getVersion = () => {
  return version;
}

const getBlocklist = () => {
  return blocklist;
}

const getBlocklistMultichain = () => {
  return blocklistMultichain;
}

exports.getVersion = getVersion;
exports.getBlocklist = getBlocklist;
exports.getBlocklistMultichain = getBlocklistMultichain;
