console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
let price = ["4","8","5","6"];

const MENU_OUTPUT = document.getElementById("menuDisplay");

let orderItem ="";
let orderPrice =0;

function showMenu() {

OUTPUT.innerHTML = "<h2>Menu</h2>";
 for (let i = 0; i < menu.length; i++) {
OUTPUT.innerHTML += "<p>" + (i+1) + ". " + menu[i]  + " $"  + price[i]   + "</p>";

    }

}

function addOrder(){
const itemField = document.getElementById("itemField");
let userItem =  itemFieldvalue;  

if (itemNumber>=1 && itemNumber<=4){
     orderItem = menu[itemNumber - 1];
     orderMenu = price[itemnumber-1];
     OUTPUT.innerHTML = "<p> You seleced" + orderItem +"</p>"

}else{ 
      OUTPUT.innerHTML = "<P> Please choose a number between 1 to 4 </p>"
    }
}

function placeOrder(){
    const Name_Field
}