const details = ['Thomas', 123, 'tsreport.de'];
const [name, id, website] = details;

console.log(name, id, website);

const data = 'Mountainbiking, Sports, 92843, 2334';
const [itemName, category, sku, inventory] = data.split(',');

console.log(itemName, category, sku, inventory);

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;

console.log(captain, assistant, players);
console.log(...players);
