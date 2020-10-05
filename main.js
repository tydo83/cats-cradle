// 1. Write a function that loops from the first index to the last of the given string, printing each character. Call it with "Hello." and call it again with "Oh hi."

function challenge1(str){
    let i = 0;
    while(i <= str.length){
        console.log(str[i]);
        i++;
    }
}
// challenge1('Hello');
// challenge1('Oh hi');

// 2. Write a function that prints out every third character. HINT: you'll need to play with how our counter/index variable changes with each loop.
//Now call it with "I am the alfalfa and the omelette." An "e" should be the last thing printed, with no undefined values showing up.

function challenge2(str){
    let i = 2;
    while(i <= str.length){
        console.log(str[i])
        i += 3;
    }
}
challenge2('I am the alfalfa and the omelette.')