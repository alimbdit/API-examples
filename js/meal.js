const getMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeal(data.meals));
};

const showMeal = (meals) => {
  const container = document.getElementById("meal-container");
  container.innerHTML = ``;

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl');
    
console.log(meal);
    mealCard.innerHTML = ` 
        <figure class="px-10 pt-10">
        <img src="${meal.strMealThumb
        }" alt="meal" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${meal.strMeal}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
          <a onclick="loadMeal(${meal.idMeal})" href="#meal-details" class="btn">Details</a>
        </div>
      </div>
        `;
        container.appendChild(mealCard);
  });
};

const searchMeals = () => {
    const serchFieldValue = document.getElementById('serch-field').value;
    getMeal(serchFieldValue);
};



const loadMeal = (mealId) => {
   
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detailsMeal(data.meals[0]))
    .catch((error) => {
        console.log(error);
      });
};

// async ways
const loadMeal2 = async(mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        detailsMeal(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
    }

const detailsMeal = meal => {
     document.getElementById('meal-title').innerText = meal.strMeal;
    // console.log(meal);

    const mealBody = document.getElementById('meal-body');

    mealBody.innerHTML = `
    <img class="w-3/4" src="${meal.strMealThumb
    }" alt="meal" class="rounded-xl" />
    `;
    console.log(meal.strMeal);
}

getMeal('rice');
