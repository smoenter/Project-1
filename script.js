// Add button
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
const recipeModal = document.getElementById('recipeModal');


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
    recipeCard.style.backgroundImage = 'url(https://i.pinimg.com/736x/45/a7/b7/45a7b74c4656308821f0fe2f250540e0.jpg)'
    recipeCard.style.backgroundSize = '300px 300px';
    recipeCard.style.backgroundRepeat = 'repeat';


// add the content to the card
     const ingredientsList = recipe.ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
     
     const instructionsList = recipe.instructions.split(',').map(instruction => `<li>${instruction.trim()}</li>`).join('');
     recipeCard.innerHTML = `
     <div class="card-body ">
         <h4 class="card-title"><strong>${recipe.name}</strong></h4>
         <p class="card-text">Ingredients:</p>
         <ul>${ingredientsList}</ul>
         <p class="card-text">Instructions:</p>
         <ul>${instructionsList}</ul>
     </div>
 `;

//  append the recipe card to the correct category section
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

// When DOM content is loaded, load the recipes
window.addEventListener('DOMContentLoaded', loadRecipes);
    
