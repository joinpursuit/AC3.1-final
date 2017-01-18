/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  var sum =0;
  for(var i = 0; i <arr.length; i++){
    if(typeof (arr[i]) === 'number'){
      sum += arr[i]
    }
  }
  return sum;
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers

const sumAll = (...nums) =>{
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
  }
  return sum;
};
///argumnets
/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers

const squaredTimesTen = (arr) => {
  var output =[];
  var num;
  for(var i=0; i<arr.length; i++){
    if(typeof (arr[i]) === 'number'){
      num = (arr[i]*arr[i])*10
      output.push(num)
    }
  }
  return output;
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  var Obj = {};
  var max = Math.max(...arr)
  var min = Math.min(...arr)
  if(!(Obj['high'])){
      Obj['high'] = max
    }
  if(!(Obj['low'])){
      Obj['low'] = min
    }
  return Obj;
  }

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  const output = [];
  for(var i = 0; i<arr.length; i++){
    output.push(arr[i]*i)
  }
  return output;
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
 var output=[];
 for(var i =0; i<arr.length; i++){
  if(typeof(arr[i]) === 'string' && (arr[i].length) % 2 !== 0){
    output.push(arr[i])
  }
 }
 return output;
};

/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':

/*`<html>
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
</html>`*/

// const changeBearPig = () => {
//   #('text1').innerHTML = 'ManBearPig'
// };

//I don't remember this.

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  var newArr = [];
  var firstHalf;
  var secondHalf;
  if(arr.length % 2 === 0){
    firstHalf = arr.splice(0, Math.floor(arr.length/2))
    //console.log('first', firstHalf)
    secondHalf = arr.splice((arr.length/2)-1, arr.length)
    //console.log('second', secondHalf)
    for(var i = 0; i < firstHalf.length; i++){
      newArr.push(firstHalf[i]/10)
    }
    for(var j = 0; j < secondHalf.length; j++){
      newArr.push(secondHalf[j]*10)
    }
  }
  else if(arr.length % 2 !== 0){
    firstHalf = arr.splice(0, (arr.length/2))
    //console.log('first', firstHalf)
    var middle = arr.splice((arr.length/2)-1,1)
    //console.log('middle', middle)
    secondHalf = arr.splice((arr.length/2)-1, arr.length)
    //console.log('second', secondHalf)
    for(var i = 0; i < firstHalf.length; i++){
      newArr.push(firstHalf[i]/10)
    }
    newArr.push(middle[0])
    for(var j = 0; j < secondHalf.length; j++){
      newArr.push(secondHalf[j]*10)
    }
  }
  //console.log(newArr)
  return newArr; 
};

//I probably over complicated this solution. 

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  var arr = [];
  var newStr;
  for(var i=0;i<str.length;i++){
    if(str[i]=== 'e'){
      arr.push(str[i]= 3)
    }
    else if(str[i] === 'l'){
      arr.push(str[i] = 1)
    }
    else if(str[i] === 't'){
      arr.push(str[i] = 7)
    }
    else{
      arr.push(str[i])
    }
  }
  //console.log(arr.join(''))
  newStr = arr.join('')
  return newStr;
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title,year){
  this.artist = artist
  this.title = title
  this.year = year
};

Song.prototype.play = function(){
  return 'Now playing ' + this.title + ' '+ 'by' + ' ' +this.artist
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year){
  this.artist = artist
  this.title = title
  this.year = year
  this.songs = []
};

Album.prototype.addSong = function(song){
  return this.songs.push(song)
}

Album.prototype.tracklist = function(){
  var tracks =[]
  for(var i=0; i < songs.length;i++){
    tracks.push(songs[i].title)
    console.log(tracks)
  }
  console.log(tracks)
  return tracks
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
 var Obj = {odds:0, evens:0};
 for(var i = 0; i < arr.length; i++){
  if((arr[i])% 2 !== 0){
    Obj['odds']+=1
  }
  else if((arr[i])%2 === 0 ){
    Obj['evens']+= 1
  }
 }
 return Obj;
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  //var arr =str.split('')

  // for(var i = str.length; i > 0; i--){
  //   for(var j = 0; j< str.length; j++){
  //     if(str[i] !== str[j]){
  //       return false
  //     }
  //   }
  // }
  // return true
};
//recursively poping into a newStr and comparing origina l string with the second string 

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1,str2) => {
  for(var i = 0; i<str1.length;i++){
    for(var j = 1; j<str2.length; j++){
      if(str1[i] === str[j]){

      }
    }
  }
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
