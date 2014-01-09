kangular-url
============

tsaikd angular lib for url tools

## Usage
```
angular.module("app", ["kangular-url"])

.controller("MainCtrl", ["resolveURL", function(resolveURL) {
	console.log(resolveURL("relative-path"));
	console.log(resolveURL("relative-path", "http://base.domain/base-path/"));
}]);
```
