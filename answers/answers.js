const sumArray = (arr) => arr.filter(val => typeof val === 'number').reduce((val1, val2) => val1 + val2);
const sumAll = (...arr) => arr.filter(val => typeof val === 'number').reduce((val1, val2) => val1 + val2);

// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => arr.filter(val => typeof val === 'number').map((num) => (num * num) * 10);

//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => arr.reduce((obj, num) => {
  if(num > obj.high) obj.high = num;
  if(num < obj.low) obj.low = num;
  return obj;
}, {high: -Infinity, low: Infinity});

//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => arr.map((num, indx) => num * indx);

//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => arr.filter(str => str.length % 2 === 1);

//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => arr.map((num, indx) => {
  if(arr.length % 2 === 0)
  if(indx + 1 < arr.length / 2) return num / 10;
  if(indx + 1 > arr.length / 2) return num * 10;
  else return num;
});

//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => str.split('').map(letter => {
  if(letter === 'e') return 3;
  else if(letter === 'l') return 1;
  else if(letter === 't') return 7;
  else return letter;
}).join('');

//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => arr.reduce((count, num) => {
  if(num % 2 === 0) count.evens++;
  else if(num % 2 === 1) count.odds++;
  return count;
}, {odds: 0, evens: 0});

//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => str === str.split('').reverse().join('');

//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title){
  this.title = title;
  this.artist = artist;
};

Song.prototype.play = function() {
  return `Now playing ${this.title} by ${this.artist}`
};

//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.songs = [];
};

Album.prototype.addSong = function(song) {
  this.songs.push(song);
};

Album.prototype.tracklist = function() {
  return this.songs.reduce((str, song) => {
    return str.length > 0 ? str + ', ' + song.title : str + song.title;
  }, '');
}


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
