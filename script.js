// Add an Add button to add
const addButton = document.getElementById('addButton');
const contentContainer = document.getElementById('contentcontainer');

// Function to handle adding new content
function addNewContent() {
    const newContent = document.createElement('p');
    newContent.classList.add('added-content');
    newContent.textContent = 'New Recipe to add to your Digital Recipe Box!';

    // Append the new to the content container
    contentContainer.appendChild(newContent);
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addNewContent);



// Add eventlisteners for the button for like and dislike
// Select the like and dislike buttons
const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

// Select the result element to display the feedback
const result = document.getElementById('result');

// Event listener for the like button
likeButton.addEventListener('click', () => {

// When the page loads, check if the user has already liked it
    window.addEventListener('load', () => {
        const likeStatus = localStorage.getItem('likeStatus');

        if (likeStatus === 'liked') {
            result.textContent = 'You liked this!';
            result.style.color = 'green';
        }
    });

//to do - get the liked list from local storage
    let recipe = JSON.parse(localStorage.getItem('recipe')) || [];

//to to do parse that list if it exists so that now its an array if not make an emoty array
    let storedArray = JSON.parse(localStorage, getItem('myArray')) || [];

//push into the array
    storedArray.push('newItem');

//stringify the array
    localStorage.setItem('recipe', JSON.stringify(recipe));

//store the array in local storage
    localStorage.setItem('myArray', JSON.stringify(storedArray));

// Display the updated array in the console
    console.log(storedArray);

// Event listener for the dislike button
    dislikeButton.addEventListener('click', () => {
        result.textContent = 'You disliked this!';
        result.style.color = 'red';
        localStorage.removeItem('dislikebutton');
    });






