// Le typage en typescript
const firstname: string = 'Fiorella';
let age: number = 4;

const contacts: Array<string> = ['A', 'B', 'C'];
const contacts2: string[] = ['A', 'B', 'C'];

// Création de types
type Color2 = 'blue' | 'red' | 'green';
const myColor: Color2 = 'blue';

// Typage des fonctions
function addition(a: number, b: number): number {
  return a + b;
}

console.log(addition(1, 2));

// Fonctions raccourcies (ES6)
const substraction = (a: number, b: number): number => a - b;

console.log(substraction(2, 1));

// Classes et interfaces
interface Color {
  name: string;
  value: string;
  universe?: string;
  display(): void;
}

const Log = () => {
  return (originalMethod: any, context: ClassMethodDecoratorContext) => {
    console.log(`call ${context.kind} ${String(context.name)}`);

    // On remplate la méthode par cette fonction (normale car this)...
    return function (...args: any[]) {
      console.log('LOG');
      originalMethod.call(this, ...args);
    };
  }
}

class Car {
  private wheel: number = 4;
  private speed: number = 0;

  constructor(public color: Color) {
    // this.color = color;
  }

  @Log()
  drive() {
    console.log(`my ${this.color.value} car is driving at ${this.speed}.`);
  }
}

const car: Car = new Car({
  name: 'Red', value: 'red', display() { console.log(this.value) }
});

const cars: Array<Car> = [car];

car.drive();
car.color.display();

import { addTwoNumbers1 } from './exercice';

addTwoNumbers1(1, 2);
