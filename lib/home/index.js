/**
 * Module dependencies.
 */

var page = require('page');
var React = require('react');
var Home = require('./home');

page('/', function(ctx, next) {
  React.render(
    <Home />,
    document.getElementById('content')
  );
});
