const yaml = require('js-yaml');
const fs   = require('fs');
const { SHA3 } = require('sha3');

const hash = new SHA3(256);

const blocklist = yaml.load(fs.readFileSync('./blocklist.yaml', 'utf8'));
const nftBlocklist = yaml.load(fs.readFileSync('./nft-blocklist.yaml', 'utf8'));
const whitelist = yaml.load(fs.readFileSync('./whitelist.yaml', 'utf8'));
const fuzzylist = yaml.load(fs.readFileSync('./fuzzylist.yaml', 'utf8'));

const data = {
  "blocklist": blocklist.map((item) => { return item.url }),
  "nftBlocklist": nftBlocklist.map((item) => { return item.mint }),
  "whitelist": whitelist.map((item) => { return item.url }),
  "fuzzylist": fuzzylist.map((item) => { return item.url })
};

hash.update(JSON.stringify(data));
const contentHash = hash.digest('hex');

const dataFull = {
  "blocklist": blocklist,
  "nftBlocklist": nftBlocklist,
  "whitelist": whitelist,
  "fuzzylist": fuzzylist
};

data["contentHash"] = contentHash;
dataFull["contentHash"] = contentHash;

fs.writeFileSync("./blocklist.json", JSON.stringify(data));
fs.writeFileSync("./content-hash.json", JSON.stringify(contentHash));
fs.writeFileSync("./blocklist-full.json", JSON.stringify(dataFull));
