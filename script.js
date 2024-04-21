const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekList = document.querySelector('.week__list');

for (let key of dayOfWeek) {
  weekList.innerHTML += `<li>${key}</li>`;

  const weekItem = weekList.querySelectorAll('li');
  const dayOfWeekName = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });
  weekItem.forEach((item) => {
    if (item.textContent === 'Saturday' || item.textContent === 'Sunday') {
      item.style.fontStyle = 'italic';
    }
    if (dayOfWeekName === item.textContent) {
      item.style.fontWeight = 'bold';
    }
  });
}
