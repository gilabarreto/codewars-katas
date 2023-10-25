function score(dice) {

  let dice1 = 0;
  let dice2 = 0;
  let dice3 = 0;
  let dice4 = 0;
  let dice5 = 0;
  let dice6 = 0;
  let result = 0;
  
  for (let x = 0; x < dice.length; x++) {
    if (dice[x] === 1) {
      dice1 += 1
    } else if (dice[x] === 2) {
      dice2 += 1
    } else if (dice[x] === 3) {
      dice3 += 1
    } else if (dice[x] === 4) {
      dice4 += 1
    } else if (dice[x] === 5) {
      dice5 += 1
    } else if (dice[x] === 6) {
      dice6 += 1
    }
  }

  switch (result) {
    case 0:
      if (dice1 === 3) result += 1000
      else if (dice1 === 2) result += 200;
      else if (dice1 > 3) result += (dice1 - 3) * 100 + 1000;
      else if (dice1 === 1) result += 100;
    case 1:
      if (dice6 >= 3) result += 600;
    case 2:
      if (dice5 >= 3) result += 500;
      else if (dice5 === 1) result += 50;
      else if (dice5 === 2) result += 100;
      else if (dice5 > 3) result += (dice5 - 3) * 50 + 500;
    case 3:
      if (dice4 >= 3) result += 400;
    case 4:
      if (dice3 >= 3) result += 300;
    case 5:
      if (dice2 >= 3) result += 200;
    default:
      result;
  }

  return result
}