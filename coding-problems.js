/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => arr.reduce( (sum, val) => {
  typeof val === "number" && !isNaN(val) ? sum += val : null;
  return sum;
}, 0);

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => {
  let sum = 0
  for(let i = 0; i < args.length; i++){
    sum += args[i];
  };
  return sum;
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => arr.reduce( (newArr, val) => {
  if (typeof val === "number" && !isNaN(val)){
    newArr.push( Math.pow(val, 2) * 10 );
  }
  return newArr;
}, []);

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (numArr) => numArr.reduce( (highLow, num) => {
  num > highLow.high ? highLow.high = num : null;
  num < highLow.low ? highLow.low = num : null;
  return highLow;
}, {high: numArr[0], low: numArr[0]});



/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (numArr) => numArr.map( (num, idx) => num * idx );

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (strNumArr) => strNumArr.filter( (val) => typeof val === "string" && val.length % 2 !== 0 );

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
  let dog = document.getElementById('text1');
  dog.innerText = 'ManBearPig';
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (numArr) => numArr.map( (num, idx) => {
  let length = numArr.length
  if (numArr.length % 2 === 0) {
    if (idx + 1 <= length / 2 ){
     return num / 10;
    };
    if (idx + 1 > length / 2){
      return num * 10;
    }
  } else {
    if (idx + 1 < (length + 1) / 2) {
     return num / 10;
    };
    if (idx + 1 > (length + 1) / 2){
      return num * 10;
    }
    if (idx + 1 === (length + 1) / 2) {
      return num;
    } 
  }
});

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => str.split('').map( (letter) => {
  switch(letter){
    case 'e':
      return 3;
    case 'l':
      return 1;
    case 't':
      return 7;
    default:
      return letter;
  };
}).join('');

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

Song.prototype.play = function () {
  return 'Now playing ' + this.title + " by " + this.artist;
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

Album.prototype.addSong = function (Song) {
  this.songs.push(Song);
}

Album.prototype.tracklist = function () {
  return this.songs.reduce( (track, Song, idx, songs) => {
    if (idx === songs.length - 1) return track + Song.title;
    return track + Song.title + ", ";
  }, "");
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (numArr) => numArr.reduce( (hash, num) => {
  num % 2 === 0 ? hash.evens++ : hash.odds++;
  return hash;
}, {odds: 0, evens: 0});

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  };
  return reverse === str ? true : false;
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  let result = true;

  hash1 = str1.split('').reduce( (hash, lett) => {
    hash[lett] ? hash[lett] += 1 : hash[lett] = 1;
    return hash;
  },{});

  hash2 = str2.split('').reduce( (hash, lett) => {
    hash[lett] ? hash[lett] += 1 : hash[lett] = 1;
    return hash;
  },{});

  for (let key in hash1){
    if(hash1[key] !== hash2[key]){
      key !== ' ' ?
      result = false
      :
      null;
    };
  };

  return result;
};













//Ignore this:
//DONT TELL ME WHAT TO DO
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
