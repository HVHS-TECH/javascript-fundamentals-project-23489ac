console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
let price = ["4","8","5","6"];

const OUTPUT = document.getElementById("output");

const MENU_OUTPUT = document.getElementById("menuDisplay");

let orderItem ="";
let orderPrice =0;

function showMenu() {

OUTPUT.innerHTML = "<h2>Menu</h2>";
 for (let i = 0; i < menu.length; i++) {
OUTPUT.innerHTML += "<p>" + i + ". " + menu[i]  + " $"  + price[i]   + "</p>";

    }

}

function addorder(){
    
}


function getFormInput() {
    OUTPUT.innerHTML = "";

    let name = document.getElementById("nameField").value;
    let itemNumber = Number(document.getElementById("itemField").value);
    let money = Number(document.getElementById("moneyField").value);

    let food = menu[itemNumber - 1];
    let foodPrice = Number(price[itemNumber - 1]);

    if (money < foodPrice) {
        OUTPUT.innerHTML = "<p>Sorry, you do not have enough money.</p>";
    } else {
        let change = money - foodPrice;

        OUTPUT.innerHTML = "<h2>Receipt</h2>";
        OUTPUT.innerHTML += "<p>Name: " + name + "</p>";
        OUTPUT.innerHTML += "<p>Item: " + food + "</p>";
        OUTPUT.innerHTML += "<p>Price: $" + foodPrice + "</p>";
        OUTPUT.innerHTML += "<p>Money Given: $" + money + "</p>";
        OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
    }
}

