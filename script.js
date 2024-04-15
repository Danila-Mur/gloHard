const dayOfWeekRU = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const dayOfWeekEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const allDayOfWeek = [dayOfWeekRU, dayOfWeekEN];

let lang = 'en';

if (lang === 'en') {
  console.log(dayOfWeekEN);
} else if (lang === 'ru') {
  console.log(dayOfWeekRU);
} else {
  console.log('Some wrong...');
}

switch (lang) {
  case 'en':
    console.log(dayOfWeekEN);
    break;
  case 'ru':
    console.log(dayOfWeekRU);
    break;
  default:
    console.log('Some wrong...');
}

lang === 'ru' ? console.log(allDayOfWeek[0]) : console.log(allDayOfWeek[1]);

const namePerson = 'Артем';

namePerson === 'Артем' ? console.log('директор') : console.log('студент');
namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент');
