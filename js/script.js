// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Wave",
	"artist":"Justin Timberlake",
	"mp3-url":"https://open.spotify.com/track/1a8051h021Rfl01OhAjjV6",
	"image-url":"css/motw.png",
};

var myPlayList = [
	{
		"title":"Wave",
		"artist":"Justin Timberlake",
		"mp3-url":"https://open.spotify.com/track/1a8051h021Rfl01OhAjjV6",
		"image-url":"css/motw.png",
	},
	{
		"title":"Perm",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/1I6pKIyaBp4OebTGLJpCCC",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"After the Storm (ft. Tyler the Creator & Bootsy Collins)",
		"artist":"Kali Uchis",
		"mp3-url":"https://open.spotify.com/track/1gmarFWgSwb4SWlmqDjWka",
		"image-url":"css/ats.jpeg",
	},
	{
		
		"title":"Honey",
		"artist":"Kehlani",
		"mp3-url":"https://open.spotify.com/track/5QTdOvIF2ehBMZpSIIGzIo",
		"image-url":"css/honey.jpg",
	}

];
	
	var WaveArtist = myPlayList[0].artist;
	var WaveUrl = myPlayList[0].mp3-url;
	var WaveImg = myPlayList[0].image-url;




/* global*/
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	var WaveTitle = myPlayList[0].title;
	$("body").append("<h3>"+ WaveTitle +"</h3>");
	$("body").append("<p>"+myPlayList[0].artist+"</p>");
	$("body").append("<p>"+myPlayList[0].artist+"</p>");
console.log(WaveTitle);
 
});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
