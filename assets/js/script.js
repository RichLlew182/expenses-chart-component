const days = document.querySelectorAll('.day');
const dayAmounts = document.querySelectorAll('.day-amount');
const dayExpenses = document.querySelectorAll('.day-expenses');

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