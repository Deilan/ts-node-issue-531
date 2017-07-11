export class Greeter<T> {
    private greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    public greet() {
        return this.greeting;
    }
}
