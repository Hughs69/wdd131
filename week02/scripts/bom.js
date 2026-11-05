
/* Author: Hubert Abedi Amoah */

// Select the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a new list item
const li = document.createElement('li');

// Create a delete button
const deleteButton = document.createElement('button');

// Add the input value to the list item
li.textContent = input.value;

// Add the delete symbol to the button
deleteButton.textContent = '❌';

// Make the delete button accessible
deleteButton.setAttribute('aria-label', 'Remove ' + input.value);

// Append the delete button to the list item
li.append(deleteButton);

// Append the list item to the unordered list
list.append(li);
