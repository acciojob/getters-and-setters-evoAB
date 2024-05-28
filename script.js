//complete this code
class Person {
	constructor(name, age){
		this.myname=name;
		this.myage=age;
	}

	get name(){
		return this.myname;
	}
	
	get age(){
		return this.myage;
	}

	set age(a){
		this.myage=a;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.myname} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.myname} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;