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
  
// // define the card template
// const cardTemplate = `<div class="card">
//   <div class="card-body">
//   <h3 class=:card-title"></h3> = document.getElementbyId('myInput').placeholder = "Recipe Name";
//   <p class="card-text">{{description}}</p>
//   </div>
//   </div>
//   `;
  

// // Recipe Card
// function recipeCard() =document.addEventListener("DOMContentLoaded",()=>) {
// const ingredients = []
// )};










  
// const cardTemplate = document.getElementById('cardTemplate');
// const cardTitle = document.getElementById('myInput').placeholder = "Recipe Name";
// const ingredientsUsed= document.getElementById('myTextarea').placeholder = "Add your ingredients here";



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
// });









