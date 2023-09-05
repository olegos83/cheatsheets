/**
 * JS Number features.
 */
//Number constants
Number.EPSILON; //2.220446049250313e-16

Number.MIN_VALUE; //5e-324
Number.MAX_VALUE; //1.7976931348623157e+308

Number.MIN_SAFE_INTEGER; //-9007199254740991
Number.MAX_SAFE_INTEGER; //9007199254740991
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1; //true

//Infinity
Number.NEGATIVE_INFINITY; //-Infinity
Number.POSITIVE_INFINITY; //Infinity
-2 / 0 === -Infinity; //true
2 / 0 === Infinity; //true

Number.isFinite(-Infinity); //false
Number.isFinite(Infinity); //false
Number.isFinite(-88); //true
Number.isFinite(88); //true

isFinite !== Number.isFinite; //true

isFinite(-Infinity); //false
isFinite(Infinity); //false
isFinite(-88); //true
isFinite(88); //true

//Not A Number
NaN;
typeof NaN; //"number"

isNaN(2 / undefined); //true
isNaN(88); //false
isNaN('88'); //false
isNaN('88str'); //true
isNaN('str88'); //true

NaN !== Number.NaN; //true
isNaN !== Number.isNaN; //true

Number.NaN;
typeof Number.NaN; //"number"

Number.isNaN(2 / undefined); //true
Number.isNaN(88); //false
Number.isNaN('88'); //false
Number.isNaN('88str'); //false
Number.isNaN('str88'); //false

//BigInt
typeof 88888888n; //"bigint"

88888888n - 88888888n; //0n
88888888n - 88888880n; //8n
88888888n - 88888896n; //-8n

88n / 44n; //2n
88n / 41n; //2n

88n == 88; //true;
88n === 88; //false;

console.log(90071992547409919999999n); //90071992547409919999999n
console.log(-90071992547409919999999n); //-90071992547409919999999n

8888.8888n; //Error: Must be integer
10n - 4; //Error: Cannot mix BigInt and other types

Number(88n); //88
parseInt(88n); //88

BigInt(88); //88n
BigInt(88.88); //Error: The number 88.88 cannot be converted to a BigInt because it is not an integer
