
const mealsLoaded = (feed) =>{
   const feedUrl =`
   https://www.themealdb.com/api/json/v1/1/search.php?s=${feed}
   ` 
   fetch(feedUrl)
   .then (Response => Response.json())
   .then (data => displayMeals(data) )
}

const displayMeals =meals =>{
   const containerDiv =document.getElementById('container-div')
   containerDiv.innerHTML ='';
    const mealsArray = meals.meals;
    mealsArray.forEach(meal =>{
      // console.log(meal)
       const creatDiv = document.createElement('div');
       creatDiv.classList.add('col')
       creatDiv.innerHTML =`
       <div class="card">
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strTags} <br> ${meal.strMeal} <br> ${meal.strMeasure10}</p>
         <button type="button" onclick="idCall(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          details
        </button>
       `
       containerDiv.appendChild(creatDiv);
  

    })
}

  const searchBtn = ()=>{
   const textValue =document.getElementById('text-field').value;
   mealsLoaded(textValue)
  }

  const idCall = idMeal =>{
      const idCallUrl =`https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${idMeal}`
      fetch(idCallUrl)
      .then (Response => Response.json())
      .then (data =>idCallMeal(data))
  }
  const idCallMeal = meal =>{
       const idCallMealArray = meal.meals[0];
       const exampleModalLabel =document.getElementById('exampleModalLabel');
       exampleModalLabel.innerHTML =` ${idCallMealArray.strMeal}`
       const modalImg =document.getElementById('modal-img');
       modalImg.innerHTML = `<img class="img-fluid" src="${idCallMealArray.strMealThumb}" alt="">`

      //  extra text
       const extraText = document.getElementById('extra-text');
       extraText.innerHTML ='';
       const creatExtraDive = document.createElement('div')
       creatExtraDive.classList.add ('extra-post')
       creatExtraDive.innerHTML =`
       <h4>Iteam type: ${idCallMealArray.strIngredient4} </h4>
       <p>Iteams: ${idCallMealArray.strIngredient4} , ${idCallMealArray.strIngredient5} , ${idCallMealArray.strIngredient6} <br>
        ${idCallMealArray.strIngredient7} , ${idCallMealArray.strIngredient8} , ${idCallMealArray.strIngredient9}</p>
       `
       extraText.appendChild(creatExtraDive);
       console.log(idCallMealArray.strIngredient4)
  }
mealsLoaded('fish')








