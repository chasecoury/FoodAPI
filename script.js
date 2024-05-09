const colors = ["biryani", "burger", "butter-chicken", "dessert", "dosa", "idly", "pasta", "pizza", "rice", "samosa"];

const yes = document.getElementById("yes");

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


function fetchRandomFoodImage() {

  let food=colors[
    getRandomInt(0,colors.length)
  ];

  console.log(food);

  fetch('https://foodish-api.com/api/images/'+food+"/")
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.image;
      const foodImageContainer = document.getElementById('foodImageContainer');
      foodImageContainer.innerHTML = ` <img src="${imageUrl}" alt="Random Food Image">`;

      yes.href=`https://www.google.com/maps/search/${food}/`;

    })
    .catch(error => console.error('Error fetching random food image:', error));
}

// Call the function initially to load a random image
fetchRandomFoodImage();

// Add event listener to refresh image on each click
// document.addEventListener('click', fetchRandomFoodImage);