const monthName = document.getElementById ('month-name');
const dayName = document.getElementById ('day-name');
const dayNumber = document.getElementById ('day-number');
const year = document.getElementById ('year');

const date = new Date ();
// const month = date.getDay ();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
monthName.innerText = date.toLocaleString ('en', {
  month: 'long',
});

dayName.innerText = date.toLocaleDateString ('en', {
  weekday: 'long',
});

dayNumber.innerText = date.getDate ();

year.innerText = date.getFullYear ();
