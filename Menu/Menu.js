/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array) {

const menu = document.createElement('div');
const ul = document.createElement('ul');
menu.appendChild(ul);
menu.classList.add('menu');

//Used a .forEach so that we could iterate over ANY array of items//

let listItem = []; //creating a new array to holder variables//
let counter = 0;  //making a counter and setting = 0 so that we can index our .forEach (so we can see where we are)//
array.forEach(item => { //in the data object, for each item, we are going to do this function...//
  listItem.push(document.createElement('li')); //we are creating a li element and pushing that to our new array//
  ul.appendChild(listItem[counter]); //we are taking our li item and appending(putting) it on our ul
  listItem[counter].textContent = item; //giving our listItem content - assigning it from ITEM(each element in array)
  counter++;//increases our index/incrementer/goes up
});

const button = document.querySelector('.menu-button'); //giving a variable to .menu-button/referencing it.

button.addEventListener('click', () => {  //adding event listener to the button (.menu-button)//
  menu.classList.toggle("menu--open");    //we are accessing menu's class list. using method toggle. if it doesn't have 'menu--open', it will give it "menu--open"
});

return menu; //returning the menu (the "div") we have created
}

const header = document.querySelector('.header'); // grabbing our .header//

header.appendChild(createMenu(menuItems));      //appending our createMenu (passing menuItems) to the header//