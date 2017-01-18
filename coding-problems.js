/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (array) => {
  let sum = 0;
  array.forEach(element => {
    if (typeof element === 'number')
      sum += element
  })
  return sum
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (argument1,argument2,argument3,argument4,argument5,argument6,argument7,argument8,argument9,argument10,argument11,argument12,argument13,argument14,argument15, argument16) => {
  const array = [argument1,argument2,argument3,argument4,argument5,argument6,argument7,argument8,argument9,argument10,argument11,argument12,argument13,argument14,argument15, argument16]
  
  let sum = 0;
  array.map(element => {
    if(element) sum += element
  })
  return sum
  // var sum = 0
  // Object.keys(arguments).map(element => {
  //   sum += arguments[element]
  // })
  // return sum;
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (array) => {
  return array.filter(element => typeof element === 'number').map(number => (number*number) * 10)
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (array) => {
  const low = Math.min(...array)
  const high = Math.max(...array)
  return {low, high}
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (array) => {
  return array.map((number, index) => number * index)
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (array) => {
  return array.filter(element => typeof element === 'string').filter(string => string.length % 2 === 1)
};

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

const changeBearPig = () => {
  const dog = document.querySelector('#text1');
  dog.innerText = ManBearPig;
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (array) => {
  
  return array.map((number, index) => {
    //if the array is odd and number is in the middle
    if(array.length % 2 === 1 && index === Math.floor(array.length/2)) {
      return number
    } else if (index < Math.floor(array.length/2)){
      return number/ 10
    } else {
      return number * 10
    }
  })
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (string) => {
  return string.split("").map(char => {
    if(char === 'e' || char === 'E'){
      return 3
    } else if (char === 'l' || char === 'L') {
      return 1
    } else if (char === 't' || char === 'T'){
      return 7
    } else {
      return char
    }
  }).join("")
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play= function() {
  return `Now playing ${this.title} by ${this.artist}`
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.song = [];
};

Album.prototype.addSong = function (song) {
  return this.song.push(song)
}

Album.prototype.tracklist = function () {
  //console.log(this.song)
  const songTitles = this.song.map(song => song.title).join(", ")
  return songTitles
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (array) => {
  const obj = {odds: 0, evens: 0}
  return array.reduce((start, element) => {
    if(element % 2 === 0) {
      start.evens += 1
    } else {
      start.odds += 1
    }
    return start
  }, {odds: 0, evens: 0})
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (string) => {
  const reverse = [];
  for(var i = 0; i < string.length; i++){
    reverse.unshift(string[i])
  }
  return reverse.join("") === string
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {

  const bubbleSort = string => { 
    let array = string.split("")
    for(let i = 0; i < array.length; i++){
      for(let j = i; j < array.length; j++){
        if(array[i] > array[j]){
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
    }  
    return array.join("")
  }

  return bubbleSort(str1.split(" ").join("")) === bubbleSort(str2.split(" ").join(""))
};













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
