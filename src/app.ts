interface Stark {
    name: string;
    age?: number;
    isAvailable?: boolean;
}

function printName(stark : Stark) : void {
    console.log(`
        -----------------------
        ${stark.name} \n
        ${stark.age} \n
        ${stark.isAvailable} \n
        -----------------------
    `);
}

printName({name: "Jean"});
printName({name: "Micheal", age: 26, isAvailable: false});
printName({name: "Tommy", age: 30});
printName({name: "Authur", isAvailable: true});
printName({name: "Aida"});