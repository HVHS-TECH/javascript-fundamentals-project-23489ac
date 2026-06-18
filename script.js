console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {
    let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
    let price = ["4","8","5","6"];

    OUTPUT.innerHTML = "";
    const nameField = document.getElementById("nameField");
    const itemField = document.getElementById("itemField");
    const moneyField = document.getElementById("moneyField");

    let userNamename = nameField.value;
    let userChoice = itemField.value;
    let userMoneymoney = moneyField.value;
    
    let item = menu[userChoice - 1];

    if (userMoney < item.price) {
        OUTPUT.innerHTML = "<p>Sorry, you do not have enough money.</p>";
 } else {
     let change = userMoney - item.price;

        OUTPUT.innerHTML = "<h2>Receipt</h2>";
        OUTPUT.innerHTML += "<p>Name: " + userName + "</p>";
        OUTPUT.innerHTML += "<p>Item: " + food.name + "</p>";
        OUTPUT.innerHTML += "<p>Price: $" + item.price + "</p>";
        OUTPUT.innerHTML += "<p>Money Given: $" + userMoney + "</p>";
        OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
        
    }
}


