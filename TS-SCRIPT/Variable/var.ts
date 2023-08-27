var a1: number = 4;

let a2: number = 4;

const a3: number = 5;

//Primitive DataType
let d1: number;
let d2: string;
let d3: boolean;
let d4: bigint; //#

//Spacial DataType
let d6: any;
let d7: never;//#
let d8: null;
let d9: undefined;
let d10: unknown;
let d11: void;

//AdvanceDataType
let d12: Array<number>;
let d13: Array<number | string>;
let d14: Array<number | string | boolean>;
let d15: Array<any>;


enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec }
let d16: Month;
d16 = Month.Jan;

interface Person {
    firstName: string;
    lastName: string;
}
function getPerson() {
    return {};
}

let d17 = getPerson() as Person;




