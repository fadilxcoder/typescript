import { UserInterface } from "./userInterface"

interface UtilInterface {
    endpoint: string;
    findOne(id: number): UserInterface;
    map(user: UserInterface): void;
}

export {UtilInterface}