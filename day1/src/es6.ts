interface Live {
  name: string;
  species: string;
}
export class Person implements Live {
  //En esta area se declaran las propiedades de la clase.
  name;
  age;
  #isLive; // # = indicacion de propiedad privada.
  species;
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.#isLive = true;
    this.species = species;
  }

  greetings() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.#isLive = false;
  }
}
//Otra manera de declarar una clase. Sin especificar los this.
export class PersonClass {
  private isLive; // private = indicacion de propiedad privada.
  constructor(public name: string, public age: number) {
    this.isLive = true;
  }

  greetings() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.isLive = false;
  }
}

const p4 = new PersonClass("nico", 32);
p4.greetings();
p4.kill();

class Student extends PersonClass {
  course;
  constructor(name: string, age: number, course: string) {
    super(name, age);
    this.course = course;
  }

  greetings() {
    super.greetings();
    console.log(`mi edad es ${this.age} y estudio ${this.course}`);
  }
}

class Dog implements Live {
  constructor(public name: string, public species: string) {}
}

const s1 = new Student("Mariano", 32, "programming");
s1.greetings();
console.log(s1);

const x: Live = { name: "sofia", species: "person" };
const z: Dog = { name: "sofia", species: "person" };
