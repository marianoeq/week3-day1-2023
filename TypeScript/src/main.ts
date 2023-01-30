//  Tipado estatico
let foo = 9;

//  Tipado fuerte mediante notacion de tipos

const bar: string = 'Mariuano';

//Daria un error bar = 23

let zoo: boolean | null = null;

const aData: Array<number> = [];
const aData2: string[] = [];

const aData3: (number | string)[] = [];
const aData4: Array<number | string> = [];

console.log(bar);
