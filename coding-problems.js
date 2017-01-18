
/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
// const sumArray = () => null;

const sumArray =(array)=>{
  var sum = 0;
  for(var i = 0 ; i < array.length; i++){
    if(typeof array[i] === "number"){
      sum += array[i];
    }
  }
  return sum;
}
  
/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
// 
// const sumAll = () => null;

const sumAll = (num)=>{
  var sum = 0;
  for(var i = 0; i < nums.length ; i++){
    sum += nums[i]
  }
  return sum;
}

/////
//#3

// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
// const squaredTimesTen = () => null;

const squaredTimesTen = (array)=>{
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] === "number"){
     newArray.push((array[i] * array[i]) * 10 );
    }
  }
  return newArray;
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
// const highLow = () => null;

// var obj = {high: 0, low: 0}

const highLow = (array)=>{
  // for(var i = 0; i < array.length; i++){
  //   if(array[i] > array[i + 1]){
  //     obj.high = array[i]
  //   }
  //   else if(array[i] < 0 || array[i] < array[i + 1]){
  //     obj.low = array[i]
  //   }
  //   else{
  //     console.log('error')
  //   }
  // }
  // return obj;
}

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
// const indexMap = () => null;
const indexMap =(array)=>{
  var newArr = [];
  for(var i = 0; i < array.length; i++){
      newArr.push(array[i] * i)
  }
  return newArr;
}

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
// const oddNumStrs = () => null;

const oddNumStrs =(array)=>{
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] === "string"){
      newArray.push(array[i]);
      console.log(newArray, 'ARR')
    }
    else{
      'Evens are still here'
    }
  }
  return newArray;
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

const changeBearPig = () => {}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
// const halfsies = () => null;

const halfsies = (array) => {

}

  


/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
// const leet = () => null;

const leet = (string) => {
  var newStr = string.split("");
  for(var i = 0; i < newStr.length; i++){
    if(newStr[i] === 'e'){
      newStr[i] = 3
    }
    else if(newStr[i] === 'l'){
      newStr[i] = 1
    }
    else if(newStr[i] === 't'){
      newStr[i] = 7
    }
    else{
      console.log('no string needed to be replaced');
    }
  }
  return newStr.join("");
}

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title,year){
  this.artist = artist;
  this.title = title;
  this.year = year;
}

Song.prototype.play = function(){
  return 'Now playing ' + this.title + ' by ' + this.artist 
}


/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.array = [];
};

Album.prototype.addSong = function(Song){
  this.array.push(Song);
}

Album.prototype.tracklist = function(){
  return this.array[0].title + ',' + ' ' +  this.array[1].title + ',' + ' ' + this.array[2].title
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
// const oddsAndEvens = () => null;

var obj = {odds:0, evens: 0};

const oddsAndEvens = (array)=>{
  for(var i = 0; i < array.length ; i++){
    if(array[i] % 2 === 0){
     obj['evens'] += 1;
    }
    else if(array[i] % 2 === 1){
      obj['odds'] += 1;
    }
    else{
      'do nothing';
    }
  }
  return obj;
}


/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
// const palindrome = () => null;


const palindrome = (string)=>{
  var newStr = string.split("");
  for(var i = 0; i < newStr.length; i++){
    for(var j = 0; j < i; j++){
       if(newStr[i] !== newStr[j]){
        return true
       }
        return false;
    }
  }
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
