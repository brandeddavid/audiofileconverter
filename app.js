/*
//Required Modules
var audioConverter = require("audio-converter");

// COnversion with progress bar
audioConverter("./waves/", "./mp3s/", '-m'{
    progressBar: true
}).then(function() {
    console.log("Done!");
});
*/

var testFolder = './ogg/';
var fs = require('fs');
var sox = require('sox.js');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
    sox({

    	inputFile: testFolder + file,
    	outputFile: './wav/' + file.split('.')[0] +'.wav'
    })
  });
})

/*
var sox = require('sox.js');

sox({

	fileName = 'abandon.ogg'
	inputFile: './ogg/' + fileName,
	outputFile: './wav/' + fileName.split('.')[0] + '.wav'
})
*/