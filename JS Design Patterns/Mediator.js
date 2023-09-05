/**
 * Mediator - behavioral design pattern.
 * 
 * Used to reduce dependencies between objects by forcing them to collaborate via a mediator object.
 */

//Implementation
class Client {
	constructor(name, companyMediator) {
		this.name = name;
		this.companyMediator = companyMediator;
	}

	getName() {
		return this.name;
	}

	makeOrder(product, info) {
		this.companyMediator.orderProduct(this, product, info);
	}
}

class Company {
	constructor() {
		this.clients = [];
	}

	orderProduct(client, product, info) {
		const name = client.getName();

		console.log(`Order name: ${name}, product: ${product}`);
		console.log(`Order info: ${info}`);

		this.addClient(name);
	}

	addClient(name) {
		this.clients.push(name);
	}

	getClientsList() {
		return this.clients;
	}
}

//Usage
const company = new Company(), //it is our mediator

	  vasyok = new Client('Vasyok', company),
	  valerchik = new Client('Valerchik', company),
	  fedunya =  new Client('Fedunya', company);

vasyok.makeOrder('Parfum', 'Good smell');
valerchik.makeOrder('BMW', 'Great car');
fedunya.makeOrder('Bread', 'I want to eat');

console.log(company.getClientsList());
