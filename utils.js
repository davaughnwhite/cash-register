//Create a map of change available to cents
const change = {
  1000: 1,
  500: 2,
  100: 5,
  25: 4,
  10: 20,
  5: 20,
  1: 100,
};

//Map cents to their respective dollar values for display
const changeMap = {
  1000: '$10',
  500: '$5',
  100: '$1',
  25: 'quarters',
  10: 'dimes',
  5: 'nickels',
  1: 'pennies',
};

export const changeDue = (cost, billAmount) => {
  if (cost > billAmount) {
    throw new Error(`Cost can't be more than the bill amount.`);
  }
  return billAmount - cost;
};

export const pickDenominations = (changeDue) => {
  let cents = changeDue * 100; //convert change to cents
  const denominations = [];
  const sorted = Object.keys(change).sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    //Get current index of current denomination
    const currentDenominationChangeIndex = parseInt(sorted[i]);
    //Get how much change we have for that denomination
    const currentDenominationAmount = change[currentDenominationChangeIndex];
    //Get possible denomination amount  without context of change we currently have in register

    const denominationCount = Math.floor(cents / currentDenominationChangeIndex);

    // Get minimum amount of denomination
    const amount = Math.min(currentDenominationAmount, denominationCount);

    //Recalculate how many cents we have remaining based on the change we have already given out
    cents = cents - amount * currentDenominationChangeIndex;
    denominations.push({
      denomination: changeMap[currentDenominationChangeIndex],
      count: amount,
    });
  }

  return denominations;
};
