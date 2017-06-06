import { Greeter } from './greeter';

const greeter = new Greeter<string>("Hello, world");

setTimeout(function() {
    console.log(greeter.greet());
}, 60000);