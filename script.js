const addButton = document.querySelector('.add-recipe');
const modal = document.getElementById('recipeModal');
const recipeForm = document.getElementById('recipeForm');

addButton.addEventListener('click', () => {
    modal.classList.add('show');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
});

recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();
       console.log('Form submitted');

    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById ('instructions').value;
    const category = document.getElementById('recipeCategory').value;

const newRecipe = {
    name: recipeName,
    ingredients: ingredients,
    instructions: instructions,
    category: category,
};

console.log(newRecipe); 


const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
storedRecipes.push(newRecipe);
localStorage.setItem('recipes', JSON.stringify(storedRecipes));

renderRecipeCard(newRecipe);

recipeForm.reset();

   // close the modal
   modal.classList.remove('show');
   modal.style.display = 'none';
   modal.setAttribute('aria-hidden', 'true');
   document.body.classList.remove('modal-open');
});
   
const renderRecipeCard = (recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('card', 'mb-3', 'shadow-sm');
    recipeCard.style.width = '500px';
    recipeCard.style.padding = '20px';
    recipeCard.style.border = '1px solid #ccc';
    recipeCard.style.borderRadius = '20px';
    recipeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    recipeCard.style.margin = '10px';
    recipeCard.style.backgroundImage = 'url(https://cdn.onlinefabricstore.com/products/GINCHPIN1-4-60_1.jpg)';
    recipeCard.style.backgroundSize = '200px 200px';
    recipeCard.style.backgroundRepeat = 'repeat';

    const ingredientsList = recipe.ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
    
    recipeCard.innerHTML = `
        <div class="card-body">
            <h4 class="card-title"><strong>${recipe.name}</strong></h4>
            <p class="card-text">Ingredients:</p>
            <ul>${ingredientsList}</ul>
            <p>Instructions:</p>
            <p>${recipe.instructions}</p>
        </div>
    `;
   
    const categoryContainer = getCategoryContainer(recipe.category);
    categoryContainer.appendChild(recipeCard);
};

const getCategoryContainer = (category) => {
    switch (category.toLowerCase()) {
        case 'breakfast':
            return document.querySelector('#breakfast .row');
        case 'lunch':
            return document.querySelector('#lunch .row');
        case 'dinner':
            return document.querySelector('#dinner .row');
        case 'sweets':
            return document.querySelector('#sweets .row');
    }
};

const loadRecipes = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.forEach((recipe) => {
        renderRecipeCard(recipe);
    });
};

window.addEventListener('DOMContentLoaded', loadRecipes);
