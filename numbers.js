//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;


// var newNum = Number(string8);
// var answer = newNum += one += num10;

// console.log(answer)


let total = num10 + parseInt(string8) + one

console.log("numbers 1: ",total)



//2. write a loop that will log only numbers divisible by 3 between 20 - 100

for (let i = 20; i < 100; i++) {
    if (i % 3 == 0){
      console.log(i)
    }
}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

function average(arr){
    let average = 0
    for (let i = 0; i < arr.length; i++) {
        const score = arr[i];
        average += arr[i];

    }
    return average / arr.length
}
console.log('number 3:', average(scores))