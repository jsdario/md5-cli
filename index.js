#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var fs = require('fs');
var md5 = require('MD5');
var path = require('path');

var target = process.argv[2];
var pathToTarget = path.resolve(__dirname, target);

if (fs.existsSync(pathToTarget)) {
	fs.readFile(pathToTarget, function(err, buf) {
		if(err) throw err;
		console.log(md5(buf));
	});
} else {
	console.log(md5(target));
}