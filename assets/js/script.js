console.log('Hello World!')

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    

    

  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });