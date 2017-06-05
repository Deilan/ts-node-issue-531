import { Greeter } from './greeter';

const greeter = new Greeter<string>("Hello, world");

console.log(greeter.greet());