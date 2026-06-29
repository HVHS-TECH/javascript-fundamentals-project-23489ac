console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const MENU_OUTPUT = document.getElementById("menuDisplay");


let menu = ["Cupcakes", "Burger", "Fries", "Cheese Melt"];
let price = [4,8,5,6];


let orderItem ="";
let orderPrice =0;

function showMenu() {

MENU_OUTPUT.innerHTML = "<h2>Menu</h2>";
 for (let i = 0; i < menu.length; i++) {
    MENU_OUTPUT.innerHTML += "<p>" + (i+1) + ". " + menu[i]  + " $"  + price[i]  + "</p>";
    }
}

function addOrder(){

const ITEM_FIELD = document.getElementById("itemField");
let itemNumber = ITEM_FIELD.value;  

if (itemNumber>=1 && itemNumber <=4){
     orderItem = menu[itemNumber - 1];
     orderPrice = price[itemNumber-1];
     OUTPUT.innerHTML = "<p> You selected " + orderItem + "</p>"

}else{ 
      OUTPUT.innerHTML = "<P> Please choose a number between 1 to 4. </p>"
    }
}

function placeOrder(){
   
    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyField");

    let userName = NAME_FIELD.value;
    let userMoney = MONEY_FIELD.value;

    if (userName.length < 3) {
     OUTPUT.innerHTML += "<p> The name must be at least three letters long .</p>";
}else if (NAME_fIELD.checkValidity() === false){
    OUTPUT.innerHTML += "<p>please fill all the fiels correctly </p>";

 }  else if (userMoney >= orderPrice){
         let change = userMoney - orderPrice ;
         OUTPUT.innerHTML ="<h2>  Receipt </h2>"
         OUTPUT.innerHTML += "<p> Name: " + userName + "</p>"
         OUTPUT.innerHTML += "<p> Item: " + orderItem + "</p>"
         OUTPUT.innerHTML += "<p> Total cost: " + orderPrice + "</p>"
         OUTPUT.innerHTML += "<p> Money Given "+ userMoney+ "</p>"
         OUTPUT.innerHTML += "<p> The change: $" + change + "</p>"

    }else{
        OUTPUT.innerHTML = "<p> Sorry, you do not have enough money.</p>"
    }
}
function resetOrder() {

    OUTPUT.innerHTML = "";
    document.getElementById("nameField").value = "";
    document.getElementById("itemField").value = "";
    document.getElementById("moneyField").value = "";

    orderItem = "";
    orderPrice = 0;

}
