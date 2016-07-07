#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var fs = require('fs');
var md5 = require('md5');
var path = require('path');

var target = process.argv[2];
var pathToTarget = path.resolve(__dirname, target);

console.log(md5(target));
