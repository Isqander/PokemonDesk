concat('Hello ', 'World') // -> Hello World;

function concat (first: string, second: string){
    //...
}


const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyHometask {
    howIDoIt: string,
    simeArray: (number|string)[],
    withData: object[],
}