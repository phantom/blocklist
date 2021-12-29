const yaml = require('js-yaml');
const fs   = require('fs');
const { SHA3 } = require('sha3');

const hash = new SHA3(256);

const blocklist = yaml.load(fs.readFileSync('./blocklist.yaml', 'utf8'));
const whitelist = yaml.load(fs.readFileSync('./whitelist.yaml', 'utf8'));
const fuzzylist = yaml.load(fs.readFileSync('./fuzzylist.yaml', 'utf8'));

const data = {
  "blocklist": blocklist.map((item) => { return item.url.toLowerCase() }),
  "whitelist": whitelist.map((item) => { return item.url.toLowerCase() }),
  "fuzzylist": fuzzylist.map((item) => { return item.url.toLowerCase() })
};

hash.update(JSON.stringify(data));
const contentHash = hash.digest('hex');

const dataFull = {
  "blocklist": blocklist,
  "whitelist": whitelist,
  "fuzzylist": fuzzylist
};

data["contentHash"] = contentHash;
dataFull["contentHash"] = contentHash;

fs.writeFileSync("./blocklist.json", JSON.stringify(data));
fs.writeFileSync("./content-hash.json", JSON.stringify(contentHash));
fs.writeFileSync("./blocklist-full.json", JSON.stringify(dataFull));
