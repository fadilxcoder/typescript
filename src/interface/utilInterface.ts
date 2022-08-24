import { UserInterface } from "./userInterface"

interface UtilInterface {
    endpoint: string;
    findOne(id: number): Promise<UserInterface>;
    map(user: UserInterface): void;
}

export {UtilInterface}