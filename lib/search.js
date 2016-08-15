let uri = "https://api.spotify.com/v1/search?q=query&type=querytype";
let request = require('request');

module.exports = function(query, type) {
	let qeuryURI = uri.replace('query', query);
	let searchURI = qeuryURI.replace('querytype', type);

	request(searchURI, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Show the HTML for the Google homepage. 
	  }
	})
}