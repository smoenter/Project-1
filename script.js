// Add an Add button to add
const addButton = document.querySelector('.add-recipe');
 const modal= new bootstrap.Modal(document.getElementById('recipeModal'));
addButton.addEventListener('click', () => {
     modal.show();
 });
// retrieving DOM elements to hold the recipe cards for each category
 const breakfast = document.getElementById('breakfast');
 const lunch = document.getElementById('lunch');
 const dinner = document.getElementById('dinner');
 const sweets = document.getElementById('sweets');
 // Submit button
 const recipeForm = document.getElementById('recipeForm');
// const recipeModal = document.getElementById('recipeModal');
 recipeForm.addEventListener('submit', (event) => {
     event.preventDefault();
     console.log('Form submitted');
 // collects form data
 const recipeName = document.getElementById('recipeName').value;
 const ingredients = document.getElementById('ingredients').value;
 const instructions = document.getElementById ('instructions').value;
 const category = document.getElementById('recipeCategory').value;
 if(!recipeName){
     const error= document.querySelector('.error.recipeName');
     error.innerText = 'Recipe Name Required';
     return;
 } else {
     const error= document.querySelector('.error.recipeName');
     error.innerText = '';
 }
 if(category === 'Meal Category') {
     const error= document.querySelector('.error.recipeCategory');
     error.innerText = 'Category Required';
     return;
 } else {
     const error= document.querySelector('.error.recipeCategory');
     error.innerText = '';
 }
  if(!ingredients){
     const error= document.querySelector('.error.ingredients');
     error.innerText = 'Ingredients Required';
     return;
 } else {
     const error= document.querySelector('.error.ingredients');
     error.innerText = '';
 }
 if (!instructions) {
     const error= document.querySelector('.error.instructions');
     error.innerText = 'Instructions Required';
     return;
 } else {
     const error= document.querySelector('.error.instructions');
     error.innerText = '';
 }
 // create a new recipe object
 const newRecipe = {
     name: recipeName,
     ingredients: ingredients,
     instructions: instructions,
     category: category,
 };
 // save the recipe to localstore
 const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
 storedRecipes.push(newRecipe);
 localStorage.setItem('recipes', JSON.stringify(storedRecipes));
 // render the recipe card on the page
 renderRecipeCard(newRecipe);
 // Reset the form and close the modal
   recipeForm.reset();
   modal.hide();
 });
 // style the recipe card and render recipe card function
 const renderRecipeCard = (recipe) => {
     console.log(recipe);
     const recipeCard = document.createElement('div');
     recipeCard.classList.add('card', 'mb-3', 'shadow-sm', 'col-md-6', 'col-sm-12');
     recipeCard.style.width = '500px';
     recipeCard.style.height = 'auto';
     recipeCard.style.padding = '20px';
     recipeCard.style.border = '1px solid #ccc';
     recipeCard.style.borderRadius = '20px';
     recipeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
     recipeCard.style.margin = '10px';
     recipeCard.style.backgroundImage = 'url(https://cdn.vectorstock.com/i/1000v/71/36/seamless-sweet-checkered-baby-pink-background-vector-1777136.jpg)'
     recipeCard.style.backgroundSize = '250px 250px';
     recipeCard.style.backgroundRepeat = 'repeat';
 // add the content to the card
      const ingredientsList = recipe.ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
      recipeCard.innerHTML = `
      <div class="card-body ">
          <h4 class="card-title"><strong>${recipe.name}</strong></h4>
          <p class="card-text">Ingredients:</p>
          <ul>${ingredientsList}</ul>
          <p>Instructions:</p>
          <p>${recipe.instructions}</p>
      </div>
  `;
//   append the recipe card to the correct category section
     if (recipe.category === 'breakfast') {
      document.querySelector('#breakfast > .row').appendChild(recipeCard);
     } else if (recipe.category === 'lunch') {
      document.querySelector('#lunch > .row').appendChild(recipeCard);
     } else if (recipe.category === 'dinner') {
      document.querySelector('#dinner> .row').appendChild(recipeCard);
     } else if (recipe.category === 'sweets') {
      document.querySelector('#sweets > .row').appendChild(recipeCard);
     }
  };
 //  load the recipes stored in localstorage
 const loadRecipes = () =>{
     const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
     storedRecipes.forEach((recipe) => {
         renderRecipeCard(recipe);
     });
 };


// // Alyssa added bellow
 
// document.getElementById('submitButton').addEventListener('click', function() {
//     // Get the values from the form
//     const recipeName = document.getElementById('recipeName').value;
//     const ingredients = document.getElementById('ingredients').value; 
//     const instructions = document.getElementById('instructions').value;
//     const category = document.getElementById('recipeCategory').value.trim();

