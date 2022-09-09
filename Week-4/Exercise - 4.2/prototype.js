/* Exercise 4.2:
    Create an object called Teacher derived from the Person class, and implement a method called teach 
    which receives a string called subject
    and prints out:[teacher's name] is now teaching [subject]
*/

var Person = function() {};
Person.prototype.initialize = function(name)
{
    this.name = name;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {
    this.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
    }
}

Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Devanshu");
him.teach("Javascript");