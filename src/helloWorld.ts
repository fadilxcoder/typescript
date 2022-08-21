var n : any = 1;

n = 'QX34';

// This is a comment

function hello(string : String) : void {
    console.log("Hellooo " + string);
}

hello("John Doe");


var isAvailable : boolean = false;

var count : number = 5;

var fullname : string = "John Doe";

var codes : string[] = ["Alpha", "Bravo", "Lima", "Foxtrot", "Sierra", "Tango", "Echo"];

var mixed : any[] = ["Zulu", 55, false];

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

var lookAt : Direction = Direction.Left;

console.log("Look at your " + lookAt);