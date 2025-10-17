// sign-admin.js
// Usage: node sign-admin.js ./my-keypair.json "<exact message text>"
// Requires: npm i tweetnacl bs58 @solana/web3.js
const fs = require('fs');
const nacl = require('tweetnacl');
const bs58 = require('bs58');
const { Keypair } = require('@solana/web3.js');

if (process.argv.length < 4) {
  console.error('Usage: node sign-admin.js <keypair.json> "<message>"');
  process.exit(1);
}
const keypairPath = process.argv[2];
const message = process.argv.slice(3).join(' ');

const secretArr = JSON.parse(fs.readFileSync(keypairPath, 'utf8'));
const secretKey = Uint8Array.from(secretArr);
const keypair = Keypair.fromSecretKey(secretKey);

const messageBytes = Buffer.from(message, 'utf8');
const signature = nacl.sign.detached(messageBytes, keypair.secretKey);

console.log('publicKey:', keypair.publicKey.toBase58());
console.log('message:', message);
console.log('signature_base58:', bs58.encode(signature));