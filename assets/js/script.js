console.log('Hello World!')

const totalExpenses = document.getElementById('total-expenses')

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    let total = 0;

    for (let i = 0; i < data.length; i++) {
      let amount = data[i].amount;
      total += amount;
    }

    console.log(total);

    totalExpenses.innerText = '$' + total

  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });