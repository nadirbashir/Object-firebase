//object is a type of var which has sets of values
var student = {
    lastName : "Ali",
    grade : "12th",
    age : 16,
    email : "abc@gmail.com",
    displayName: function (){
        document.getElementById("name").value = this.name;
       
    }
};

// var student = {};
student.name = "Ahmed";
student.roll = "567";
student.age = 16;

// console.log(student);
// console.log(student.email);
// console.log("roll" in student); // check property name in object & return boolean value

//object can be placed within an array

var itemsArray = [
    {
        name:"juice",
        price:50, 
        quantity:3
    }, 
        {
            name:"cookie",
            price:30, 
            quantity:9
        },
    {
        name:"shirt",
        price:880, 
        quantity:1,
        calcTotal: function(){
            return this.name + " total "+ (this.price * this.quantity + itemsArray[1].price * itemsArray[1].quantity);
        }
    },
    
];
console.log(itemsArray[2].calcTotal());

// console.log(itemsArray[0].name);
// console.log(itemsArray[0].price);
// console.log(itemsArray[1].quantity);
// console.log(itemsArray[1].price);
// console.log(itemsArray[2].name);
// console.log(itemsArray[2].quantity);


// constructor function 
function Car(name, color, model, price){  
    this.name = name;
    this.color = color;
    this.model = model;
    this.price = price;
    this.annualSale = function (){
        return this.price * 0.80;
    }
}

var car1 = new Car("Toyota","white", 2018, "1000000");
var car2 = new Car("honda","black", 2020, "2000000");
var car3 = new Car("Nissan","Golden", 2015, "3000000");

console.log(car2);
console.log(car3.name);
console.log(car3.color);
console.log(car1.annualSale())
