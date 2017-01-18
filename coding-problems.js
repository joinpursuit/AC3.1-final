/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
// const sumArray = () => null;

function sumArray (arr){
  for(var x = 0;x< arr.length;x++){
   if(typeof(x) === !number){
     arr.slice(x)
   }

  }
  arr.reduce(function(a,b){
    a + b
  })
  return arr
}


/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
// const sumAll = () => null;

// function sumAll (arg) {
//      arg.map(function(a,b)
//       a +b 
//       )
//      return arg
// }

function sumAll (num){
  var output = 0
  for(var x = 0;x < num.legnth;num++){
       output += x
  }
  return output
}


/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
// const squaredTimesTen = () => null;

var squaredTimesTen = function (agr){
  for(var x = 0;x > agr.length; x++){
     if(typeof(x) === string )
      agr.filter(x)
  }

  agr.forEach(function(a,b){
     a * b
    
  }
     )
   return agr
}



/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
// const highLow = () => null;

function highLow (arr){
 var output = {
   high:0,
     low:0
     }
 for(var x =0;x < arr.legnth;x++){
    if(arr[x] > arr[x + 1]){
      output.push(arr[x] = high : arr[x])

    } else {
      output.push(arr[x] = low: arr[x + 1])
    }
 }
   return output
}



/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
// const indexMap = () => null;

function indexMap(arr){
   arr.map(function(a,b){
     arr.indexOf(a) * a
    })
   return arr
}


/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = () => null;

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

const changeBearPig = () => 
   var newWord = document.getElementsByTagName('text1')
   return newWord.setAttribute('changeBearPig')
;

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = () => null;

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
function leet (str) {
  var newWord = str.split('')
   for(var x = 0; x < newWord.length; x++){
      if(x === 'e'){
        newWord.indexof(x) = 3
      } else (x === 'l'){
        newWord.indexof(x) = 7
      }
   }
   return newWord
} 

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song (artist, title, year){
  this.artist = artist,
  this.title =title,
  this.year = year
}


Song.protoType.play(function()){
   return 'Now playing' + this.title + 'by' + this.artist
}
/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album (artist, title, year,song){
  this.artist = artist,
  this.title =title,
  this.year = year,
  this.song = {}
}


Album.protoType.addSong(function(song){
   return this.song.push(song)
})


Album.protoType.tracklist(function(song)){
   this.song.map(function(e){
     return e +', '
   })
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
function oddsAndEvens(arr, oddEven={odds: 0, evens: 0}) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? oddEven.evens += 1 : oddEven.odds += 1
  }
  return oddEven
 }

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
 function palindrome(str) {
 let reversed = "";
   for(let i=str.length-1; i >= 0; i--) {
   newWORD += str[i]
  }
  return newWORD === str;
 }
     
/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = () => null;













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
