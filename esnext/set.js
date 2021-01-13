const times = new Set();

times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corínthians');
times.add('Flamengo');
times.add('Vasco');

console.log(times); // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corínthians', 'Flamengo' }
console.log(times.size); // 5
console.log(times.has('vasco')); // false
console.log(times.has('Vasco')); // true
times.delete('Flamengo');
console.log(times.has('Flamengo')); // false

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet); // Set(3) { 'Raquel', 'Lucas', 'Júlia' }