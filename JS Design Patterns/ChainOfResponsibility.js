/**
 * Chain Of Responsibility - behavioral design pattern.
 * 
 * Used to pass requests along a chain of handlers.
 * Each handler decides whether to process the request or to pass it to the next handler in the chain.
 */

//Implementation
class PaymentAccount { //this is our chain of responsibility class
	pay(price) {
		console.log(`Paying ${price} using ${this.title}`);

		if (this.canPay(price)) {
			console.log('Success');
		}

		else if (this.reserveAccount) {
			console.log(`Cannot pay using ${this.title}`);
			this.reserveAccount.pay(price);
		}

		else {
			console.log(`Cannot pay using ${this.title}`);
			console.log('Fail');
		}
	}

	canPay(amount) {
		return this.balance >= amount;
	}

	setReserveAccount(acc) {
		this.reserveAccount = acc;
	}
}

class MasterCard extends PaymentAccount {
	constructor(bal) {
		super();
		this.title = 'MasterCard';
		this.balance = bal;
	}
}

class PayPal extends PaymentAccount {
	constructor(bal) {
		super();
		this.title = 'PayPal';
		this.balance = bal;
	}
}

//Usage
const mc = new MasterCard(100), pp = new PayPal(500);

//setting payment chain from MasterCard to PayPal
mc.setReserveAccount(pp);

//trying to pay 350, but there is not enough money on MasterCard, so paying using PayPal
mc.pay(350);

//trying to pay 800, but there is not enough money neither on MasterCard nor on PayPal
mc.pay(800);
