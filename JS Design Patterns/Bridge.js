/**
 * Bridge - structural design pattern.
 * 
 * Used to split one or more classes to separate hierarchies - abstraction and implementation.
 * This allows to change them independently from each other.
 * 
 * Abstraction is a special wrapper, which delegates all work to one of available implementations.
 * Implementation is an object, which contains needed implementetion.
 */

//Implementation
class Color {
	constructor(value) {
		this.value = value;
	}

	get() {
		return this.value;
	}
}

class BlackColor extends Color {
	constructor() {
		super('black');
	}
}

class RedColor extends Color {
	constructor() {
		super('red');
	}
}

class Box {
	constructor(color) {
		this.color = color;
	}
}

class BigBox extends Box {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Big box, color: ${this.color.get()}`;
	}
}

class SmallBox extends Box {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Small box, color: ${this.color.get()}`;
	}
}

//Usage
const blackSmallBox = new SmallBox(new BlackColor()),
	  redBigBox = new BigBox(new RedColor());

console.log(blackSmallBox.paint());
console.log(redBigBox.paint());
