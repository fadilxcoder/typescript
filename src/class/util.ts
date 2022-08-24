import { UtilInterface } from "../interface/utilInterface";
import { UserInterface } from "../interface/userInterface";
import axios from 'axios';
import $ = require("jquery");

class Util implements UtilInterface{

    // endpoint: string = 'https://json-server-fake-api.glitch.me/users/'; 
    endpoint: string = 'https://my-json-server.typicode.com/fadilxcoder/fake-api-server/users/';
    obj = {} as any;

    constructor() {
        this.clickAndFind();
    }

    clickAndFind(): void {
        var thisObj = this;
        $(document).on('click', '#submitIdentifier', function(e){

            thisObj._generateRandomInt();

            let id = Number($('#identifier').val());

            thisObj.findOne(id).then(function(response){
                thisObj.map(response);
            })
            ;
        });
    }

    _generateRandomInt() {
        let value = (Math.floor(Math.random() * 11) == 0) ? 1 : Math.floor(Math.random() * 11);
        $("#identifier").attr('value', value);
    }

    async findOne(id: number): Promise<UserInterface> {
        try {
            const { data, status } = await axios.get<UserInterface>(
                this.endpoint + id,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            )
            console.log('HTTP CODE ' + status);

            return {
                id: data.id,
                full_name: data.full_name,
                email: data.email,
                phone_number: data.phone_number,
                address: data.address,
                job: data.job,
                company: data.company,
                card_type: data.card_type,
                account_number: data.account_number
            }
            ;
        } catch (err) {
            console.error(err);
        }
    }

    map(user: UserInterface): void {
        let target = $('#axios-content');
        target.find('li:nth-child(1)').text(user.full_name);
        target.find('li:nth-child(2)').text(user.email);
        target.find('li:nth-child(3)').text(user.job);
        target.find('li:nth-child(4)').text(user.company);
        target.find('li:nth-child(5)').text(user.phone_number);
        target.find('li:nth-child(6)').text(user.card_type);
        target.find('li:nth-child(7)').text(user.account_number);
    }
}

export {Util}
