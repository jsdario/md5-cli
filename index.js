#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var fs = require('fs');
var md5 = require('md5');
var path = require('path');

// Example: md5-cli 'foo'
if (process.stdin.isTTY) {
  var target = process.argv[2];
  console.log(md5(target));

// Example: echo 'foo' | md5-cli
} else {
  var data = '';
   process.stdin.on('readable', function() {
    var chunk;
    while (chunk = process.stdin.read()) {
      data += chunk;
    }
  });

  process.stdin.on('end', function () {
    // There will be a trailing \n from the user hitting enter. Get rid of it.
    data = data.replace(/\n$/, '');
    console.log(md5(data));
  });
}

