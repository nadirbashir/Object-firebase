// // //object is a type of var which has sets of values
// var student = {
//     lastName : "Ali",
//     grade : "12th",
//     age : 16,
//     email : "abc@gmail.com",
//     displayName: function (){
//          console.log(this.name);
       
//     }
// };

// // // var student = {};
// student.name = "Ahmed";
// student.roll = "567";
// student.age = 16;

// console.log(student);
// console.log("grade" in student); // check grade property in object return boolean true or false
// // console.log(student.email);
// // console.log("roll" in student); // check property name in object(both js and own) & return boolean value
// console.log(student.hasOwnProperty('name')); //check own property name of object & return boolean value

// // // we can use following loop to get properties and values of object
// for(var prop in student){
//     console.log("obj loop "+prop, student[prop]);
// }

// // //object can be placed within an array

// var itemsArray = [
//     {
//         name:"juice",
//         price:50, 
//         quantity:3
//     }, 
//         {
//             name:"cookie",
//             price:30, 
//             quantity:9
//         },
//     {
//         name:"shirt",
//         price:880, 
//         quantity:1,
//         calcTotal: function(){
//             return this.name + " total "+ (this.price * this.quantity + itemsArray[1].price * itemsArray[1].quantity);
//         }
//     },
    
// ];
// console.log(itemsArray[2].calcTotal());

// // console.log(itemsArray[0].name);
// // console.log(itemsArray[0].price);
// // console.log(itemsArray[1].quantity);
// // console.log(itemsArray[1].price);
// // console.log(itemsArray[2].name);
// // console.log(itemsArray[2].quantity);


// // // constructor function create an instance of a class typically called object
// // // Constructor functions are templates for creating objects. We can use it to create different objects using the same constructor, which has the same instance methods and properties with different values for the nonmethod properties. We can use the instanceof operator to check if an object is created from a constructor.
// function Car(name, color, model, price){  
//     this.name = name;
//     this.color = color;
//     this.model = model;
//     this.price = price;
//     this.annualSale = function (){  // // constructor method should not be declared with in constructor because every time instance of object is created js create the method for each instance to avoid it we use prototype function 
//         return this.price * 0.80;
//     };
// }
// Car.prototype.carName = function(){  // prototype method must be declared before the object is created
//     return this.name;
// };

// var car1 = new Car("Toyota","white", 2018, "1000000");
// var car2 = new Car("honda","black", 2020, "2000000");
// var car3 = new Car("Nissan","Golden", 2015, "3000000");

// console.log(car2);
// console.log(car3.name);
// console.log(car3.color);
// console.log(car1.annualSale());
// console.log(car2.annualSale());
// console.log(itemsArray instanceof Car);
// console.log(car1 instanceof Car);
// console.log(car2.carName());

// console.log(firebase) // to check firebase is initialized
// console.log(firebase.database()) // to check firebase database connected


// setting data to firebase
var count = 0;
function signUp() {
    count++;
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    var key = firebase.database().ref('user').push(user).key; // save key in obj it is very helpful
var user = {
    name:  name.value,
    password: password.value,
    key: key
};
console.log(user)

    // firebase.database().ref('/').set(user);   / refers to the first element in database 
    // firebase.database().ref("user/user"+count).set(user); // you can assign your own key    
    // firebase.database().ref("user").push(user);  // with push firebase insert data and generate unique key 
    firebase.database().ref("user/"+key).set(user);  // set with unique key 
}