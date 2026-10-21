import { MaquinaCafe } from './src/models/MaquinaCafe.js';

console.log("\n=== EXERCÍCIO 3: COPA PROFCAFE ===");
const maquina = new MaquinaCafe("Nespresso Pro");

maquina.tirarCafe();

maquina.abastecer(500, 100);
console.log(maquina.status);

maquina.tirarCafe(); 
maquina.tirarCafe(); 
maquina.tirarCafe(); 