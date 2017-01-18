/////
//Solve each of the following problems. Replace each empty function with your correct solution.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.

function sumArray(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'number'){
      total += arr[i];
    }
  }
  return total;
}
// const sumArray = (arr) => (
//   var total = 0;
//   for(var i = 0;i < arr.length; i++){
//     if(typeof arr[i] == 'number'){
//       total += arr[i];
//     }
//     return total;
//   }
// );

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers

function sumAll(){
  var total2 = 0;
  for(var i = 0; i < arguments.length; i++){
    total2 += arguments[i];
  }
  return total2
}
// const sumAll = () => null ;

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
// const squaredTimesTen = () => null;

function squaredTimesTen(arr){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'number'){
      output.push((arr[i] * arr[i]) * 10)
    }
  }
  return output;
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
// const highLow = () => null;
function highLow(arr){
  var output = {};
  output['high'] = Math.max(...arr)
  output['low'] = Math.min(...arr)
  return output;
}

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
// const indexMap = () => null;
function indexMap(arr){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    output.push(arr[i] * i)
  }
  return output;
}

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
// const oddNumStrs = () => null;
function oddNumStrs(arr){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      if(arr[i].length % 2 == 1){
        output.push(arr[i])
      }
    }
  }
  return output
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

// const changeBearPig = () => null;
function changeBearPig(){
  getElementById('text1').innerHTML = 'ManBearPig'
}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
// const halfsies = () => null;
function halfsies(arr){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(i < ((arr.length - 1)/ 2)){
      output.push(arr[i] / 10)
    }
    else if(i == Math.floor((arr.length - 1) / 2)){
      output.push(arr[i]);
    }
    else {
      output.push(arr[i] * 10)
    }
  }
  return output
}

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
function leet(str){
  var output = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] == "e"){
      output += "3";
    }
    else if(str[i] == "l"){
      output += "1"
    }
    else if(str[i] == 't'){
      output += '7'
    }
    else {
      output += str[i]
    }
  }
  return output
}

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
this.artist = artist
this.title = title
this.year = year
};

// Song.prototype.play =

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(){

};

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
// const oddsAndEvens = () => null;

function oddsAndEvens(arr){
  var output = {odds: 0, evens: 0};
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      output['evens'] += 1;
    }
    else{
      output['odds'] += 1;
    }
  }
  return output;
}

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
// const palindrome = () => null;
function palindrome(str){
  var backwards = 0
  for(var i = 0; i < str.length; i++){
    backwards++
    if(str[i] !== str[str.length - backwards]){
      return false
    }
  }
  return true
}

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
// const anagram = () => null;

function anagram(str1, str2){
  var check = {}
  for(var i = 0; i < str1.length; i++){
    if(!check[str1[i]]){
      check[str1[i]] = 1
    }
    console.log(check)
  }
  for(var i = 0; i < str2.length; i++){
    if(!check[str2[i]]){
      return false
    }
    return true
  }
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
