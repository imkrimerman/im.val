'use strict'
var _ = require('lodash');
/***************************************************************************
 *
 * Default value assigner
 *
 **************************************************************************/
/**
 * Returns value if not undefined or null,
 * otherwise returns defaults or notDefined value
 * @param {*} value
 * @param {*} defaults
 * @param {Function} checker
 * @returns {*}
 */
module.exports = function(value, defaults, checker) {
  // if defaults not specified then assign notDefined ($__NULL__$) value
  defaults = arguments.length > 1 ? defaults : module.exports.notDefined;
  // if value and checker is specified then use it to additionally check value
  if (_.isFunction(checker) && value != null) {
    // if checker returns true then we are good
    if (checker(value)) return value;
    // otherwise return defaults
    return defaults;
  }
  // if value not specified return defaults, otherwise return value;
  return value != null ? value : defaults;
};

/**
 * Value that can represent not defined state.
 * @type {string}
 */
module.exports.notDefined = '$__NULL__$';
