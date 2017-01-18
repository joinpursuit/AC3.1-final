/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = arr => arr.reduce( (sum, cur) => sum += (typeof cur === "number") ? cur : 0 );

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = nums => [...nums].reduce( (sum, cur) => sum += cur ) ;

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = arr => arr.filter( ele => {
    if (typeof ele === "number") return ele*ele*10
  }
);

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = arr => {
  let obj = {};
  obj["high"] = Math.max(...arr);
  obj["low"] = Math.min(...arr);
  return obj;
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = arr => arr.map( (ele, idx) => ele * idx);

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = arr => arr.filter( ele => (typeof ele === "string") && (ele.length % 2 === 1) ? ele : null);

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

const changeBearPig = () => document.getElementById(text1).innerHTML("ManBearPig");
// textContent may work as well ?
// const changeBearPig = () => document.getElementById(text1).textContent("ManBearPig");

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = arr => {

  let midIndex = Math.floor( arr.length/2 );
  
  if (arr.length % 2 === 1) { // odd length
    // arr.map( (num, idx) => idx < midIndex ? num/10 : idx > midIndex ? num*10 : null )
    return arr.map( (num, idx) => {
      if( idx < midIndex ) return num/10;
      else { if (idx > midIndex ) return num*10 }
    })
  } 

  else {
    if (arr.length % 2 === 0) { // even length
      return arr.map( (num, idx) => {
        if( idx < midIndex ) return num/10;
        else { if (idx >= midIndex ) return num*10 }
      })
    }
  }

};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = str => {
  return str.split("").map( char => {
    let charLower = char.toLowerCase();
    switch(charLower) {
      case "e": return "3"; break;
      case "l": return "1"; break;
      case "t": return "7"; break;
      default: return char;
    }
  }).join("")
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song( artist, title, year ){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play = function() {
  return "Now playing " + this.title + " by " + this.artist;  
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
  this.tracks = [];
};

Album.prototype.addSong = function(song) {
  this.tracks.push(song);
}

Album.prototype.tracklist = function() {
  return this.tracks.join(", ") 
  // + this.tracks[this.tracks.length-1] ? 
}



/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = arr => {
  let obj = {odds: 0, evens: 0}
  arr.forEach( num => num % 2 === 0 ? obj.evens++ : obj.odds++ )
  return obj;
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = () => null;

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  let obj1 = {};
  let obj2 = {};

  str1.split().
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
