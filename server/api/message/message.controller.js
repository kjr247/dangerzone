'use strict';

var _ = require('lodash');
var unirest = require('unirest');
var Message = require('./message.model');

// Get list of messages
exports.index = function(req, res) {
  Message.find(function (err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, messages);
  });
};

exports.getCrimeData = function(req, res) {
  //https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=3%2F25%2F2015&lat=42.343060293817736&long=-83.0579091956167&startdate=10%2F19%2F2014
  // These code snippets use an open-source library. http://unirest.io/nodejs
  unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=3%2F25%2F2015&lat=42.343060293817736&long=-83.0579091956167&startdate=10%2F19%2F2014")
  .header("X-Mashape-Key", "2s0u3GHkYOmshbY0Vng0tf4N02tMp1qCtQXjsnvszJ70uPDLK3")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    return res.json(200, result.body);
  });    
};

// Get a single message
exports.show = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    return res.json(message);
  });
};

// Creates a new message in the DB.
exports.create = function(req, res) {
  Message.create(req.body, function(err, message) {
    if(err) { return handleError(res, err); }
    return res.json(201, message);
  });
};

// Updates an existing message in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Message.findById(req.params.id, function (err, message) {
    if (err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    var updated = _.merge(message, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, message);
    });
  });
};

// Deletes a message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}