//TypeScript Literal Types restrict the value of a variable to finite valid values. This is in contrast to the variable which allows you to change value (except for TypeScript Constants). The latest version of Typescript supports the String Literal Types, Numeric Literal Types, Boolean Literal Types & Enum Literal Types

//A literal is a notation for representing a fixed value in the source code. For Example, 1 is literal, because it represents the number 1. hello is literal because it represents the string “hello”. Similarly null is literal because it represents the value null.
//TypeScript also allows us to define our own literal types. The latest version of Typescript supports the following Literal Types

//String Literal Types
//Numeric Literal Types
//Boolean Literal Types
//Enum Literal Types

//String Literal Types
export {};
let engineStatus: 'Active';
console.log(typeof engineStatus); //Undefined
console.log(engineStatus);

engineStatus: 'Active';
engineStatus = 'Active';
console.log(typeof engineStatus); //String
console.log(engineStatus); //Active

engineStatus = 'active';

//Union Types

let engineMode: 'started' | 'stopped';

engineMode = 'started'; //OK
engineMode = 'stopped'; //OK

engineMode = 'Debasish'; //error

//Numeric Literal Types
let Active: 1;

Active = 1; //OK
Active = 0; //Type '0' is not assignable to type '1'

function getSize(size: 35 | 38 | 41 | 44 | 47 | 50): string {
  if (size == 35) {
    return 'S';
  } else if (size == 38) {
    return 'M';
  } else if (size == 41) {
    return 'L';
  } else if (size == 44) {
    return 'XL';
  } else if (size == 47) {
    return 'XXL';
  } else if (size == 50) {
    return 'XXXL';
  } else {
    return 'Please Provide Proper Input';
  }
}

getSize(35); //OK
getSize(36); //Argument of type '36' is not assignable to parameter of type '35 | 38 | 41 | 44 | 47 | 50'

let val: 10 | 11 | 12 | 13 | 14 | 15;

val = 10;
console.log(10 + val);

let val1: 10 | 11 | 12 | 13 | 14 | 15 = 10;
let val2 = 10;

val2 = val1; //ok
val1 = val2; //Type 'number' is not assignable to type '10 | 11 | 12 | 13 | 14 | 15'

//Boolean Literal Types

let b: true;
b = true; //OK

b = false; //Type 'false' is not assignable to type 'true'

//Enum Literal Types

enum Dir1 {
  Up = 1,
  Down,
}

enum Dir2 {
  Left = 3,
  Right,
}

let a: Dir1.Up | Dir2.Left;

a = Dir1.Up; //ok
a = Dir1.Down; //Type 'Dir1.Down' is not assignable to type 'Dir1.Up | Dir2.Left'
a = 1;

//Literal Types

function engine(value: 'start' | 'stop' | 1 | 0 | true | false) {
  if (value == 'start' || value == true || value == 1) {
    //Start the Engine
    console.log('Start the Engine');
  }
  if (value == 'stop' || value == false || value == 0) {
    //Stop the Engine
    console.log('Stop the Engine');
  }
}

engine('start'); //OK
engine(true); //OK
engine(1); //OK

engine('stop'); //OK
engine(false); //OK
engine(0); //OK
