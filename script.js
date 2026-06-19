console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
let price = ["4","8","5","6"];


function calculateChange(_money, _price) {
    return _money - _price;
}
function getFormInput() {
    const nameField = document.getElementById("nameField");
    const itemField = document.getElementById("itemField");
    const moneyField = document.getElementById("moneyField");

    let userName = nameField.value;
    let useritem = itemField.value;
    let userMoney = moneyField.value;
    
    let item = menu[userChoice - 1];

    if (userMoney < itemprice) {
        OUTPUT.innerHTML = "<p>Sorry, you do not have enough money.</p>";
 } else {
      var change = calculateChange(usermoney, PRICE)

       OUTPUT.innerHTML = "";
        OUTPUT.innerHTML = "<h2>Receipt</h2>";
        OUTPUT.innerHTML += "<p>Name: " + userName + "</p>";
        OUTPUT.innerHTML += "<p>Item: " + useritem + "</p>";
        OUTPUT.innerHTML += "<p>Price: $" + item.price + "</p>";
        OUTPUT.innerHTML += "<p>Money Given: $" + userMoney + "</p>";
        OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
        
    }
}

