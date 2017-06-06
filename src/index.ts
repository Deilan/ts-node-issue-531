import { Greeter } from './greeter';

const greeter = new Greeter<string>("Hello, world");

setTimeout(function() {
    console.log(greeter.greet());
    console.log(greeter.greet());
    console.log(greeter.greet());
    console.log(greeter.greet());
}, 5000);