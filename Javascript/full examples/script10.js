// remove element
function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}
removeClearButton();

// remove from parent to child
function removeFirstItem() {
    const ul = document.querySelector("ul");
    const firstItem = document.querySelector("li:first-child");
    ul.removeChild(firstItem);
}
removeFirstItem();

// remove child application
function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
removeItem(2);

function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
// case 1
    // const li = document.querySelector(`li:nth-child(${itemNumber})`);
// case 2
    const li = document.querySelectorAll("li")
    [itemNumber-1];
    ul.removeChild(li);
}
removeItem(2);

function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
// case 1
    // const li = document.querySelector(`li:nth-child(${itemNumber})`);
// case 2
    // const li = document.querySelectorAll("li")
    // [itemNumber-1];
// case 3
    const li = document.querySelectorAll("li")[itemNumber-1].remove();
    ul.removeChild(li);
}
removeItem(2);

function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
// case 1
    // const li = document.querySelector(`li:nth-child(${itemNumber})`);
// case 2
    // const li = document.querySelectorAll("li")
    // [itemNumber-1];
// case 3
    // const li = document.querySelectorAll("li")[itemNumber-1].remove();
// case 4
    document.querySelectorAll("li")[itemNumber-1].remove();
}
removeItem(2);