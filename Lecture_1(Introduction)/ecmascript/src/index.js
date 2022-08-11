import readline from 'readline-sync';
import * as cat from './cat.js';
import { voice } from './cat.js';
import { Dog } from './dog.js';

const n = readline.questionInt('Enter positive number\n');
console.log(`Cat says ${cat.voice(n)}`);
console.log(`Cat says ${voice(n)}`);

const myDog = new Dog('Rex');
myDog.greeting();
console.log(`Dog says ${myDog.voice(n)}`);
