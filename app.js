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


