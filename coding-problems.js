/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  return arr.reduce((a,b)=>{
    if(typeof b === "number" && b !== NaN){
      return a+b;
    }else {
      return a;
    }
  }, 0)
};

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...arg) => {
  return arg.reduce((a,b)=>{
    return a+b;
  })
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  return arr.reduce((a,b)=>{
    if(typeof b === "number" && b !== NaN){
      a.push(b);
    }
    return a;
  }, []).map((ele)=>{
    return ele*ele*10;
  })
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  return arr.reduce((obj, b)=>{
    // console.log(b)
    // console.log(obj.high < b)
    // console.log(obj.high > b)
    if(obj.high < b){
      obj.high = b
    }
    if(obj.low > b){
      obj.low = b
    }
    return obj;
  }, {high: -Infinity, low: +Infinity})
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  return arr.map((ele, idx)=>{
    return ele * idx;
  })
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  return arr.reduce((arrr, b)=>{
    if(typeof b === "string" && b.length % 2 === 1){
      arrr.push(b);
    }
    return arrr;
  }, [])
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
  document.getElementById('text1').innerHTML = "ManBearPig";
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  var half = arr.length / 2 - .5
  return arr.map((ele,idx)=>{
    if (idx === half){
      return ele
    }else if(idx < half){
      return ele/10;
    }else if(idx > half){
      return ele*10;
    }
  })
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  return str.split('').map(ele=>{
    if (ele === 'e'){
      return '3';
    }else if(ele === 'l'){
      return '1';
    }else if(ele === 't'){
      return '7';
    }else{
      return ele;
    }
  }).join('');
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
  return 'Now playing ' + this.title + " by "+ this.artist;
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
  this.songs = [];
};

Album.prototype.addSong = function(song){
  this.songs.push(song)
}

Album.prototype.tracklist = function(){
  return this.songs.map((ele)=>{
    return ele.title
  }).join(', ');
}
/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  return arr.reduce((obj, b)=>{
    if(b % 2 === 0){
      obj.evens ++;
    }else{
      obj.odds ++
    }
    return obj
  },{odds: 0, evens: 0})
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  for(var i = 0, k = str.length-1; i < str.length; i++, k --){
    if(i>k){
      return true
    }else if(str[i] !== str[k]){
      return false
    }
  }

};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method

const stringHash = (str)=>{
  return str.split('').reduce((obj, b)=>{
  if(obj[b]){
    obj[b]++
  }else{
    obj[b] = 1
  }
  return obj;
  }, {})
}

const anagram = (str1, str2) => {
  var str1Copy = stringHash(str1);
  var str2Copy = stringHash(str2);
  delete str2Copy[' ']
  for(let key in str1Copy){
    if(str1Copy[key] !== str2Copy[key]){
      return false;
    }
    delete str1Copy[key];
    delete str2Copy[key];
  }
  for(let key in str2Copy){
    if(str2Copy[key]){
      return false;
    }
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
