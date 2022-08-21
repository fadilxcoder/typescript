import { UtilInterface } from "../interface/utilInterface";
import { UserInterface } from "../interface/userInterface";

class Util implements UtilInterface{

    endpoint: string = 'xyz';

    constructor() {
        this.map(this.findOne(1));
    }

    findOne(id: number): UserInterface {
        return {
            id: 1,
            full_name: 'full_name',
            email: 'email',
            phone_number: 'phone_number',
            address: 'address',
            job: 'job',
            company: 'company',
            card_type: 'card_type',
            account_number: 'account_number'
        }
    }

    map(user: UserInterface): void {
        console.log(user);
    }
}

export {Util}
