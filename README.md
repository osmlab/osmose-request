[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/osmlab/osmose-request.svg)](https://github.com/osmlab/osmose-request/releases)
[![Build Status](https://api.travis-ci.org/osmlab/osmose-request.svg?branch=develop)](http://travis-ci.org/osmlab/osmose-request)
[![Coverage Status](https://coveralls.io/repos/github/osmlab/osmose-request/badge.svg?branch=develop)](https://coveralls.io/github/osmlab/osmose-request?branch=develop)

# Osmose Request

Request the [Osmose](http://wiki.openstreetmap.org/wiki/Osmose) API from Javascript, with promises :)


## Installation

```
$ npm install osmose-request
```


## Usage

``` javascript
import OsmoseRequest from 'osmose-request';

const osmose = new OsmoseRequest();

osmose.fetchErrors({ item: 8120 })
  .then(result => console.log(result));
```

In the previous example, the `item` option is one of the many Osmose options available and listed here:
https://wiki.openstreetmap.org/wiki/Osmose/api/0.2#Settings

For now, the value of the options have the same shape as the real API options. It will be more JS friendly in the future.

So for example, if you want to limit the returned results to a specific location, you can add the `bbox` option like that:

``` javascript
import OsmoseRequest from 'osmose-request';

const osmose = new OsmoseRequest();

osmose.fetchErrors({ item: 8120, bbox: '1.123,-0.124,2.767,0.243' })
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


#### closeError

Closes the given error on Osmose server.

``` javascript
// With 123456 as an error ID
osmose.closeError(123456)
  .then(result => console.log(result)); // true if taken into account
```


#### falseError

Sets this error as a false positive on Osmose server.

``` javascript
// With 123456 as an error ID
osmose.falseError(123456)
  .then(result => console.log(result)); // true if taken into account
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

To start contribute on this project, you can retrieve code using the following commands:

```sh
$ git clone git@github.com:osmlab/osmose-request.git
$ cd osmose-request
$ npm install
$ npm run watch
```

This project uses a specific work flow for branches:

* `master` branch is dedicated to releases, managed by repo maintainers
* `develop` branch is for currently developed version, managed by repo maintainers
* `feature/...` branches are for all developers, working on a particular feature

Pull requests are welcome, as the project is fully open-source. If you want to work on new features, please create a branch named `feature/yourFeatureName`. When work is done, open a pull request to merge your branch on `develop` branch. The code will be reviewed by one or several developers before being merged, in order to keep a good code quality.


## Make a release

```sh
$ git checkout develop
$ git pull origin develop
$ npm version patch -m "release: %s"
$ npm publish
$ git checkout master
$ git pull origin master
$ git merge develop
$ git push origin master
```

`npm version` tests the code, builds it and updates the doc. Then it upgrades the package version number according to the used keyword (patch, minor or major) and commits the modifications in Git (with a proper version tag). Finally, it pushes it to repository with the tag.
