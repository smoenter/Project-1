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

const submitButton = document.getElementById('submitButton');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');

recipeForm.addEventListener('submit', () => {
    console.log('click');

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

    const renderRecipeCard = (name, ingredients, category) =>{
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', "mb-3", 'shadow-sm')
    
        recipeCard.innerHTML=`
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${ingredients}</p>
        </div>
        `;
    
        if(category === 'breakfast') {
            breakfast.appendChild(recipeCard)
        } else if(category === 'lunch') {
            lunch.appendChild(recipeCard)
        } else if(category === 'dinner') {
            dinner.appendChild(recipeCard)
        }
    
    }
const loadRecipes = () =>{
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.forEach((recipe) => {
        renderRecipeCard(recipe.name, recipe.ingredients, recipe.category)
    })
}
loadRecipes();
 


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

//     // Display the updated array in the console
//     console.log(storedArray);