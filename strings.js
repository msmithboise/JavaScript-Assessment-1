//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

function upperI(str) {
  let strArray = str.split(" ");  // Turn sentence into an array

for (i = 0; i < strArray.length; i++){ // iterate through array
  let word = strArray[i]
  if ( word == "i"){
    strArray[i] = "I"
  }
}      
return strArray.join(" ");                          // find the letter i... find()?  conditional?
  

// for (var i = 0; i < str.length; i++){
//   str[i] = str[i].charAt(0).toUpperCase();
// }
  
    //turn array back into string
}
upperI(sentence) // invoke function



//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';


jsHistory.match(/a/gi).length;



console.log(jsHistory.match(/a/gi).length);


// function aCount(str){
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if(CharacterData.toLowerCase == "a") {
//       totall++
//     }
    
//   }
//   return total
// }
// console.log("strings challeng 2 :", aCount(jsHistory))

//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

function upperScream(str) {
    let strArray = str.split(" ");
  
  for (i = 0; i < strArray.length; i++){ 
    let word = strArray[i]
    if ( word.includes("scream")){
      strArray[i] = word.toUpperCase()
    }
  }      
  return strArray.join(" ");                         
    
  
  
  }
  upperScream(text) 