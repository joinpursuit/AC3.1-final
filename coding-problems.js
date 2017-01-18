/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  let sum = 0
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i]
    }
  }
  return sum
};

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
function sumAll (arguments) {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments
    }
  }
  return sum
}

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  let output = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      output.push(Math.pow(arr[i],2)*10)
    }
  }
  return output
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  let output = {}

  let newArr = arr.sort(function(a,b){
    return a -b
  })

  output.high = newArr[newArr.length-1]
  output.low = newArr[0]
  return output
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {

  let output = arr.map((cv,i) => {
    return cv * i
  })
  return output
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  let output = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length % 2 === 1) {
      output.push(arr[i])
    }
  }
  return output
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
document.getElementById('text1').innerHTML = 'ManBearPig'
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  // console.log('length',arr.length)
  // let cntr = 0
  // arr.length % 2 === 1 ? cntr = Math.floor(arr.length / 2):null
  // console.log('cntr',cntr)


};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  str = [...str]

  let output = str.map((cv) => {
    return cv === 'e' ? cv = 3 : cv && cv === 'l' ? cv = 1 : cv && cv === 't' ? cv = 7 : cv
  })
return output.join('')
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year) {
  this.artist = artist
  this.title = title
  this.year = year
}
Song.prototype.play = function() {
  return 'Now playing ' + this.title + ' by ' + this.artist
}
/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){
  this.artist = artist
  this.title = title
  this.year = year
  this.songs = []
};

Album.prototype.addSong = function(song) {
  this.songs.push(song)
}

Album.prototype.tracklist = function() {
  this.tracklist = tracklist
}
/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  let output = {}
  let evens = 0
  let odds = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens += 1
    } else {
      odds += 1
    }
  }
  output['evens'] = evens;
  output['odds'] = odds;
  return output
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  for (var i = 0; i < str.length; i++) {
    let index = i + 1
    return str[i] === str[str.length-index] ? true : false
  }
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1,str2) => {
  let output = {}
  let output2 = {}

  for (var i = 0; i < str1.length; i++) {
    let a = str1[i]
    if (output[a]){
      output[a] += 1
    } else {
      output[a] =1
    }
  }

  for (var j = 0; j < str2.length; j++) {
    let b = str2[j]
    if (output2[b]){
      output2[b] += 1
    } else {
      output2[b] =1
    }
  }
return Object.keys(output) == Object.keys(output2) ? true : false
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
