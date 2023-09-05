/**
 * Proxy - structural design pattern.
 * 
 * Used to substitute object with proxy object, which intercepts requests
 * to original object in order to do something before or after request.
 */

//Implementation
class DataBase {
	open() {
		console.log('Opening DB');
	}

	close() {
		console.log('Closing DB');
	}
}

class DBSecurityProxy {
	constructor(db) {
		this.db = db;
	}

	authenticate(pwd) {
		return pwd === 'pass';
	}

	open(pwd) {
		if (this.authenticate(pwd)) {
			this.db.open();
		}

		else {
			console.log('Access denied');
		}
	}

	close() {
		this.db.close();
	}
}

//Usage
const db = new DBSecurityProxy(new DataBase());
