// To save form to local storage
const form = document.getElementById('');
let recipe = JSON.parse(localStorage.getItem('recipe')) || [];
recipe.push(recipe);
localStorage.setItem('recipe', JSON.stringify(recipe));

// Add eventlisteners for the button for like and dislike
// Select the like and dislike buttons
const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

// Select the result element to display the feedback
const result = document.getElementById('result');

// Event listener for the like button
likeButton.addEventListener('click', () => {
    result.textContent = 'You liked this!';
    result.style.color = 'green';
});

// Event listener for the dislike button
dislikeButton.addEventListener('click', () => {
    result.textContent = 'You disliked this!';
    result.style.color = 'red';
});

// Append the DOM