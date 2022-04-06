let warned = false;
function warn(detailsMessage) {
  if (warned) {
    return;
  }
  console.warn(
    "@phantom-labs/blocklist is not intended for use in-browser.",
    detailsMessage
  );
  warned = true;
}

const getVersion = () => {
  warn("`getVersion()` has returned a fake version");
  return "0.0.0";
};

const EMPTY_BLOCKLIST = {
  contentHash: "",
  blocklist: [],
  fuzzylist: [],
  whitelist: [],
};
const getBlocklist = () => {
  warn("`getBlocklist()` has returned an empty blocklist");
  return EMPTY_BLOCKLIST;
};

exports.getVersion = getVersion;
exports.getBlocklist = getBlocklist;
