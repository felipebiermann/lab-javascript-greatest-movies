// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
const movies = require("./data.js")





//Precisamos obter a matriz de todos os diretores. Como este é um aquecimento, 
//daremos uma dica: você precisa mapear a matriz de filmes e reunir todos os 
//diretores em uma matriz como resultado final. Vá em frente e crie uma função chamada 
//getAllDirectors()que recebe um array de filmes como argumento e retorna um novo ( mapped array).
// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirec = arr.map((currentElement) => {
        return currentElement.director;
      })
      return allDirec;
}












// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const steveMovies = moviesArr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
   return steveMovies.length;
    }
  















// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrScore) {

 let mediaScore = 0;
 let count = 0;
if(arrScore.length === 0){
return 0;
}

const ratedMovies = arrScore.filter((currentMovie) => {
  return currentMovie.score > 0 || currentMovie.score !== undefined || currentMovie.score !== null;
});

const scoreMov = ratedMovies.map((currentElement) => {
console.log("esse aqui é o score ->" + currentElement.score)

  mediaScore = mediaScore + currentElement.score;
  count++;

})
let mediaTotal = mediaScore / count
let mediaTotalToFixed = mediaTotal.toFixed(2);
mediaTotal = parseFloat(mediaTotalToFixed);


console.log(typeof(mediaTotal))
return mediaTotal



}
scoresAverage(movies)














// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
