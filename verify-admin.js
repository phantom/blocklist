// verify-admin.js
// Usage: node verify-admin.js <publicKey> "<message>" <signature_base58>
// Requires: npm i tweetnacl bs58 @solana/web3.js
const nacl = require('tweetnacl');
const bs58 = require('bs58');
const { PublicKey } = require('@solana/web3.js');

if (process.argv.length < 5) {
  console.error('Usage: node verify-admin.js <publicKey> "<message>" <signature_base58>');
  process.exit(1);
}
const pubKeyStr = process.argv[2];
const message = process.argv[3];
const sigBase58 = process.argv[4];

const pubkey = new PublicKey(pubKeyStr);
const messageBytes = Buffer.from(message, 'utf8');
const signature = bs58.decode(sigBase58);

const verified = nacl.sign.detached.verify(messageBytes, signature, pubkey.toBuffer());
console.log('verified:', verified);