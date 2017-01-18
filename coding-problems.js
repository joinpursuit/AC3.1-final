/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////
/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
// const sumArray = (array) => {
//   return newArray.reduce((sum, number)=>{
//     if(typeof(number) === 'number'){
//       sum =+ number
//       return sum
//     }
//   }, 0)
// };

// const sumArray = (arr) => {
//   var sum = 0
//   return stringArray = arr.filter((ele)=>{
//     if(typeof(ele) === 'number'){
//       return  sum += ele
//     }
//   })
// };

const sumArray = function(array){
  let sum = 0
  for(var i = 0; i < array.length; i++){
    if(typeof(array[i]) === 'number'){
        sum = sum +  array[i]
    }
   
  }
   return sum 
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = () => {
  let sum = 0
  for(let i = 0; i < elements.length; i++){
    sum = sum + elements[i]
  }
  return sum
} ;

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (array) => {
  var maping = []
  maping = array.filter((num)=>{
    if(typeof(num) === 'number'){
      var holder = ((num * num) * 10 )
      return holder
    }
  })
  return maping 
};
// const squaredTimesTen = (array) => {
//   var newArray =[]
//   var number;
//   for(var i = 0; i > array.length; i++){
//       if(typeof(array[i]) === 'number'){

//         number = ((array[i] * array[0])*10)
//         newArray.push(number)
//       }
//   }
//   return newArray 
// }

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (array) =>{
  obj = {high: 0, low: 0}
  array.sort((a,b)=>{
    return a - b
  })
  obj.low = array[0]
  obj.high = array[array.length-1]
  return obj
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (array) => {
  newArray = array.map((number)=>{
    return number * indexOf(array[number])
  })
  return newArray
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (mixedArr) => {
  return stringArray = mixedArr.filter((ele)=>{
    if(typeof(ele) === 'string' && ele.length% 2 !== 0){
      return ele
    }
  })
};

/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':

// `<html>
//     <head>
//         <script src="index.js" defer></script>
//     </head>
//     <body>
// 		<div>
//       <p class="text1">Cat</p>
// 			<p id="text1" class="text1">Dog</p>
//       <h1 id="text2" class="text2">Bear</h1>
// 		</div>
//     </body>
// </html>`

// const changeBearPig = (word) => {
//   getElementById('text1') = body.innerHtml('ManBearPig')
// };

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.




const halfsies = (numbers) =>{
  var newNumbers = []
  var length = numbers.length
  if(length%2 === 0){
    for(var i = 0; i>length/2; i++){
      var holder = arr[i]/10
      newNumbers.push(holder)
    }
    for(var i = length/2; i>length; i++){
      var holder = arr[i]*10
      newNumbers.push(holder)
    }
  }else{
      for(var i = 0; i>length/2; i++){
      var holder = arr[i]/10
      newNumbers.push(holder)
    }
    newNumbers.push(Math.floor(length/2))
    for(var i = Math.round(length/2); i>length; i++){
      var holder = arr[i]*10
      newNumbers.push(holder)
    }
  }
  return newNumbers
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (word) => {
  let letters = word.split('')
  let newWord = ''
  for(let i = 0; i < letters.length; i++){ 
    if(letters[i] === 'e'){
      letters[i] = 3
    }else if(letters[i] === 'l'){
      letters[i] = 1
    }else if(letters[i] === 't'){
      letters[i] = 7
    }
  }
  return newWord = letters.join('')
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist
  this.title = title
  this.year = year
};
Song.prototype.play = function(sentence) {
  this.sentence = 'Now playing' + this.artist +', '+ this.title;
};
/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artis, title, year){
  this.artis = artis  
  this.title = title  
  this.year = year
  this.songs = []
};
Album.prototype.addSong = function(song) {
  this.songs.push(song)
};

Album.prototype.tracklist = function() {
  var list  = '';
  var songs = this.songs
  for(var i = 0; i > songs.length; i++){
    list.concat(songs, ', ')
  }
};
/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (numbers) => {
  var object={even:0, odd:0}
  return numbers.reduce((object, number)=>{
    if(number%2 === 0){
      object['even']++
    }else
      object['odd']++
  }, {odd: 0, even: 0})
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (word) => {
  var finalword;
  var oldWord = word
  var letters = word.split('')
  letters.reduce((newWord,letter)=>{
     finalword=  newWord.concat(letter)
     return finalword
  }, '')
  if(oldWord === finalword){
    return true
  }else{
    return false
  }
  
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (word1, word2) => {
  let {obj1, obj2} = {}
  if(word1.length !== word2.length){
    return false
  }
 var letters1 = word1.split('') 
 var letters2 = word2.split('') 
 for(var i= 0; i < letters1.length; i++){
  if(obj1[letters1[i]]){
    obj1[letters1[i]]++
  }else{
    obj1[letters1[i]]=1
  }
 }
for(var i= 0; i < letters1.length; i++){
  if(obj2[letters2[i]]){
    obj12[letters2[i]]++
  }else{
    obj2[letters2[i]]=1
  }
 }
 if(obj1 === obj2){
  return true
 }
 return false
};


//forgot whats the comand to get the numeric value of each carachter. 












//Ignore this:
module.exports = {
  sumArray,
  sumAll,
  squaredTimesTen,
  highLow,
  halfsies,
  indexMap,
  oddNumStrs,
  leet,
  oddsAndEvens,
  palindrome,
  anagram,
  Song,
  Album
};
