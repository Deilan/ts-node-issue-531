import { Greeter } from "./greeter";

const greeter = new Greeter<string>("Hello, world");

setTimeout(() => {
    // tslint:disable-next-line:no-console
    console.log(greeter.greet());
}, 5000);
