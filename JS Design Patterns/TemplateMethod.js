/**
 * Template Method - behavioral design pattern.
 * 
 * Used to define the skeleton of an algorithm in the superclass.
 * But subclasses can override specific steps of the algorithm without changing its structure.
 */

//Implementation
class AbstractAlgorithm {
	//template method
	perform() {
		this.step1();
		this.step2();
		this.step3();
	}
}

class AlgorithmA extends AbstractAlgorithm {
	step1() {
		console.log('Algorithm A step 1');
	}

	step2() {
		console.log('Algorithm A step 2');
	}

	step3() {
		console.log('Algorithm A step 3');
	}
}

class AlgorithmB extends AbstractAlgorithm {
	step1() {
		console.log('Algorithm B step 1');
	}

	step2() {
		console.log('Algorithm B step 2');
	}

	step3() {
		console.log('Algorithm B step 3');
	}
}

//Usage
let algA = new AlgorithmA(),
	algB = new AlgorithmB();

algA.perform();
algB.perform();
