import { UserInterface } from "./userInterface";

class User implements UserInterface{
    fullname!: string;
    static identier: string = 'armagedon';
    saying!: string;

    constructor() {
        this.fullname = User.identier;
    }

    greet(name: string): string {
        return ("Hola " + name);
    }

    thankYou(name: string): string {
        return ("Thank you " + name);
    }
}

export {User}
