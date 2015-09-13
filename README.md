# im.val
Default value assigner for ES5.
If you hate check for provided parameters in functions and methods then check this out.

### Installation
```
npm install im.val --save
```

Install and just use. Check examples below.

### Examples
```js
var val = require('im.val'),
  _ = require('lodash');
  
/***************************************************************************
 *
 * Default options object
 * 
 **************************************************************************/  
var defaultOptions = {setting: 'default value to options'};  

/***************************************************************************
 *
 * Lets create function that will be returning default object if required 
 * parameter is not provided.
 * @param {Object} options
 * 
 **************************************************************************/
function return_default_options_if_is_undefined_param(options) {
  return val(options, defaultOptions);
}

console.log(return_default_options_if_is_undefined_param());
// logs { setting: 'default value to options' }

/***************************************************************************
 *
 * Now lets modify function at the top, to even check if provided 
 * parameter is object and has key that we need.
 * @param {Object} options
 * @param {*} defaults
 * @returns {*}
 * 
 **************************************************************************/
function return_options_only_if_passes_truth_test(options, defaults) {
  return val(options, defaults, function(value) {
    if (_.isObject(value) && _.has(value, 'needThisKey')) return true;
    return false;
  });
}

var options = {anotherKey: 'will fail truth test and defaults will be returned'},

console.log(return_options_only_if_passes_truth_test(options, defaultOptions));
// logs { setting: 'default value to options' }

/***************************************************************************
 *
 * If you will not provide defaults value (second parameter) and in case val 
 * will be invoked with falsy parameter we will return build in notDefined
 * variable.
 * 
 **************************************************************************/
function return_build_in_notDefined(options) {
  return val(options);
}

console.log(return_build_in_notDefined());
// logs $__NULL__$
```
