//Required Modules
var audioConverter = require("audio-converter");

// Conversion with progress bar
//.wav to .mp3 Converter
audioConverter("./wav/", "./mp3/",{
    progressBar: true,
    mp3Only: true
}).then(function() {
    console.log("Done!");
});

/*
//.ogg to .wav Converter
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



var sox = require('sox.js');

sox({

	fileName = 'abandon.ogg'
	inputFile: './ogg/' + fileName,
	outputFile: './wav/' + fileName.split('.')[0] + '.wav'
})
*/