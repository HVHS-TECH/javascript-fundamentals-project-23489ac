console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let menu = ["Cupcakes", "Burgar", "Fries", "Cheese Melt"];
let price = ["4","8","5","6"];
let images = [    ]
const MENU_OUTPUT = document.getElementById("menuDisplay");

let orderItem ="";
let orderPrice =0;

function showMenu() {

MENU_OUTPUT.innerHTML = "<h2>Menu</h2>";
 for (let i = 0; i < menu.length; i++) {
    MENU_OUTPUT.innerHTML += "<p>" + (i+1) + ". " + menu[i]  + " $"  + price[i]  + "</p>";
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
    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyField");

    let userName = NAME_FIELD.value;
    let userMoney = MONEY_FIELD.value;

    if (userMoney >= orderPrice){
         let change = usermoney - price
         OUTPUT.innerHTML ="<h2>  Receipt </h2>"
         OUTPUT.innerHTML += "<p> Name :" + userName +"</p>"
         OUTPUT.innerHTML += "<p> item:" + price +"</p>"
         OUTPUT.innerHTML += "<p> Total cost:" + orderPrice +"</p>"
         OUTPUT.innerHTML += "<p> The Money"+ userMoney+"</p>"
         OUTPUT.innerHTML += "<p> The change" + change +"</p>"

    }else{
        OUTPUT.innerHTML = "<p> Sorry, you do not have enough money.</p>"
    }
}