const race = '100m sprint';
const winners = ['Wes Bos', 'Tom Runner', 'Jerry Speed'];

const win = winners.map((winner, index) => ({name: winner, race, place: index +1}));
console.table(win);

const ages = [45,99,12,45,63,43,23,53,43,29];

const old = ages.filter(age => age >= 47);
console.log(old);
