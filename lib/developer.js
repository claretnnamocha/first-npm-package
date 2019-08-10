export class Developer{
	constructor(name='Claret Nnamocha', email='devclareo@gmail.com',description='A simple npm library dn it\'s deployment process'){
		this.name = name;
		this.email = email;
		this.description = description;
	}

	display_details(){
		console.log(`Hello world, I'm ${this.name}, my email is ${this.email}\nDescription : ${this.description}`)
	}
}