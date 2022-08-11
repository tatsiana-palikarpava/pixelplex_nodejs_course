//'use strict';
/*
    CommonJS modules
*/
/*
    const cat = require('./cat.js');
    const Dog = require('./dog.js');

    console.log(`Cat says ${cat.voice(3)}`);

    const myDog = new Dog('Rex');
    myDog.greeting();
    console.log(`Dog says ${myDog.voice(2)}`);
*/

/*
    ECMAScript modules
*/
import moment from 'moment';
import * as cat from './cat.js';
import { voice } from './cat.js';
import { Dog } from './dog.js';

console.log(`Cat says ${cat.voice(3)}`);
console.log(`Cat says ${voice(3)}`);

const myDog = new Dog('Rex');
myDog.greeting();
console.log(`Dog says ${myDog.voice(2)}`);

console.log(moment().add(1, 'day'))
