/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-request
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var request = require('request-promise')
/**
 *
 * @module index
 */

exports.options = {
  defaultBaseUrl: false
}

exports.metadata = {
  frameworkVersion: 6,
  name: 'Request',
  type: 'service',
  param: 'Request'
}

exports.plugin = {
  load: function() {
    return buildRequest
  }
}


function buildRequest(optionsArg){
  if(optionsArg){
    return request.defaults(optionsArg)
  }
  return request
}
