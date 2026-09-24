// create html element
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my Element");
// div.title ="my-element"; // same function

// add txt inside the div
// div,innerText ="hello world"
// add textnode inside the div node
const txt = document.createTextNode("hello world")
div.appendChild(txt);
document.querySelector("ul").appendChild(div);

// add innerText inside the div
// div.innerText = "hello world";
// document.querySelector("ul").appendChild(div);
