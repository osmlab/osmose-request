[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/GuillaumeAmat/osmose-request.svg)](https://github.com/GuillaumeAmat/osmose-request/releases)
[![Build Status](https://api.travis-ci.org/GuillaumeAmat/osmose-request.svg?branch=develop)](http://travis-ci.org/GuillaumeAmat/osmose-request)
[![Coverage Status](https://coveralls.io/repos/github/GuillaumeAmat/osmose-request/badge.svg?branch=develop)](https://coveralls.io/github/GuillaumeAmat/osmose-request?branch=develop)

# Osmose Request

Request the [Osmose](http://wiki.openstreetmap.org/wiki/Osmose) API


**This project is heavy development phase, don't use it in production until the first 1.0.0 stable version.**


## Usage

``` javascript
import OsmoseRequest from './src';

const osmose = new OsmoseRequest();

osmose.fetchErrors({ item: 8120 })
  .then(result => console.log(result));
```

### Options

``` javascript
const osmose = new OsmoseRequest({
  language: 'fr',
  endpoint: 'https://...',
});
```

#### language

The Osmose API returns translated informations. That option lets you specify a language tag to be sent to the API in the Accept-Language HTTP header.

[Read more informations about the format.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)


#### endpoint

The [main Osmose instance](https://osmose.openstreetmap.fr) is used by default but you can specify your own.


### Methods

#### fetchErrors

Returns an errors list, you can provide some options to filter the result.

[Read more about the available options.](http://wiki.openstreetmap.org/wiki/Osmose/api/0.2#Settings)

``` javascript
osmose.fetchErrors({ item: 8120, status: 'open' })
  .then(result => console.log(result));
```


#### fetchError

Returns the informations about a specific error.

``` javascript
// With 123456 as an error ID
osmose.fetchError(123456)
  .then(result => console.log(result));
```


#### fetchSupportedCountries

Returns the list of the supported countries in the Osmose instance.

``` javascript
osmose.fetchSupportedCountries()
  .then(result => console.log(result));
```


#### fetchItemCategories

Return the list of the item categories with some details.

``` javascript
osmose.fetchItemCategories()
  .then(result => console.log(result));
```


#### fetchItems

Returns the list of the items configured in the Osmose instance and their translated name.

You can filter the returned translations to one language by specifying a two letters locale (eg: fr, en, ru).

``` javascript
// Without language filter
osmose.fetchItems()
  .then(result => console.log(result));
```

``` javascript
// With a language filter
osmose.fetchItems('fr')
  .then(result => console.log(result));
```


## Contribute

```
$ git clone git@github.com:GuillaumeAmat/osmose-request.git
$ cd osmose-request
$ npm install
$ npm run watch
```
