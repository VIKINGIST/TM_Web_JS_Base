{
  alert(`Завдання 1: Обчислити площу та периметр прямокутника`);
  let a = parseInt(prompt(`Сторона A=`, `0`));
  let b = parseInt(prompt(`Сторона B=`, `0`));
  let sum = a * b;
  let sum2 = 2 * (a + b);
  //var sumTastk1 = sum;
  //document.write(`sum=${sum}`);
  if (sum < 1) {
    alert(`одне з значень = 0`);
  } else {
    alert(`Площа прямокутнику = ${sum}, периметр = ${sum2}`);
  }
}
{
  alert(
    `Завдання 2: З клавіатури вводиться рік народження учня. Визначити вік учня.`
  );
  let now = new Date(); //дата
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //дата без годин
  let bday = new Date(
    prompt(`Введіть рік, місяць, день народження`, `1992, 01, 16`)
  );
  let bdaynow = new Date(today.getFullYear(), bday.getMonth(), bday.getDate()); //ДР в текущем году
  let age;
  age = today.getFullYear() - bday.getFullYear();
  if (today < bdaynow) {
    age = age - 1;
  }
  alert(`Ваш вік ${age} років`);
}
{
  alert(`Завдання 3: З клавіатури вводиться арендна плата за квартиру (за 1 місяць).\nВизначити скільки треба заплатити за 1 рік, за 2 роки та 10 років.
`);
  let sumPay = parseInt(
    prompt(`Введіть вартість оренди квартири за місяць`, `6000 грн`)
  );
  let pay1Y = sumPay * 12;
  alert(
    `Вартість оренди на:\n1 рік = ${pay1Y} грн\n2 роки = ${
      pay1Y * 2
    }\n10 років = ${pay1Y * 10}`
  );
}
{
  alert(`Завдання 4: З клавіатури вводиться арендна плата за місяць.\nВизначити на скільки повних місяців вистачить вказаної суми грошей, а також кількість повних років.
`);
  let sumPay = parseInt(
    prompt(`Введіть вартість оренди за 1 місяць`, `6000 грн`)
  );
  let sum = parseInt(
    prompt(`Введіть суму котра в вас є на оренду`, "100000 грн")
  );
  let month = sum / sumPay;
  let monthMathFlor = Math.floor(month);
  let chenge = Math.round((month - monthMathFlor) * sumPay);

  let years = Math.floor(monthMathFlor / 12);
  alert(
    `вистачить на ${monthMathFlor} місяців оренди, або ${years} цілих років, та ще буде решта в розмірі ~${chenge} грн\n\nПримітка: Тут можнабуло гратись з if/else для ідеального відображення тексту: рік, років, місяців і т.д, але мені було падло...`
  );
}
{
  alert(
    `Завдання 5: Скільки лампочок потрібно, щоб освітити вулицю довжиною D км, як що стовпи з ліхтарями стоять на відстані V м?`
  );
  let d = parseInt(prompt(`довжина вулиці`, `1200 м.`));
  let v = parseInt(prompt(`відстань між ліхнатарями`, `10 м`));
  let lamps = d / v;
  alert(
    `При довжині вулиці в ${d} та відстані між ліхтарями ${v} вам потрібно ${lamps} лампочок щоб освітлити вулицю`
  );
}
