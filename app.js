/*
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

var audioMetaData = require('audio-metadata'),
fs = require('fs');

fs.readdir('./tests/', (err, files) => {
  files.forEach(file => {
    //console.log(file);
    var oggData = fs.readFileSync('./tests/'+file);
    var metadata = audioMetaData.ogg(oggData);

    if (metadata.swac_speak_gender == null){
      console.log(file + ' voice is null')
    }
    else if(metadata.swac_speak_gender == 'M'){
      console.log(file + ' has a male voice')
    }
    else if(metadata.swac_speak_gender == 'F'){
      console.log(file + ' has a female voice')
    }
    else{
      //console.log(file + ' has no voice')
    }

  });
})

/*
var oggData = fs.readFileSync('yolk.ogg');
var metadata = audioMetaData.ogg(oggData);


console.log(metadata.swac_speak_gender);
*/