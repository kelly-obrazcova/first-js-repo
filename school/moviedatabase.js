//Udemy Movie Database Exercise


var recentMarvelMovies = [

{	name: "Deadpool 2", 
	tomatometer: 82, 
	watched: false
	},

{	name: "Avengers: Infinity War",
	tomatometer: 83, 
	watched: true
	},

{	name: "Black Panther", 
	tomatometer: 97, 
	watched: true
	},

{	name: "Thor: Ragnarok", 
	tomatometer: 92, 
	watched: true
	},

];


function hasWatched(recentMarvelMovies) {
	recentMarvelMovies.forEach(function(element){
		if (element.watched === false) {var notWatched = "not ";}
			else {var notWatched = "";};

		console.log("You have " + notWatched + "watched \"" + element.name + "\" - " + 
			element.tomatometer + " Tomatometer Score")	});
}



/* 
console input:
hasWatched(recentMarvelMovies);

console output:
You have not watched "Deadpool 2" - 82 Tomatometer Score
You have watched "Avengers: Infinity War" - 83 Tomatometer Score
You have watched "Black Panther" - 97 Tomatometer Score
You have watched "Thor: Ragnarok" - 92 Tomatometer Score
*/

/*

official solution saves string as a varable and then console logs the variable nore like this
function buildString(movie)
		var result = "You have " + notWatched + "watched " + movie.name + " - " + 
			movie.tomatometer + " Tomatometer Score")	}
			return result;

official solution also handles the forEach loop differently:

recentMarvelMoves.forEach(movie) {
	console.log(buildString(movie));
}
*/

/*
+ if(false) {"not "} 
*/