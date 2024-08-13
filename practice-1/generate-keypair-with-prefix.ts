console.log('Script started');

import { Keypair } from "@solana/web3.js";

// Функція для перевірки префіксу
function hasPrefix(publicKey: string, prefix: string): boolean {
  console.log(`Checking if public key starts with prefix: ${prefix}`);
  return publicKey.startsWith(prefix);
}

// Генерація ключів до тих пір, поки не знайдеться ключ з потрібним префіксом
function generateKeypairWithPrefix(prefix: string): Keypair {
  let keypair: Keypair;
  do {
    console.log('Generating new keypair...');
    keypair = Keypair.generate();
  } while (!hasPrefix(keypair.publicKey.toBase58(), prefix));
  return keypair;
}

// Префікс, який ми шукаємо для перевірки  брав префікс za так як dima довго шукати, з префіксом za  все відпрацьовувало
const prefix = "dima";

// Генеруємо ключову пару з потрібним префіксом
const keypair = generateKeypairWithPrefix(prefix);

console.log(`✅ Generated keypair with prefix "${prefix}"!`);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);