/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (array) => {
  console.log('PLEASE WORK', array)
  var sum =0;
  for (var i = 0; i<array.length; i++) {
    if(array[i]){
      sum += array[i]
    }
  }
  console.log('LLLLLL', sum)
  return sum
}




/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (arguments) => {
  var sum =0;
  for (var i = 0; i<arguments.length; i++) {
    if(arguments[i]){
      sum += arguments[i]
    }
  }
  console.log('QQQQ2 sum = ', sum)
  return sum
}


/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers 
//ex:var test1 = squaredTimesTen([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4])
const squaredTimesTen = (array) => {
  console.log('QQ3 INPUT = ', array)
  var temp = 0
  var obj = [];
  for (var i = 0; i<array.length; i++) {
    if(array[i]){
      temp = (array[i] * array[i])*10
      obj.push(temp)
    }
  }
  console.log('QQ3 resultQ3 =', obj)
  return obj
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
//var test1 = highLow([1, 2, 3, 4, 5])
const highLow = (array) => {
  console.log('QQ4 INPUT = ', array)
  var obj = {high:null, low:null};
  array.sort()
  obj.low(array[1])
  obj.high(array[array.length-1])

  console.log('QQ4 resultQ4 =', obj)
  return obj
}


/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
//var test1 = indexMap([10, 30, 20, 40, 100]);
// const indexMap = (array) => {
//   console.log('QQ5 INPUT = ', array)
//   let newArr = [];
//   let temp = 0;

//   for (var i = 0; i<array.length; i++) {
//     temp = (array[i] * array.length-1
//     newArr.push(temp)
//   }
//   console.log('QQ5 resultQ5 =', newArr)
//   return newArr
// }

const indexMap = (array) => {
  console.log('QQ5 INPUT = ', array)
  return array.reduce((array, val,index)=>{
    return val * index
      return array
  })
}


/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
//var test1 = oddNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]); expect(test1).eql(['hey', 'hello']);

const oddNumStrs = (array) => {
  console.log('QQ6 INPUT = ', array)
  var newArr = [];
  for (var i = 0; i<array.length; i++) {
    if(array[i] === 'string'){
      newArr.push(array[i])
    }
  }
  console.log('QQ6 OUTPUT = ', newArr)
  return newArr
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

const changeBearPig = () => {
  // var 
  // console.log('QQ7 INPUT = ', array)
  var newArr = [];
  for (var i = 0; i<array.length; i++) {
    if(array[i] === 'string'){
      newArr.push(array[i])
    }
  }
  console.log('QQ6 OUTPUT = ', newArr)
  return newArr
}


/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (array) => {
  console.log('QQ8 INPUT = ', array)
  var newArr = [];
  for (var i = 0; i<array.length; i++) {
    if(array[i] < array.length/2){
      array[i] = array[i]/10
      newArr.push(array[i])
    }
    else if(array[i] > array.length/2){
      array[i] = array[i]*10
      newArr.push(array[i])
    }
    else{
      newArr.push(array[i])
    }

  }
  console.log('QQ8 OUTPUT = ', newArr)
  return newArr
}
/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (string) => {
  console.log('QQ9 INPUT = ', string)
  var tepString = string.split('')
  var newString = '';
  for (var i = 0; i<tepString.length; i++) {
    if(tepString[i] === 'e'){
      tepString[i] = '3'
      newString.push(tepString[i])
    }
    else if(tepString[i] === 'l'){
      tepString[i] = '1'
      newString.push(tepString[i])
    }
    else if(tepString[i] === 't'){
      tepString[i] = '7'
      newString.push(tepString[i])
    }
    else{
      newString.push(tepString[i])
    }

  }
  console.log('QQ9 OUTPUT = ', newArr)
  return newArr
}


/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title,year){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play = function(){
  console.log('Now playing ',this.name,' by ', this.artist)
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space

function Album(artist, title,year,[]){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.addSong = function({song}){
  this.Album[{song}]
}

Song.prototype.tracklist = function(){
  console.log(this.title)
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (array) => {}
  
  var obj = {odd: '', even: ''};
  for (var i = 0; i<array.length; i++) {
    if(array[i]%2 === 1){
      if(obj[i[odd]]){
        obj[i[odd]]++
      }
      else {
        obj[i[odd]] ===1
      }
      
      newString.push(tepString[i])
    }

    else if(array[i]%2 === 0){
      if(obj[i[odd]]){
        obj[i[odd]]++
      }
      else {
        obj[i[odd]] ===1
      }
      
  return newArr
}

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
