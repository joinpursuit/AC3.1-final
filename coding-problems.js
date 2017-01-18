/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
function sumArray (arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i]
    }
  }
  return total
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
function sumAll (...args) {
 var total = 0
 for (var i = 0; i < args.length; i++){
  total += args[i]
 }
 return total
}

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
function squaredTimesTen (arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      newArray.push((arr[i] * arr[i]) * 10)
    }
  }
  return newArray
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
function highLow (arr) {
  var highestAndLowest = {high: 0, low: 0};
  var highest = 0;
  var lowest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      highestAndLowest.high = arr[i]
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
      highestAndLowest.low = arr[i]
    }
  }

  return highestAndLowest
}

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
function indexMap (arr) {
  newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * i)
  }
  return newArray
}

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
function oddNumStrs (arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string' && arr[i].length % 2 === 1) {
      newArray.push(arr[i]);
    }
  }
  return newArray
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

function changeBearPig () {
  document.getElementById("text1").innerHTML("ManBearPig")
}


/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
function halfsies (arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (i < (arr.length-1)/2) {
      newArray.push(arr[i]/10)
    } else if (i > (arr.length-1)/2) {
      newArray.push(arr[i]*10)
    } else {
      newArray.push(arr[i])
    }
  }
  return newArray
}

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
function leet (str) {
  var oldString = str.split("");
  var newString = []
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'e') {
      newString.push('3')
    } else if (str[i] === 'l') {
      newString.push('1')
    } else if (str[i] === 't') {
      newString.push('7')
    } else {
      newString.push(str[i]);
    }
  }
  return newString.join("")
}

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song (artist, title, year) {
  this.artist = artist;
  this.title = title;
  this.year = year;
}

Song.prototype.play = function () {
  return "Now playing " + this.title + " by " + this.artist
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album (artist, title, year, songs) {
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = [];
}

Album.prototype.addSong = function (song) {
  this.songs.push(song)
}

Album.prototype.tracklist = function () {
 return this.songs[0]
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
function oddsAndEvens (arr) {
  var counter = {odds: 0, evens: 0};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      counter.evens ++
    } else {
      counter.odds ++
    }
  }
  return counter
}

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
function palindrome (str) {
  var newString = []
  for (var i = str.length-1; i >= 0; i--) {
    newString.push(str[i])
  }

  if (newString.join("") === str) {
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
function anagram (str1, str2) {

}













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
