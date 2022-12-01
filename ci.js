const yaml = require('js-yaml');
const fs   = require('fs');

const blocklist = yaml.load(fs.readFileSync('./blocklist.yaml', 'utf8'));
const nftBlocklist = yaml.load(fs.readFileSync('./nft-blocklist.yaml', 'utf8'));
const whitelist = yaml.load(fs.readFileSync('./whitelist.yaml', 'utf8'));
const fuzzylist = yaml.load(fs.readFileSync('./fuzzylist.yaml', 'utf8'));
const ethBlocklist = yaml.load(fs.readFileSync('./eth-blocklist.yaml', 'utf8'));

if(blocklist.some(item => !item.url)) {
  console.log("Not every blocklist item has a `url` attribute");
  process.exit(1);
}

if(ethBlocklist.some(item => !item.url)) {
  console.log("Not every blocklist item has a `url` attribute");
  process.exit(1);
}

if(whitelist.some(item => !item.url)) {
  console.log("Not every whitelist item has a `url` attribute");
  process.exit(1);
}

if(nftBlocklist.some(item => !item.mint)) {
  console.log("Not every NFT blocklist item has a `mint` attribute");
  process.exit(1);
}

if(fuzzylist.length > 0) {
  console.log("Fuzzylist entry detected without the fuzzylist being explicitly enabled");
  process.exit(1);
}
