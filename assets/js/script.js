const days = document.querySelectorAll('.day');
const dayAmounts = document.querySelectorAll('.day-amount');
const dayExpenses = document.querySelectorAll('.day-expenses');


  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  let today = daysOfWeek[dayIndex];


console.log(today)

for (let i = 0; i < daysOfWeek.length; i++) {
  if (today === days[i].id) {
    dayExpenses[i].classList.add('active')
  }
}



function fetchData() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      for (let i = 0; i < days.length; i++) {

        if (today === data[i].day) {
          console.log('Today is ' + data[i].day)
        }

        if (days[i].id === data[i].day) {
          dayAmounts[i].innerText = '$' + data[i].amount;
          dayExpenses[i].style.height = Math.floor(data[i].amount) * 2.9 + 'px'
        }
      }

    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });

}

setTimeout(fetchData,500)