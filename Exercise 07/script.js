console.log('it works')

let nouns = ["heart","rainbow","ocean"];
let verbs = ["look","make","continue"];
let adjectives = ["good", "different","possible"];

// let item = arrayName[Math.floor(Math.random()*arrayName.length)];

// let noun = nouns[Math.floor(Math.random()*arrayName.length)]

// let random = Math.floor(Math.random()*arrayName.length)
let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

// console.log(noun)
// console.log(verb)
// console.log(adjective)

let sentence = 'My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.';

console.log(sentence);

// console.log(Math.floor(Math.random()*arrayName.length))