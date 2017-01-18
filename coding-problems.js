/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////
/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  let total = 0
  arr.map((a)=>{
    if(typeof a=='number'){
      total+=a
    }
  })
  return total
};
/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (num) => {
    total=0
  for(let i =0;i<arguments.length;i++){
    total+=num
  }
  return total
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  let total=[]
  arr.map((a)=>{
    if(typeof a ==='number'){
      total.push(((Math.pow(a,2))*10))
    }
  })
  return total
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  let obj = {}
  let high = arr[0]
  let low = arr[0]
  arr.map((a)=>{
    if(a>high){
      high=a
    }
    if(a<low){
      low=a
    }
  })
  obj['high']=high
  obj['low']=low
  return obj
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  let result=[]
  arr.map((a,index)=>{
    result.push(a*index)
  })
  return result
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  let result = []
  arr.map((a)=>{
    if((typeof a =='string') && (a.length%2!=0)){
      result.push(a)
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

const changeBearPig = (word) => {
  document.getElementById('text1').innerHTML(word)
};

//test case: changeBearPig('ManBearPig')

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  let result1=[], result2=[], center
  if(arr.length%2===0){
    for(let i =0;i<(arr.length/2);i++){
      result1.push(arr[i]/10)
      result2.push(arr[((arr.length/2)+i)]*10)
    }
    return result1.concat(result2)
  }else{
    // let center = Math.floor((arr.length/2)) this was correct
    let center = Math.floor((arr.length/2)-1)
    for(let i = 0;(i<Math.floor(arr.length/2));i++){
      result1.push(arr[i]/10)
      result2.push(arr[(Math.ceil((arr.length/2))+i)]*10)
    }
  return result1.concat(center).concat(result2)
  }
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  let result = []
  for(let i =0;i<str.length;i++){
    if(str[i]=='e'){
      result.push('3')
    }
    else if(str[i]=='l'){
      result.push('1')
    }
    else if(str[i]=='t'){
      result.push('7')
    }else{
      result.push(str[i])
    }
  }
  return result.join('')
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title,year){
  this.artist=artist,
  this.title=title,
  this.year=year
};

Song.prototype.play=function(){
  return 'Now playing '+this.title+ ' by ' + this.artist
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year,songs){
  this.artist=artist,
  this.title=title,
  this.year=year,
  this.songs=[]
};


Album.prototype.addSong=function(artist,title,year){
  this.songs.push(new Song(artist,title,year))
};

Album.prototype.tracklist=function(){
  console.log(this.songs)
  return this.songs.map((a)=>{return a.title})

};

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  let obj = {odds:0,evens:0}
  for(let i = 0;i<arr.length;i++){
    arr[i]%2===0?obj['evens']++:obj['odds']++
  }
  return obj
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method

const palindrome = (str) => {
  if(!str || str.length===1){
    return true
  }else if(str[0]!=str[str.length-1]){
    return false
  }else{
    return palindrome(str.slice(1).slice(str.length-1,str.length))
  }
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1,str2) => {
  if((str1.length==str2.length) || (str1.length>str2.length)){
    for(let i = 0;i<str1.length;i++){
      for(let j=0;j<str2.length;i++){
        if(str1[i]==str2[j]){
          str1.slice(i)
          str2.slice(j)
        }else{
          return false
        }
      }
    }
  }else{
    for(let i = 0;i<str2.length;i++){
       for(let j=0;j<str1.length;i++){
         if(str2[i]==str1[j]){
          str2.slice(i)
          str1.slice(j)
        }else{
          return false
        }
      }
    }
  }
  return true
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
