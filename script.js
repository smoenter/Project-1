// Add button
addButton.addEventListener('click', () => {
    const recipeModal = document.getElementById('recipeModal');
    recipeModal.classList.add('show');
    recipeModal.style.display = 'block';
    recipeModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    });

// retrieving DOM elements to hold the recipe cards for each category
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const sweets = document.getElementById('sweets');

// Submit button 
const recipeForm = document.getElementById('recipeForm');
const modal = document.getElementById('recipeModal');

recipeForm.addEventListener('submit', (event) => {
    console.log('click');
event.preventDefault();

// collects form data 
const recipeName = document.getElementById('recipeName').value;
const ingredients = document.getElementById('ingredients').value;
const instructions = document.getElementById ('instructions').value;
const category = document.getElementById('recipeCategory').value;

// create a new recipe object
const newRecipe = {
    name: recipeName,
    ingredients: ingredients,
    instructions: instructions,
    category: category,
};

// save tge recipe to localstore
const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
storedRecipes.push(newRecipe);
localStorage.setItem('recipes', JSON.stringify(storedRecipes));

// render the recipe card on the page
renderRecipeCard(newRecipe);

// Reset the form and close the modal
  recipeForm.reset();
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
});


// style the recipe card 
const recipeCard = document.createElement('div');
recipeCard.classList.add('card', 'mb-3', 'shadow-sm', 'col-md-6 col-sm-12');
recipeCard.style.width = '500px'; // Sets card width
recipeCard.style.height = 'auto'; // Keep height dynamic
recipeCard.style.padding = '20px';
recipeCard.style.border = '1px solid #ccc';
recipeCard.style.borderRadius = '20px';
recipeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
recipeCard.style.margin = '10px';
recipeCard.style.backgroundImage = 'url(https://cdn.vectorstock.com/i/1000v/71/36/seamless-sweet-checkered-baby-pink-background-vector-1777136.jpg)'
recipeCard.style.backgroundSize = '250px 250px';
recipeCard.style.backgroundRepeat = 'repeat';


   
 const renderRecipeCard = (recipe) =>{
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', "mb-3", 'shadow-sm');

// add the content to the card
     const ingredientsList = recipe.ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
     recipeCard.innerHTML = `
     <div class="card-body ">
         <h5 class="card-title"><strong>${recipeName}</strong></h5>
         <p class="card-text">Ingredients:</p>
         <ul>${ingredientsList}</ul>
         <p>Instructions:</p>
         <p>${instructions}</p>
     </div>
 `;

//  append the recipe card to the correct category section
    if (category === 'breakfast') {
     document.querySelector('#breakfast > .row').appendChild(recipeCard);
    } else if (category === 'lunch') {
     document.querySelector('#lunch > .row').appendChild(recipeCard);
    } else if (category === 'dinner') {
     document.querySelector('#dinner> .row').appendChild(recipeCard);
    } else if (category === 'sweets') {
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

// When DOM content is loaded, load the recipes
window.addEventListener('DOMContentLoaded', loadRecipes);
    
 

