function balanceCalculator(win, defeat) {
    const balance = win - defeat;
    return balance;
  }
  function classifyRank(balance) {
    if (balance <= 10) {
      return "Ferro";
    } else if (balance >= 11 && balance <= 20) {
      return "Bronze";
    } else if (balance >= 21 && balance <= 50) {
      return "Prata";
    } else if (balance >= 51 && balance <= 80) {
      return "Ouro";
    } else if (balance >= 81 && balance <= 90) {
      return "Diamante";
    } else if (balance >= 91 && balance <= 100) {
      return "Lendário";
    } else {
      return "Imortal";
    }
  }
  
  const balance = balanceCalculator(101, 21);
  const rank = classifyRank(balance);
  
  console.log(`O Herói tem de saldo de ${balance} e está no nível ${rank}`);
  