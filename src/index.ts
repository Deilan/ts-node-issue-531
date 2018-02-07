import { Greeter } from "./greeter";

const greeter = new Greeter<string>(process.env.NODE_ENV!);

setTimeout(() => {
    // tslint:disable-next-line:no-console
    console.log(greeter.greet());
}, 10000);
