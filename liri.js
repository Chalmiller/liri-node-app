var arg1 = process.argv[2];
var arg2 = process.argv[3];

function twitterSearch(){
	var Twitter = require('twitter');

	var client = new Twitter({
	  consumer_key: '4d6izwcX1rP9RBWQWRk713mbS',
	  consumer_secret: '6yFmibWe82txM2djbTTjMyW6UDbSXw8LENoELDwU8zQHmhviKs',
	  access_token_key: '867434367328460800-EdiculKn3epDP0yaTrAmbt9JBMhILHh',
	  access_token_secret: 'JQaBNuwvmga3WC8zu3k38AZWviN9cNg8ygoWN2qPYz4rI',
	});

	var params = {screen_name: 'DonaldTrumpTin1', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	  		for (var i=0; i<tweets.length; i++){
	  			console.log(tweets[i].created_at, tweets[i].text);
	  		}
	  	}
	});
}
function spotifySearch(arg2){
	var Spotify = require('node-spotify-api');

	var spotify = new Spotify({
	  	id: 'ccf265d5aaf3497aad579a4a5f514cc2',
	  	secret: '3d6d830165984c8898468f011d1e1a73'
	});
	if (arg2 === undefined){
		spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
	  	if (err) {
	    	return console.log('Error occurred: ' + err);
	  	}
		console.log(data.tracks.items[0].artists[0].name);
		console.log(data.tracks.items[0].name);
		console.log(data.tracks.items[0].preview_url);
		console.log(data.tracks.items[0].album.name);
		});
	}
	else{
		spotify.search({ type: 'track', query: '' + arg2 }, function(err, data) {
	  	if (err) {
	    	return console.log('Error occurred: ' + err);
	  	}
		console.log(data.tracks.items[0].artists[0].name);
		console.log(data.tracks.items[0].name);
		console.log(data.tracks.items[0].preview_url);
		console.log(data.tracks.items[0].album.name);
		});
	}
}
function movieSearch(arg2){
	var request = require('request');
	var title = arg2
	if (arg2 === undefined){
		title = "Mr. Nobody"
		request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
	  	// console.log('error:', error); // Print the error if one occurred
	  	// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  // Print the HTML for the Google homepage.
	  	console.log(body);
		});
	}
	else{
		request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
	  	// console.log('error:', error); // Print the error if one occurred
	  	// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  // Print the HTML for the Google homepage.
	  	console.log(body);
		});
	}
}
function textSearch(){
	var fs = require('fs');

	fs.readFile("random.txt", "utf8", function(error, data) {
	  	// If the code experiences any errors it will log the error to the console.
	  	if (error) {
	   		return console.log(error);
	  	}
	  	var dataArr = data.split(",");
	  	var arg1 = dataArr[0];
		var arg2 = dataArr[1];
		if (arg1 === 'my-tweets'){
			twitterSearch();
		}
		if (arg1 === 'spotify-this-song'){
			spotifySearch(arg2);
		}
		if (arg1 === 'movie-this'){
			movieSearch(arg2);
		}
	});
}

if (arg1 === 'my-tweets'){
	twitterSearch();
}
else if (arg1 === 'spotify-this-song'){
	spotifySearch(arg2);
}
else if (arg1 === 'movie-this'){
	movieSearch(arg2);
}
else if (arg1 === 'do-what-it-says'){
	textSearch();
}


