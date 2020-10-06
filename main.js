// 1. Write a function that loops from the first index to the last of the given string, printing each character. Call it with "Hello." and call it again with "Oh hi."
console.log('Challenge1');
function challenge1(str){
    let i = 0;
    while(i < str.length){
        console.log(str[i]);
        i++;
    }
}
challenge1('Hello.');
challenge1('Oh hi.');

// 2. Write a function that prints out every third character. HINT: you'll need to play with how our counter/index variable changes with each loop.
//Now call it with "I am the alfalfa and the omelette." An "e" should be the last thing printed, with no undefined values showing up.
console.log('Challenge2');
function challenge2(str){
    let i = 2;
    while(i <= str.length){
        console.log(str[i])
        i += 3;
    }
}
challenge2('I am the alfalfa and the omelette.')

//3. 
console.log('Challenge3');
function Challenge3(str) {
    let i = str.length - 1;    
    while(i >= 0 ) {
        console.log(str[i]);
        i--;
    }
}
Challenge3('Hello.');
Challenge3('Oh hi.');

//4
console.log('Challenge4');
function Challenge4(str) {
    let i = 0;
    while(i < str.length) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'
           || str[i] == 'o' || str[i] == 'u') {
        console.log(str[i]);
           }
        i++
    }
}
Challenge4('Regular expressions are for term 2.');

//5 
console.log('Challenge5');
function Challenge5(str, num) {
    let i = num;
    while(i <= str.length - 1) {
        console.log(str[i]);
        i++;
    }
}
Challenge5('slaughter', 1);
Challenge5("I don't love you!", 7);

//6
console.log('Challenge6');
function Challenge6(str) {
    let i = 0;
    while(i <= str.length -1) {
        if(str[i] == 'u') {
            console.log(i);
        }
    i++;
    }
}
Challenge6('You picked the wrong house, bud.');

//7
console.log('Challenge7');
function Challenge7(str) {
    let vcount = 1;
    let i = 0;
    
    while(i < str.length && vcount < 6) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        console.log(str[i]);
        vcount++ 
        }
    i++
    }
}
Challenge7('Regular expressions are for term 2.');
Challenge7('Hello');

//8
console.log('Challenge8');
function Challenge8(str) {
    let i = 0;
    let count = 1;
    while(i < str.length && count < 2) {
        if(str[i] == 'u') {
        console.log(i);
        count++    
    }
    i++
    }
}
Challenge8('You picked the wrong house, bud.');
Challenge8('This is unheard of!');

//9
console.log('Challenge9');
function Challenge9(str, num) {
    let i = num;
    
        if(num + 4 <= str.length) {
            while(i < num + 4) {
                console.log(str[i])
                i++;
            }
        }
        else {
            while(i < num + (str.length - num)) {
                console.log(str[i])
                i++;
            } 
        }
    }
Challenge9("Oh hi, I didn't see you there. Welcome.", 4);
Challenge9("Oh hi, I didn't see you there. Welcome.", 36);

//10
console.log('Challenge10');
function Challenge10(str) {
    let i = 0;
    let count = 1;
    
    while(i < str.length) {
        if(str[i].includes('u') && count < 2) {
            console.log(i);
            count++;
        }
        else if(str.includes('u') == false) {   
            console.log(-1);
            break;
        }
        i++;
    }
}
Challenge10('You picked the wrong house, bud.');
Challenge10("I'm Canadian");
