import { Greeter } from "./greeter";

const greeter = new Greeter<string>(process.env.NODE_ENV!);

setInterval(() => {
    // tslint:disable-next-line:no-console
    console.log(greeter.greet());
}, 1000);