//     // Update the card with the recipe details
//     document.getElementById('cardRecipeName').innerText = recipeName;
//     document.getElementById('cardIngredients').innerText = ingredients;
//     document.getElementById('cardInstruct').innerText = instructions;

//     // alyssa added 12.16 234

//     const recipeCard = document.createElement('div');
//     recipeCard.classList.add('card', 'mb-3', 'shadow-sm');


//     recipeCard.style.width = '500px'; // Sets card width
//     recipeCard.style.height = 'auto'; // Keep height dynamic
//     recipeCard.style.padding = '20px'; 
//     recipeCard.style.border = '1px solid #ccc';
//     recipeCard.style.borderRadius = '20px';
//     recipeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
//     recipeCard.style.margin = '10px';
//     recipeCard.style.backgroundImage = 'url(https://i.pinimg.com/736x/45/a7/b7/45a7b74c4656308821f0fe2f250540e0.jpg)' 
//     recipeCard.style.backgroundSize = '300px 300px'; 
//     recipeCard.style.backgroundRepeat = 'repeat'; 


//     const ingredientsList = ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
//     const instructionsList = instructions.split(',').map(instructions => `<li>${instructions.trim()}</li>`).join('');
//     recipeCard.innerHTML = `
//         <div class="card-body">
//             <h5 class="card-title"><strong>${recipeName}</strong></h5>
//             <p class="card-text">Ingredients:</p>
//             <ul>${ingredientsList}</ul>
//             <p>Instructions:</p>
//             <ul>${instructionsList}</ul>
//         </div>
//     `;

//     if (category === 'breakfast') {
//         document.getElementById('breakfast').appendChild(recipeCard);
//     } else if (category === 'lunch') {
//         document.getElementById('lunch').appendChild(recipeCard);
//     } else if (category === 'dinner') {
//         document.getElementById('dinner').appendChild(recipeCard);
//     } else if (category === 'sweets') {
//         document.getElementById('sweets').appendChild(recipeCard);
//     }

//     recipeForm.reset();

//     const recipeModal = document.getElementById('recipeModal');
//     recipeModal.classList.remove('show');
//     recipeModal.style.display = 'none';
//     recipeModal.setAttribute('aria-hidden', 'true');
//     document.body.classList.remove('modal-open');


//     // alyssa removed 12.16 236
//     // document.getElementById('recipeCard').style.display = 'block';
// // removed end
// });

// Alyssa added- end

// modal.hide();

// function addNewContent() {
//     const newRecipe = document.querySelector('.textContent').value;
//     const newContent = document.createElement('textarea');
//     newContent.classList.add('added-content');
//     newContent.textContent = newRecipe;
   

//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'submit';
//     submitButton.addEventListener('click', ()=>{
//         const recipeText= newContent.textContent;
//         storeAndDisplayRecipe(recipeText)
//     }) 
//     // Append the new to the content container
//     contentContainer.appendChild(newContent);
//  }




// Function to handle adding new content
// function addNewContent() {
//     const newRecipe = document.querySelector('.textContent').value;
//     const newContent = document.createElement('p');
//     newContent.classList.add('added-content');
//     newContent.textContent = newRecipe;
   

//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'submit';
//     submitButton.addEventListener('click', ()=>{
//         const recipeText= newContent.textContent;
//         storeAndDisplayRecipe(recipeText)
//     }) 
//     // Append the new to the content container
//     contentContainer.appendChild(newContent);
//     contentContainer.appendChild(submitButton);
// }


// Add event listener to the "Add" button
// addButton.addEventListener('click', addNewContent);

// const likedRecipeContainer = document.getElementById('likedRecipe');

// function storeAndDisplayRecipe(recipe) {
//     let likedRecipe = JSON.parse(localStorage.getItem('likedRecipe')) || [];
//     likedRecipe.push(recipe);
//     localStorage.setItem('likedRecipe',JSON.stringify(likedRecipe));

//     likedRecipeContainer.innerHTML = '';


//     likedRecipe.forEach(recipe => {
//         const li = document.createElement('li');
//         li.textContent =recipe;
//         likedRecipeContainer.appendChild(li);
//     });
// }
  


// //     //to do - get the liked list from local storage
//     let recipe = JSON.parse(localStorage.getItem('recipe')) || [];

//     //to to do parse that list if it exists so that now its an array if not make an emoty array
//     let storedArray = JSON.parse(localStorage, getItem('myArray')) || [];

//     //push into the array
//     storedArray.push('newItem');

//     //stringify the array
//     localStorage.setItem('recipe', JSON.stringify(recipe));

//     //store the array in local storage
//     localStorage.setItem('myArray', JSON.stringify(storedArray));

    //

