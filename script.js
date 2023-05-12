//Task 1
const userArray = [{name: 'Temo', age: 25}, 
                   {name: 'Lasha', age: 21}, 
                   {name: 'Ana', age: 28}]

function minAge(input){
    let smallestAge = Infinity;
    let nameOfSmallest = null;

    for(const user of input){
        if(user.age < smallestAge){
            smallestAge = user.age;
            nameOfSmallest = user.name;
        }
    }

    return nameOfSmallest
}

console.log(minAge(userArray))


//Task 2
const object = {name: 'Sandro', age: 24};

function cloneObject(user){
    return Object.assign({},object)
}

const testObject = cloneObject(object)
const testObjectSecond = cloneObject(object)  

console.log('Before changes')

console.log(object.name)
console.log(object.age)

console.log(testObject.name)
console.log(testObject.age)

console.log(testObjectSecond.name)
console.log(testObjectSecond.age)

testObject.name = 'Konstantine'
testObjectSecond.age = 45

console.log('Before changes')

console.log(object.name)
console.log(object.age)

console.log(testObject.name)
console.log(testObject.age)

console.log(testObjectSecond.name)
console.log(testObjectSecond.age)


//Task 3
let numberOfRolls = 0;

while(true){
    let userOneRoll = Math.floor(Math.random() * 6 + 1);
    console.log(`User One rolled ${userOneRoll}`);

    let userTwoRoll = Math.floor(Math.random() * 6 + 1);
    console.log(`User two rolled ${userTwoRoll}`);

    numberOfRolls++;

    if(userOneRoll === 3 && userTwoRoll !== 3){
        console.log(`User one wins in ${numberOfRolls} rolls`);
        break;
    }else if(userTwoRoll === 3 && userOneRoll !== 3){
        console.log(`User two wins in ${numberOfRolls} rolls`);
        break;
    }else if(userOneRoll === 3 && userTwoRoll === 3){
        console.log(`A draw in ${numberOfRolls} rolls`);
        break;
    }
}