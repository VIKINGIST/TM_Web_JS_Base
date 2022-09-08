function myMoodFunction() {
  let mood = parseInt(prompt(`введіть номер пункту меню`));
  if (mood == 1) {
    // document.write(`Веселий`);
    document.getElementById('moodImgInsert').innerHTML = '😀';
  } else if (mood == 2) {
    //   document.write(`Сумний`);
    document.getElementById('moodImgInsert').innerHTML = '😔';
  } else if (mood == 3) {
    // document.write(`Обурений`);
    document.getElementById('moodImgInsert').innerHTML = '🤬';
  } else {
    alert(`такого пункту меню нажаль нема`);
  }
}

function myTask1Function() {
  let rand = Math.floor(Math.random() * (1, 5) + 1);
  let playerNumber = parseInt(prompt(`введіть число від 1 до 5`));
  if (rand != playerNumber) {
    alert(`Нажаль ви не відгадали, спробуйте ще раз.\nПІДКАЗКА: ${rand}`);
    let playerNumber = parseInt(prompt(`Спроба 2. Введіть число від 1 до 5`));
    if (rand == playerNumber) {
      alert(`Вітаю, ви відгадали число!`);
    } else {
      alert(`Нажаль ви програли, обидва рази ви не відгадали, повезе наступним разом`);
    }
  } else if (rand == playerNumber) {
    alert(`Вітаю, ви відгадали число!!`);
  } else {
    alert(`Нажаль ви програли, обидва рази ви не відгадали, повезе наступним разом`);
  }
}

function myTask2Function() {
  let rand = Math.floor(Math.random() * (1, 100) + 1);
  let playerNumber = parseInt(
    prompt(`введіть число від 1 до 100 (підказка: випадкове значення = ${rand})`)
  );
  let calcPlayerDevation = rand - playerNumber;
  if (calcPlayerDevation > 10 || calcPlayerDevation < -10) {
    alert(
      `Нажаль ви програли. Випадкове значення = ${rand}, ваше значення ${playerNumber} Відхилення більше +\\- 10.\n\nСпробуйте ще, наступного разу обовязково повезе! 😀`
    );
  } else {
    alert(
      `Вітаю, ви відгадали. Значення компютера було ${rand}, ваше значення ${playerNumber}. Відхилення = ${calcPlayerDevation} вписується в межі +\\- 10.`
    );
  }
}

function myTask3Function() {
  let rand = Math.floor(Math.random() * (1, 10) + 1);
  let playerNumber1 = parseInt(
    prompt(`Гравець №1: введіть число від 1 до 10 (випадкове значення = ${rand})`)
  );
  let playerNumber2 = parseInt(prompt(`Гравець №2: введіть число від 1 до 10`));

  let scorePlayer1 = Math.abs(rand - playerNumber1);
  let scorePlayer2 = Math.abs(rand - playerNumber2);

  if (scorePlayer1 < scorePlayer2) {
    alert(`Вітаємо. Переміг гравець №1\nВипадкове значення = ${rand}`);
  } else if (scorePlayer1 == scorePlayer2) {
    alert(`Нічия\nВипадкове значення = ${rand}`);
  } else {
    alert(`Вітаємо. Переміг гравець №2\nВипадкове значення = ${rand}`);
  }
}
