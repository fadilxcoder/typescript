import { User } from "./user";

var user = new User();
user.saying = 'Lorem ipsum...';

console.log(user);
console.log(user.greet('Paul'));
console.log(user.thankYou('James'));