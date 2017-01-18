/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the NUMBERS in the array.
const sumArray = arr => {
  let sum = 0;
  arr.map(value =>{
    if(typeof value === 'number'){
      sum += value
    }
  })
  return sum;
};
sumArray([1,3,4,9])//return 17
sumArray(['cat',1,3,4,'mouse',,9])//return 17
/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
function sumAll(arguments){
  let sum =0;
  sum += arguments
  return sum
}
sumAll([1,2,3,4])//return 10
/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = arr => {
  let results = [];
  arr.map(value =>{
    if(typeof value === 'number'){
      results.push(value * value *10) 
    }
  })
  return results
};
squaredTimesTen([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4])//return [10,40,90,160]

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = arr => {
  let high;
  let low = infinity ;
  let newLow ;
  let result = {'high':0,'low':0};
  for(let i = 0; i < arr.length; i++){
    if(arr[i]< arr[i+1]){
      high = arr[i+1]
      result['high'] = high
    } else {
      newLow = Math.min(low, arr[i])
      result['low'] = newLow
    }
    
  
 }
  return result
}
highLow([1, 2, 3, 4, 5])//return {high: 5, low: 1}
/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = arr => {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i]*i)
  }
  return result
};
indexMap([10, 30, 20, 40, 100])
/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = arr =>{
  let result =[];
  arr.filter(value => {
    if (typeof value === 'string' && value.length % 2 !== 0){
      result.push(value)
    }
  }) 
  return result
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
  document.getElementById('text1').innerHTML('ManBearPig');
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = arr => {
 let newArr = [];
 let left = 0
 let right = arr.length-1
 let middle = left + right/ 2

 for(var i = 0; i< arr.length; i++){
     if(middle > i){
      newArr.push(arr[i] / 10)
    }else if (middle < i){
      arr[i]*10
    }else
      newArr.push(arr[i])
 }
 return newArr;
};
halfsies([50, 40, 33, 6, 12])//return [5, 4, 33, 6, 12]
/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = str => {
  // str.split('')
  let newStr = ''
  for(var i = 0; i< str.length; i++){
    if(str[i] === 'e'){ 
      newStr += (str[i]= 3 )
    } else if(str[i] === 'l'){
       newStr += (str[i]= 1)
    } else if(str[i] === 't'){
       newStr += (str[i]= 7)
    } else {
      newStr += (str[i])
    }
  }
    return newStr 
  };
leet('leet test')// return '1337 73s7'
/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title){
  this.artist = artist,
  this.title = title,
  this.year = 0
};
//create song 
var Baha = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996)

//song plays.. (how to make dynamic)
Song.prototype.play = (str) => {
  return str
}

//call on song to play..
Baha.play('Now playing Who Let The Dogs Out? by The Baha Men')


/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title){
  this.artist = artist,
  this.title =title,
  this.year = 0,
  this.song = []
};
//put song in array 
Album.prototype.addSong = (newSong) =>{
  return this.song.push(newSong)
}

Album.prototype.tracklist = () => {
  let singleStr = '';
  for(var i = 0 ; i < this.song.length; i++){
    singleStr += song[i]
  }
  return singleStr
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = arr => {
  let hash = {'odds':0,"evens":0};
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      hash['evens'] +=1
    } else if(arr[i] % 2 !== 0){
      hash['odds'] += 1
    }
  }
  return hash
};
oddsAndEvens([1, 2, 3, 4, 5])
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
const anagram = (str1,str2) => {
  let hash = {};
  if(str1.length !== str2.length){
    return false;
  }
  for(var i = 0; i< str1.length; i++){
    if(!hash[str1]){
      hash[str1]=1
    }else{
      hash[str1] +=1
    }
  }  

  for(var j = 0; j< str2.length; j++){
    if(!hash[str2]){
      hash[str2]=1
    }else{
      hash[str2] +=1
    }
  }

  for(var key in hash){
    if(Object.values(key) % 2 !== 0){
      return false;
    } else {
      return true
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
