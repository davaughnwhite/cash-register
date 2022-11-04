import { changeDue, pickDenominations } from './utils.js';

const bill = 10.0;
const cost = 4.63;
const change = changeDue(cost, bill);

const denominations = pickDenominations(change);

console.log('Balance: $30.00');
console.log(`Purchase: $${cost}`);
console.log(`Accepted: $${bill}`);
console.log(`Change: $${change}`);
console.log(`Change Denominations:`);
for (let i = 0; i < denominations.length; i++) {
  const denomination = denominations[i];
  console.log(`${denomination.count} X ${denomination.denomination}`);
}
