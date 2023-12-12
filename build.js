const yaml = require('js-yaml');
const fs   = require('fs');
const { SHA3 } = require('sha3');

// Filter functions to ensure correct data types
const filterUrls = (entry) => {
  if (!entry || typeof entry.url !== "string") {
    return false;
  }

  return true;
};
const filterNfts = (entry) => {
  if (!entry || typeof entry.mint !== "string") {
    return false;
  }

  return true;
};

// Read local yaml files for blocklists
const solBlocklist = yaml.load(fs.readFileSync('./blocklist.yaml', 'utf8')).filter(filterUrls);
const ethBlocklist = yaml.load(fs.readFileSync('./eth-blocklist.yaml', 'utf8')).filter(filterUrls);
const nftBlocklist = yaml.load(fs.readFileSync('./nft-blocklist.yaml', 'utf8')).filter(filterNfts);
const whitelist = yaml.load(fs.readFileSync('./whitelist.yaml', 'utf8')).filter(filterUrls);
const fuzzylist = yaml.load(fs.readFileSync('./fuzzylist.yaml', 'utf8'));

// Multichain blocklist concatenates each blockchains blocklist
const solBlocklistArray = solBlocklist.map((item) => { return item.url });
const ethBlocklistArray = ethBlocklist.map((item) => { return item.url });
// Important: Solana list must be at the head because of the way the cursor works
// TODO: This is jank, we should fix this
const multichainBlocklistArray = solBlocklistArray.concat(ethBlocklistArray);

// Construct output files for solana only
const data = {
  "blocklist": solBlocklistArray,
  "nftBlocklist": nftBlocklist.map((item) => { return item.mint }),
  "whitelist": whitelist.map((item) => { return item.url }),
  "fuzzylist": fuzzylist.map((item) => { return item.url })
};

const hash = new SHA3(256);
hash.update(JSON.stringify(data));
const contentHash = hash.digest('hex');

const dataFull = {
  "blocklist": solBlocklist,
  "nftBlocklist": nftBlocklist,
  "whitelist": whitelist,
  "fuzzylist": fuzzylist
};

data["contentHash"] = contentHash;
dataFull["contentHash"] = contentHash;

fs.writeFileSync("./blocklist.json", JSON.stringify(data));
fs.writeFileSync("./content-hash.json", JSON.stringify(contentHash));
fs.writeFileSync("./blocklist-full.json", JSON.stringify(dataFull));

// Construct output files for multichain
const dataMultichain = {
  "blocklist": multichainBlocklistArray,
  "nftBlocklist": nftBlocklist.map((item) => { return item.mint }),
  "whitelist": whitelist.map((item) => { return item.url }),
  "fuzzylist": fuzzylist.map((item) => { return item.url })
};

const hashMultichain = new SHA3(256);
hashMultichain.update(JSON.stringify(data));
const contentHashMultichain = hashMultichain.digest('hex');

const dataMultichainFull = {
  // TODO: Fix so we don't rely on ordering
  "blocklist": solBlocklist.concat(ethBlocklist),
  "nftBlocklist": nftBlocklist,
  "whitelist": whitelist,
  "fuzzylist": fuzzylist,
  "ethBlocklist": ethBlocklist,
  "solBlocklist": solBlocklist
};

dataMultichain["contentHash"] = contentHashMultichain;
dataMultichainFull["contentHash"] = contentHashMultichain;

if (!fs.existsSync("./multichain")){
  fs.mkdirSync("./multichain");
}
fs.writeFileSync("./multichain/blocklist.json", JSON.stringify(dataMultichain));
fs.writeFileSync("./multichain/content-hash.json", JSON.stringify(contentHashMultichain));
fs.writeFileSync("./multichain/blocklist-full.json", JSON.stringify(dataMultichainFull));
