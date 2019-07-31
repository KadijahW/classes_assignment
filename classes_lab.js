// ## Question 1
// a. Write a class called `Person` that has 3 properties: a first name,
// a last name and a middle name. Create 2 instances of a `Person`. Print one
// of their first names.
// b. Write a method in `Person` called `fullName` that will return a formatted
// string of an instance's full name. Call this method on both the instances you
// created in part a.
console.log("Question 1")

class Person {
  constructor(firstname, middlename, lastname){
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname
  }
  fullName(){
    console.log(`full name: ${this.firstname} ${this.middlename } ${this.lastname}`);
  }
  }
let person1 = new Person ("Briany", "Rosalia", "Taveras")
let person2 = new Person ("Giselle", "N/A", "Sanchez")
let person3 = new Person ("Kadijah", "Christina", "Wilson")

console.log(`${person1.firstname}`);

person1.fullName();
person2.fullName();
person3.fullName();

// ## Question 2
// a. Create a class called `Book` that has properties `title`,
// `author` and `rating`. Create some instances of `Book`.
// b. Add a method to `Book` called `isGood` that returns `true` if
//  its rating is greater than or equal to 7
console.log("Question 2")

class Book{
  constructor(title, author, rating){
    this.title = title,
    this.author = author,
    this.rating = rating
  }
  isGood() {
    console.log(this.rating >= 7)
  }
}
let book1 = new Book("The Secret", "Rhonda Byrne", 4.6)
let book2 = new Book("The Alien Artifact", "Victor Bertolaccinni", 1.7)
let book3 = new Book("Making this up", "John Doe", 7.2)

console.log(book1);
console.log(book2);
console.log(book3);

book1.isGood();
book2.isGood();
book3.isGood();

// ## Question 3
// a. Create a `Dog` class with four properties: `name (string),
//  breed (string), mood (string), and hungry (boolean)`.
// b. Add a method called `playFetch`. It should set the dog's `hungry`
//  property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry`
// to `false` and print "Woof!" If the dog is not hungry, it should log
//  "The dog doesn't look hungry"
// d. Add a method called `toString` that returns a description of the dog:
console.log("Question 3")

class Dog  {
  constructor(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood  = mood;
    this.hungry = hungry
  }
  playFetch(){
    dog.hungry = true
    dog.mood = "playful"
    console.log("Ruff!")
    console.log(dog)
  }
  feed(){
   if(dog.hungry === false){
     console.log("Woof!")
   } else{
     console.log("The dog doesn't look hungry")
   }
  }
  toString(){
    console.log(`${this.name} is a ${this.breed} and he/she is ${this.mood}`)
  }
}

let dog = new Dog("Quan","Shih tzu", "tired", false)
console.log(dog)

  dog.playFetch()
  dog.feed()
  dog.toString()

  // ## Question 4
  // There are three common scales that are used to measure
  //temperature: Celsius, Fahrenheit, and Kelvin:
  // C = (F - 32) / 1.8
  // F = 1.8 * C + 32
  // K = C + 273
  // a. Make an object called `freezingPoint` that has three properties:
  //`celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the
  //freezing point of water.
  // b. Make a class called `Celsius` that has one property: `celsius`,
   //and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
  // let outsideTempt = new Celsius(10.0)
  // outsideTempt.celsius //returns 10.0
  // outsideTempt.getKelvinTemp() //returns 283.0
  // outsideTempt.getFahrenheitTemp() //returns 50.0
  // c. Give `Celsius` a method called `isBelowFreezing` that returns a
  // `Bool` (true if the temperature is below freezing).
console.log("Question 4")
  let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin:273.15
}

class Celsius {
  constructor(celsius){
    this.celsius = celsius
  }
  getFahrenheitTemp(){
    console.log(1.8 * this.celsius + 32);
  }
  getKelvinTemp(){
    console.log(this.celsius + 273.15);
  }
  isBelowFreezing(){
    console.log(this.celsius < 0)
  }
}

let outsideTempt = new Celsius(-10)
console.log(outsideTempt)
outsideTempt.getFahrenheitTemp()
outsideTempt.getKelvinTemp()
outsideTempt.isBelowFreezing()

// ## Question 5
// a. Create a class called `Movie` that has properties for
// `name`, `year`, `genre`, `cast`, and `description`. Create an
// instance of your `Movie`
// b. Create an method inside `Movie` called `blurb` that returns a
// formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron
// Cohen as a man named Borat who was visiting America from Kazakhstan."
console.log("Question 5")
class Movie {
  constructor(name, year, genre, cast, description){
    this.name = name,
    this.year = year,
    this.genre = genre,
    this.cast = cast,
    this.description = description
  }
  blurb(){
    console.log(`${this.name} came out in ${this.year} Starring ${this.cast}.  ${this.description}`)
  }
}

let movie1 = new Movie("Titanic", 1997, "Drama, Romance", ["Leonardo DiCaprio, Kate Winslet and Billy Zane"],
"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.")

console.log(movie1)
movie1.blurb()

// ## Question 6
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved
// to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector
//  as an argument and returns a new vector that has the sum or difference of the two
//  vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
console.log("Question 6")
class Vector{
  constructor(x, y){
    this.x = x
    this.y = y
  }
  plus(v){
    return `x: ${this.x + v.x}, y: ${this.y + v.y}`
  }
  minus(v){
    return `x: ${this.x - v.x}, y: ${this.y - v.y}`
  }
  getLength(){
    return Math.sqrt(Math.pow(this.x,2)+ Math.pow(this.y,2))
  }
}

let v1 = new Vector(1,2)
let v2 = new Vector(2,3)
let v3 = new Vector(3,4)

console.log(v1.plus(v2))
console.log(v1.minus(v2))
console.log(v3.getLength());

// ## Question 7
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels
// (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an
// instance method?
console.log("Question 7")

class Car{
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  static numberOfWheels(){
  return `Car has 4 wheels`
  }
}

let car1 = new Car("Mercedes-Benz", "G-Class")
console.log(car1)
console.log(Car.numberOfWheels(car1))

class Bike{
  constructor(gears, hasBell){
    this.gears = gears;
    this.hasBell = hasBell;
  }
  static numberOfWheels(){
  return `Bike has 2 wheels`
  }
}

let bike1 = new Bike("Fixed", false)
console.log(bike1)
console.log(Bike.numberOfWheels(bike1))


// ## Question 8
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method
//  called `makeSound` which logs "WHHOOSSSH" to the console
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
console.log("QUESTION 8")

class Vehicle extends Car{
  constructor(make, model, color, name){
    super(make,model)
    this.color = color
    this.name = name
  }
  makeSound(){
    return "WHHOOSSSH"
  }
}
let car2 = new Vehicle ("Mercedes-Benz", "G-Class","red", "Carry McCarface")
console.log(car2)

class Vehicle2 extends Bike{
  constructor(gears, hasBell, color, name){
    super(gears,hasBell)
    this.color = color
    this.name = name
  }
  makeSound(){
    return "WHHOOSSSH"
  }
}
let bike2 = new Vehicle2 ("Fixed", false, "green", "Bikey McBikeface")
// let bike3 = new Vehicle2 (21, true, "blue", "Bikey McBikey")
// console.log(Vehicle2.numberOfWheels(bike3))
console.log(bike2)
