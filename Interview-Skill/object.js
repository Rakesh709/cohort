/*

1. Object Literals : 
    Advantages: - simple
                this does not acts as a blueprint

                BaseBlue print : function constructor

*/

const person = {
  fname: "Rakesh",
  lname: "kumar",
  getName: function () {
    console.log("Rakesh");
  },
};

const p2 = {
  fname: "john",
  lname: "ceina",
  getName: function () {
    console.log("You can see me!");
  },
};

//console.log(person.getName())

//construtor function : function object ko create krne mai help krega

//Normal Function : GetAge() printThis()
//constructor function : pascal --> Person()

// function Person(fname, lname, contact) {
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;

//   this.getName = function () {
//     console.log(this.fname);
//   };
// }

// const person1 = new Person("Rakesh", "kumar", "434633");

//console.log(person1);

// class based

class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getName = function () {
      console.log(this.fname);
    };
  }
}

const person1 = new Person("Rakesh", "kumar", "434633");

console.log(person1);
