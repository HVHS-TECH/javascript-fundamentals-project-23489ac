console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
function getFormInput() {
let item = ["Cupcakes", 'Burgar",  "Fries", "cheese Melt"];
    const chocolate_Field = document.getElementById("chocolate_Field");
    let userChoice = chocolate_Field.value;
    OUTPUT.innerHTML += "<p>" + messages[userChoice] + "</p>"
}
function addItem() {
    const itemField = document.getElementById("itemField");
    let userItem = itemField.value;
    shoppingList.push(userItem)
    OUTPUT.innerHTML += "<p>You have added " + userItem + " to the list </p>";

}
function showList() {
    OUTPUT.innerHTML += "<h3>These are the items on your shopping list:</h3>";
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += "<p>" + shoppingList[i] + "</p>";
    }
}