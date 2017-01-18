/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      count += arr[i]
    }
  }
  return count; 
};

/////
//#2 
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => {
  let count = 0
  for(let i = 0; i < args.length; i++){
    count += args[i]
  }
  return count;
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      newArr.push((arr[i]*arr[i])*10)
    }
  }
  return newArr
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  let obj = {high: -10000000, low: 10000000}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > obj["high"]){
      obj["high"] = arr[i]
    } 
    if(arr[i] < obj["low"]){
      obj["low"] = arr[i]
    }
  }
    return obj; 
}; 

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  return arr.map((val, idx)=>{
    return val * idx
  })
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  return arr.filter((val, idx)=>{
    return typeof val === 'string' && val.length % 2 === 1
  })
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
  let text1 = document.getElementById('text1')
  return text1.innerHTML = 'ManBearPig'
};

/////
//#8 
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => { //[100,100,100,100]
  let final = [] 
  let even;
  let odd; 
  arr.length % 2 === 0 ? even = ((arr.length/2)-1) : odd = ((arr.length-1)/2) 
    for(let i = 0; i < arr.length; i++){
        if(even){
          if(i < even || i === even){
            final.push(arr[i] / 10) 
          } else if(i > even){
            final.push(arr[i] * 10)
          }
        } else if (odd){
          if(i < odd){
            final.push(arr[i] / 10) 
          } else if (i === odd){
            final.push(arr[i])
          } else if (i > odd){
            final.push(arr[i] * 10)
          }
        }

      }
  return final 
}; 

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  let replacedStr = ""
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'e'){
      replacedStr += "3"
    } else if (str[i] === 'l'){
      replacedStr += "1"
    } else if (str[i] === 't'){
      replacedStr += "7"
    } else {
      replacedStr += str[i]
    }
  }
  return replacedStr;
};

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

Song.prototype.play = function(){
  return "Now playing " + this.title + ' by ' + this.artist
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
  this.song = []
};

Album.prototype.addSong = function(song){
  return this.song.push(song)
}

Album.prototype.tracklist = function(){
  let list = ""
  for(let i = 0; i < this.song.length; i++){
    if(i === this.song.length-1){
      list += this.song[i].title
    } else {
      list += this.song[i].title + ", " 
    }
  }
  return list
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  let obj = {odds: 0, evens: 0}
  arr.forEach((val, idx)=>{
    val % 2 === 0 ? obj["evens"]+= 1 : obj["odds"]+= 1 
  })
  return obj
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (arr) => {
  let reverse = []
  for(let i = arr.length-1; i > 0; i--){
    reverse.push(arr[i])
  }
  for(let j = 0; j < arr.length; j++){
    if (arr[j] !== reverse[j]){
      return false
    } else {
      return true 
    }
  }
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  let result;
  let string1 = ""
  let string2 = ""
  if(str1.length !== str2.length){
    return false 
  } else {

  for(var j = 0; j < str1.length; j++){
    if(str1[j] !== ''){
      string1 += str1[j]
    }
  }
  for(var g = 0; g < str2.length; g++){
    if(str2[g] !== ''){
      string2 += str2[g]
    }
  }
    for(let i = 0; i < string1.length; i++){
      for(let k = 0; k < string2.length; k++){
        if(string1[i] == string2[k]){
          result = true 
        } else {
          result = false
        }
      }
    }
  }
  return result
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
