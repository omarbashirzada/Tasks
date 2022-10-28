//1. sual
function reverseArray(sentence){
    return sentence.reverse()
}

const sentence = ["sense", "make", "all", "will", "This"];
console.log(reverseArray(sentence));

//2. sual
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens(arr) {
    arr.forEach(element => {
        console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`)
    });
}
greetAliens(aliens);

//3. sual
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'my room', 'temporary tattoos'];
const myStuff = ['sweaters', 'skateboards', 'family-night', 'my room',
];
const sameStuff = [];
function justCoolStuff(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameStuff.push(arr1[i])
            }
        }
    }
    console.log(sameStuff);
}
justCoolStuff(myStuff, coolStuff);

//4.sual
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
];
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
];

let vegan = true;

function isTheDinnerVegan(arr){
    for(let i = 0; i<arr.length;i++){
          if(arr[i].source == "meat"){
             return vegan = false
          }else{
            return vegan = true
          }
    }

     
}

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));