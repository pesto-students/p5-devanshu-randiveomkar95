/* Exercise 3.2:
    Create 3 simple functions where call, bind and apply are used. 
    The intention of this exercise isto understand how they work and their differences. */

// CALL Example
const person = {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  const person1 = {
    firstName: 'Omkar',
    lastName: 'Randive'
  }
  person.fullName.call(person1);


//BIND Example
const developer = {
    language: "TypeScript",
    designation: function () {
      return this.language;
    }
  }

const designation = {
    language: "JavaScript"
}

let devLang = developer.designation.bind(designation);
console.log(devLang());

//