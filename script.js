console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
let price = ["4","8","5","6"]


function getFormInput() {
    OUTPUT.innerHTML = "";
    const nameField = document.getElementById("nameField");
    const itemField = document.getElementById("itemField");
    const moneyField = document.getElementById("moneyField");

    let name = nameField.value;
    let itemNumber = itemField.value;
    let money = moneyField.value;
    
    let food = menu[userChoice - 1];

    if (userMoney < food.price) {
        OUTPUT.innerHTML = "<p>Sorry, you do not have enough money.</p>";
 } else {
     let change = userMoney - food.price;

        OUTPUT.innerHTML = "<h2>Receipt</h2>";
        OUTPUT.innerHTML += "<p>Name: " + userName + "</p>";
        OUTPUT.innerHTML += "<p>Item: " + food.name + "</p>";
        OUTPUT.innerHTML += "<p>Price: $" + food.price + "</p>";
        OUTPUT.innerHTML += "<p>Money Given: $" + userMoney + "</p>";
        OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
        
    }
}

