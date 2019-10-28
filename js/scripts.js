// 1: Set the text of the <h1> element
let title = document.querySelector("h1");
title.innerHTML = "My Bucket List"

// 2: Set the color of the <h1> to a different color
title.style.color = "red";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector(".desc");
desc.append("Hello");


// 4: Set the class of the <ul> to 'list'
document.querySelector("ul").className = "list";


// 5: Create a new list item and add it to the <ul>
function my function(){
var listitem = document.createElement('LI');
    listitem.innerHTML= "<input> Free Dive"
    document.querySelector('.List').appendChild(ListItem);
}

// 6: Change all <input> elements from text fields to checkboxes
    let inputTags = document.querySelectorAll('input')
    for(let index = 0; index < inputTags.length; index++) {
        const element = inputTags[index].setAttribute('type','checkbox');
    }

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
var btn = document.createElement("Button");
btn.innerHTML = "Delete";
let extra = document.querySelector('.extra')
extra.appendChild(btn);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
btn.addEventListener('click', () => {
extra.remove();
})