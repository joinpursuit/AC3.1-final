/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => arr.reduce((total, val) => {
  return typeof val === 'number' ? total + val : total
}, 0);

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => args.reduce((total, val) => {
  return total + val;
});

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => arr.reduce((total, val) => {
  return typeof val === 'number' ? total.concat([val * val * 10]) : total
}, []);

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  let high = -Infinity
  let low = Infinity

  arr.forEach((val) => {
    if(val > high) high = val;
    if(val < low) low = val;
  })

  return { high, low }
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => arr.map((val, indx) => val * indx);

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => arr.filter(val => (typeof val === 'string' && val.length % 2 !== 0));

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
  document.getElementById('text1').innerHTML = 'ManBearPig';
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  let isOdd = arr.length % 2 !== 0;
  let middle = Math.floor((arr.length - 1) / 2);

  return arr.map((val, indx) => {
    if(indx < middle){
      return val / 10;
    } else if(indx > middle){
      return val * 10;
    } else {
      return isOdd ? val : (val / 10)
    }
  })
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  let change = {e: 3, l: 1, t: 7};
  let newStr = '';

  for(let i = 0; i < str.length; i++){
    let letter = str[i];

    if(change[letter]){
      newStr += change[letter];
    } else {
      newStr += letter;
    }
  }

  return newStr;
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

Song.prototype.play = function(){
  return 'Now playing ' + this.title + ' by ' + this.artist;
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
  this.songs = [];
};

Album.prototype.addSong = function(song){
  this.songs.push(song);
}

Album.prototype.tracklist = function(){
  return this.songs.reduce((tracklist, val, indx) => {
    return indx === 0 ? (tracklist + val.title) : (tracklist + ', ' + val.title)
  }, '')
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => arr.reduce((count, val) => {
  if(val % 2 === 0) count['evens']++
  else count['odds']++

  return count;
}, {odds: 0, evens: 0});

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  let lastIndx = str.length - 1;

  for(let i = lastIndx; i >= 0; i--){
    if(str[i] !== str[lastIndx - i]) return false;
  }

  return true;
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  let tracker = {};
  let longest = str1.length > str2.length ? str1.length : str2.length

  for(let i = 0; i < longest; i++){
    let letter1 = str1[i];
    let letter2 = str2[i];

    if(typeof letter1 === 'string' && letter1 !== ' ') {
      tracker[letter1] = (typeof tracker[letter1] === 'number') ? tracker[letter1] + 1 : 1
    }

    if(typeof letter2 === 'string' && letter2 !== ' ') {
      tracker[letter2] = (typeof tracker[letter2] === 'number') ? tracker[letter2] - 1 : -1
    }

  }


  for(let letter in tracker){
    if(tracker[letter] !== 0) return false;
  }

  return true;
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
