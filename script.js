// Add an Add button to add

const addButton = document.querySelector('.add-recipe');
const modal = document.getElementById('recipeModal');
const recipeForm = document.getElementById('recipeForm');


addButton.addEventListener('click', () => {
    const recipeModal = document.getElementById('recipeModal');
    recipeModal.classList.add('show');
    recipeModal.style.display = 'block'; 
    recipeModal.setAttribute('aria-hidden', 'false'); 
    document.body.classList.add('modal-open'); 
    });

const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const sweets = document.getElementById('sweets');


recipeForm.addEventListener('submit', (event) => {
    console.log('click');
event.preventDefault();

const recipeName = document.getElementById('recipeName').value;
const ingredientsUsed = document.getElementById('ingredients').value;
const instructionsUsed = document.getElementById ('instructions').value;
const recipeCategory = document.getElementById('recipeCategory').value;

const newRecipe = {

    name: recipeName, 
    ingredients: ingredientsUsed,
    instructions: instructionsUsed,
    category: recipeCategory,
}

const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
storedRecipes.push(newRecipe);
localStorage.setItem('recipes', JSON.stringify(storedRecipes)); 

renderRecipeCard(recipeName, ingredientsUsed, instructionsUsed, recipeCategory)
recipeForm.reset()
    });

    const renderRecipeCard = (recipeName, ingredientsUsed, instructionsUsed, recipeCategory) =>{
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', "mb-3", 'shadow-sm')

        const recipeNameElement = document.createElement('h5');
        recipeNameElement.textContent = name;
        recipeCard.appendChild(recipeNameElement);
    

        const recipesContainer = document.getElementById('recipesContainer'); // Ensure you have this container in your HTML
        recipesContainer.appendChild(recipeCard);        

    };


const loadRecipes = () =>{
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.forEach((recipe) => {
        renderRecipeCard(recipe.name, recipe.ingredients, recipe.category);
    });
};
loadRecipes();

// Alyssa added bellow
 
document.getElementById('submitButton').addEventListener('click', function() {
    // Get the values from the form
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value; 
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('recipeCategory').value.trim();

    // Update the card with the recipe details
    document.getElementById('cardRecipeName').innerText = recipeName;
    document.getElementById('cardIngredients').innerText = ingredients;
    document.getElementById('cardInstruct').innerText = instructions;

    // alyssa added 12.16 234

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('card', 'mb-3', 'shadow-sm');


    recipeCard.style.width = '500px'; // Sets card width
    recipeCard.style.height = 'auto'; // Keep height dynamic
    recipeCard.style.padding = '20px'; 
    recipeCard.style.border = '1px solid #ccc';
    recipeCard.style.borderRadius = '20px';
    recipeCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    recipeCard.style.margin = '10px';
    recipeCard.style.backgroundImage = 'url(https://i.pinimg.com/736x/45/a7/b7/45a7b74c4656308821f0fe2f250540e0.jpg)' 
    recipeCard.style.backgroundSize = '300px 300px'; 
    recipeCard.style.backgroundRepeat = 'repeat'; 


    const ingredientsList = ingredients.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
    const instructionsList = instructions.split(',').map(instructions => `<li>${instructions.trim()}</li>`).join('');
    recipeCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title"><strong>${recipeName}</strong></h5>
            <p class="card-text">Ingredients:</p>
            <ul>${ingredientsList}</ul>
            <p>Instructions:</p>
            <ul>${instructionsList}</ul>
        </div>
    `;

    if (category === 'breakfast') {
        document.getElementById('breakfast').appendChild(recipeCard);
    } else if (category === 'lunch') {
        document.getElementById('lunch').appendChild(recipeCard);
    } else if (category === 'dinner') {
        document.getElementById('dinner').appendChild(recipeCard);
    } else if (category === 'sweets') {
        document.getElementById('sweets').appendChild(recipeCard);
    }

    recipeForm.reset();

    const recipeModal = document.getElementById('recipeModal');
    recipeModal.classList.remove('show');
    recipeModal.style.display = 'none';
    recipeModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');


    // alyssa removed 12.16 236
    // document.getElementById('recipeCard').style.display = 'block';
// removed end
});

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
