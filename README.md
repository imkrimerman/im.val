# im.val
Default value assigner for ES5.
If you hate to check for provided parameters in functions and methods then check this out.

### Installation
```
npm install im.val --save
```

### Usage
Returns value if value is provided, not undefined and not null, otherwise returns defaults.
If defaults is not provided, notDefined ($__NULL__$) value will be returned.
Additionally you can pass function as the 3rd parameter, it should validate value and
return boolean. If function returns true then value will be returned, otherwise defaults.

```js
var val = require('im.val'),
  _ = require('lodash');

// Using default value if options param is not provided
function getOptions (options) {
  return val(options, {});
}
console.log(getOptions());
// Logs {}

// Additional validation
function getOptionsCheck (options) {
  return val(options, {}, _.isObject);
}
console.log(getOptionsCheck('config'));
// Logs {}

function check (param) {
  var msg = 'Defined';
  if (val(param) === val.notDefined) msg = 'Not defined';
  console.log(msg);
}
check();
// Logs Not defined
check(undefined);
// Logs Not defined
check('Param');
// Logs Defined
```
