// Add an Add button to add
const addButton = document.querySelector('.add-recipe');
const contentContainer = document.getElementById('contentContainer');
const modal = document.getElementById('recipeModal');
const recipeForm = document.getElementById('recipeForm');

addButton.addEventListener('click', () => {
    const recipeModal = document.getElementById('recipeModal');
    recipeModal.classList.add('show');
    recipeModal.style.display = 'block';
    recipeModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
});

// Add a submit button 
const submitButton = document.getElementById('submitButton');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');


    recipeForm.addEventListener('submit', () => {
    console.log('click');
    
 // Creating a recipe card by entering the ingredients and the category
const recipeName = document.getElementById('recipeName').value;
const ingredientsUsed = document.getElementById('ingredientsUsed').value;
const recipeCategory = document.getElementById('recipeCategory').value;

    const newRecipe = {

        name: recipeName,
        ingredients: ingredientsUsed,
        category: recipeCategory,
    }

const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
storedRecipes.push(newRecipe);
localStorage.setItem('recipes', JSON.stringify(storedRecipes));

    renderRecipeCard(recipeName, ingredientsUsed, recipeCategory)
    recipeForm.reset()
});

// Creating the recipe card 
const renderRecipeCard = (name, ingredients, category) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('card', "mb-3", 'shadow-sm')

    recipeCard.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${ingredients}</p>
        </div>
        `;
    // Appending the recipe card to the correct category
    if (category === 'breakfast') {
        breakfast.appendChild(recipeCard)
    } else if (category === 'lunch') {
        lunch.appendChild(recipeCard)
    } else if (category === 'dinner') {
        dinner.appendChild(recipeCard)
    }

}
// Retrieve a list of saved recipes from localstorage
const loadRecipes = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.forEach((recipe) => {
        renderRecipeCard(recipe.name, recipe.ingredients, recipe.category)
    })
}

loadRecipes();



