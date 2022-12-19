// 1) Select this task (in two different ways at least!) and change the background-color to black, text-color to white.
const task1El1 = document.getElementById('task-1');
const task1El2 = document.querySelector('#task-1');
const task1El3 = document.querySelector('li:first-of-type');

task1El1.style.color = 'white';
task1El2.style.backgroundColor = 'black';

// 2)Change the document title (in <head></head>) to "Assignment - Solved!".
const siteTitle = document.querySelector('title');
siteTitle.textContent = 'Assignment - Solved!';

// 2.1) Use two different ways for getting access to the <title> element:
//  Via querySelector on document:
document.querySelector('title');

// and via querySelector on the certain property you find in document.
document.getElementsByTagName('title');

$0.title;

// 3) Select the <h1> element on this page and change its text to "Assignment - Solved!".
const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';
// or
// const h1 = document.getElementsByTagName('h1');
// h1[0].textContent = 'Assignment - Solved!';
