//Array

var numList = [23,10,4,99]
numList[2] = 99;
console.log(numList[2]);
console.log(numList.indexOf(99));

var position = numList.indexOf(122)
var splited = numList.slice(0,4);
console.log(position);

// Array little bit advance

var pushArray = []

pushArray.push(20,22,29,299,40,99,02);
pushArray.pop();
pushArray.pop();

var nameList = ['karim', 'rahim', 'jarina', 'rahima'];
nameList.push('hasina'); //added in the end
nameList.unshift('ershad'); //added in the front
nameList.shift(); //remove in the front
nameList.pop(); //remove in the end
console.log(nameList);
// console.log(pushArray);
// console.log(pushArray.length);

var removePermanently = nameList.splice(1,3);


var part = nameList.slice(1,3);
console.log(nameList);
console.log(removePermanently);

// looping

var n = 0;

while(n<10){
    console.log(n);
    n++
}

for(var i=0; i<10; i++){
    console.log("for loop"+i);
}

var element = [23,99,49,94,75,100];

for(var i = 0; i < element.length; i++){
    var elementResult = element[i];
    console.log(elementResult);
}

// switch

var num = 9090;
switch (num) {
    case 1000:
        console.log("i'm  1000");
        break;
    case 100:
        console.log("It's 100");
        break;
    case 99:
        console.log("it's 99");
        break;
    default:
        console.log("sorry dont know");
}

// funciton 

function addtion(num1, num2){
    return num1+num2;
}

console.log(addtion(20,10));

// object 

var person = {
    name: "fuad",
    id: 27,
    add: "ctg, Bangladesh",
    profession: "student"
}

var stdProfession = person["profession"];

console.log(stdProfession);

console.log("fuad id: "+person.id);
console.log("fuad address: "+person.add);