function WarShips() {
  // Init ====================================================================
  const userInput = parseInt(prompt(`Введіть кількість клітин на полю боя, значення від 4 до 10`));

  const numberOfSquares = userInput
    ? (userInput < 4 && 4) || (userInput > 10 && 10) || userInput
    : 4;

  const shipSquare = Math.floor(Math.random() * (1, numberOfSquares) + 1);

  // Game loop ===============================================================
  const chances = 3;
  let attempts = 1;
  let retry = true;

  do {
    const userFireSquare = parseInt(
      prompt(
        `Зробіть постріл по квадрату від 1 до ${numberOfSquares}\nКорабель в секторі ${shipSquare}`
      )
    );

    const nearFire = Math.abs(shipSquare - userFireSquare);
    attempts++;

    if (nearFire === 0) {
      alert(`Пряме влучення по кораблю! Ви виграли! Гра закінчена.`);
      break;
    }

    if (nearFire === 1) {
      alert(`Це було близько, ви підбили корабель та отримуєте додаткову спробу.`);

      if (retry) {
        attempts--;
        retry = false;
      }
    }

    if (attempts === chances) {
      alert(`Нажаль ви не потрапили по кораблю, гра закінчена. Спробуйте ще!`);
    } else {
      alert(`Мимо, залишилась ще ${chances - attempts} спроба`);
    }
  } while (chances - attempts);

  // alert(`${numberOfSquares} && ${shipSquare} && ${nearFire}`);
}
