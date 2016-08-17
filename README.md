# spotifyr [![Build Status](https://travis-ci.org/rajikaimal/spotifier.svg?branch=master)](https://travis-ci.org/rajikaimal/spotifier)

Retrieve data from spotify public REST API for a search item

> works without authentication

## Install

```
npm install --save spotifyr
```

## Usage

```
const spotifyr = require('spotifyr');
spotifyr('avicii', 'artist', function(error, response) {
	if(error) {
		console.log(error);	
	} else {
		console.log(response);
	}
});
```

## API

### search(query, type)

Returns json data for requested query

#### query

Type: `string`

Query for requesting data

#### type

Type: `string`

Valid types : album, artist, playlist, track

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)