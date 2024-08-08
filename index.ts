import 'dotenv/config'
import { Keypair } from '@solana/web3.js';

const asArray = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]!))
const keypair = Keypair.fromSecretKey(asArray)

console.log('publicKey:', keypair.publicKey.toBase58());

let isFound = false
let attempts = 0
let publicKey = ''
const startWith = process.argv[3] ?? 'Kumeka'

console.log("In progress...");

while (!isFound) {
    const keypair = Keypair.generate()

    publicKey = keypair.publicKey.toBase58()
    attempts++

    if (publicKey.toLowerCase().startsWith(startWith.toLowerCase())) {
        isFound = true
    }
}

console.log(`Attempts: ${attempts}\nKey start with ${startWith}: ${publicKey}`);
