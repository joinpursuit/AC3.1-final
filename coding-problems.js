/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
//const sumArray = () => null;

function sumArray(arr){
  var answer = 0

  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      answer += arr[i]
    }
  }
  return answer
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers

const sumAll = () => null;

// const sumAll = (nums) => {
//   var sum = 0

//   return sum += nums
// }

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  var numbers = []
  var final = []

  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] == 'number'){
      numbers.push(arr[i])
    }
  }
  for (var i = 0; i < numbers.length; i++){
    final.push((numbers[i] * numbers[i]) * 10)
  }
  return final
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = () => null;

// function highLow(arr, obj = {high: 0, low: 0}){

//   obj[high] && obj[low] === arr[0]

//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] > obj[high]){
//       obj[high] = arr[i]
//     }
//   }
// }

// function highLow(arr){
//   let obj = {high: 0, low: 0}

//   function realCheck(arr){
//     for(var i = 0; i< arr.length; i++){
//       if (arr[i] > (obj.high)){
//         (obj.high) = arr[i]
//         (obj.low) = arr[i]
//       } else if ()
//     }
//   }
// }

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.

function indexMap(arr) {
  var newArr = []

  for (var i = 0; i < arr.length; i++){
    newArr.push(arr[i] * i)
  }
  return newArr
}

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
// const oddNumStrs = () => null;
const oddNumStrs = (arr) => {
  var answer = []

  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string' && !(arr[i].length % 2 === 0)){
      answer.push(arr[i])
    } 
  }
  return answer
}
/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':

`<html>
    <head>
        <script src="index.js" defer></script>
    </head>
    <body>
		<div>
      <p class="text1">Cat</p>
			<p id="text1" class="text1">Dog</p>
      <h1 id="text2" class="text2">Bear</h1>
		</div>
    </body>
</html>`

const changeBearPig = () => null;

// function changeBearPig(word){
//   if( word === 'Dog'){
//     return word === ManBearPig
//   }
// }

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {

  let firstHalf = []
  let secondHalf = []
  let final = []

  for (var i = 0; i < arr.length; i++){
    if(arr.length % 2 === 0){
      firstHalf.push(arr.slice(0, (arr.length / 2)))

      secondHalf.push(arr.slice((arr.length / 2) + 1, (arr.length -1)))

    } else {
      firstHalf.push(arr.slice(0, math.round(arr.length / 2)))
      secondHalf.push(arr.slice(math.ceil(arr.length / 2) + 1, (arr.length - 1) ))
    }
  
  firstHalf.map((val) => {
    val / 10
  })

  secondHalf.map((val) => {
    val * 10
  })
}

  return final.push(firstHalf, secondHalf)
}

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  var newStr = ''

  for (var i = 0; i < str.length; i++){
    if(str[i] === 'e'){
      newStr.push(str.splice(str[i], str[i+1], 3))
    } else if (str[i] === 'l'){
      newStr.push(str.splice(str[i], str[i+1], 1))
    } else if (str[i] === 't'){
      newStr.push(str.splice(str[i], str[i+1], 7))
    }
  }
  return newStr
}

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

// function Song (){

// }
function Song(artist, title, year){
  this.artist = artist
  this.title = title
  this.year = year
}

Song.prototype.play() { 
 return "Now playing " + Song.title + " by " + Song.artist + ""
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space


// function Album(){

// }
function Album(artist, title, year){
  this.artist = artist
  this.title = title
  this.year = year
  this.songs = []
};

Album.prototype.addSong(song) {
  return Album.songs.push(song)
}

Album.prototype.tracklist() {
  return "" + this.songs.song + ","
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array

function oddsAndEvens(arr, count={odds: 0, evens: 0}){
  //oddsAndEvens([1, 2, 3, 4, 5])

    for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 !== 0){
        (count.odds)++
      } else {
        (count.evens)++
      }
    }
    return count
}

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
// const palindrome = () => null;

// 'racecar' 1) make a copy of the str. push newStr into reverse, push original string into stack. 

function palindrome(str){
  var stack = []
  var reverse = []

  for(var i = 0; i < str.length; i++){
    stack.push(str[i]) 
  }
  if(reverse.push(stack.pop())){

  }
  if(stack === reverse){
    return true
  } else {
    return false
  }
}


/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method

const anagram = () => null

// function anagram(str1, str2){

//   for (var i = 0; i < str1.length; i++){
//     for(var j = 0; j < str2.length; i++){
//       if (str1[i] === str2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }













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
