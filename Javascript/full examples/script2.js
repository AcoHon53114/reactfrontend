// select element
console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
// same method
console.log(document.getElementById("item-input").placeholder);
console.log(document.getElementById("item-input").getAttribute("placeholder"));
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "text-red");
let x = ["class","text-red","big"] 
document.getElementById("app-title").setAttribute(x[0],x[2]);

const title = document.getElementById("app-title");
title.style.color = "blue";
title.style.fontSize = "3rem";
// textContent: faster, directly change text
title.textContent = "hello world";
// innerText: slower, involve layout calculation
title.innerText = "hello again";
// innerHTML: faster, directly add html element inside html
title.innerHTML = `<i class="fa-solid fa-clipboard-check"></i>shopping list`;
// css selector
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector("container"));
console.log(document.querySelector("li"));
console.log(document.querySelector("li:last-child"));
console.log(document.querySelector("li:nth-child(2)"));
console.log(document.querySelector("li:nth-child(2)").textContent);
console.log(document.querySelector("li:nth-child(2)").innerText);