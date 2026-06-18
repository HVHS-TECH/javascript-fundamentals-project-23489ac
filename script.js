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





let users = [];
function getNameInput() {
    const NAME_fIELD = document.getElementById("nameField");
    const AGE_fIELD = document.getElementById("ageField");
    const MONEY_fIELD = document.getElementById("moneyField");
    const CHOCOLATE_FIELD = document.getElementById("chocolate_Field");
    let userName = NAME_fIELD.value;
    let userAge = AGE_fIELD.value;
    let usermoney = MONEY_fIELD.value;
    let chocolateChoice = CHOCOLATE_FIELD.value;

if ( !userName) {
     OUTPUT.innerHTML += "<p> Please enter your name.</p>";
} else if (userName.length < 3) {
     OUTPUT.innerHTML += "<p> The name must be at least three letters long .</p>";
}else if (NAME_fIELD.checkValidity() === false){
    OUTPUT.innerHTML += "<p>please fill all the fiels correctly </p>";
}else {
    let userObject = {
     name : userName,
     age : userAge,  
     money : usermoney,
     chocolate: chocolateChoice,
    }
     users.push(userObject);

        OUTPUT.innerHTML = "<p>Your details are saved successfully.</p>";

}

};
  function showUsers() {
OUTPUT.innerHTML = ""
    
    for (let i = 0; i < users.length; i++) {
        OUTPUT.innerHTML += "<h3> Welcome to my page : "+ users[i].name +"</h3>";
        OUTPUT.innerHTML += "<p>Your age is : " + users[i].age + "</p>";
        OUTPUT.innerHTML += "<p>In your Pocket Money you have : $ " + users[i].money + " </p>";
        OUTPUT.innerHTML += "<p> your Chocolate Choice is : " + users[i].chocolate + "</p>";

    }
}
