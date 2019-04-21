var bassoon1, bassoon2, bassoon3, bassoon4, bassoon5;
var note0, note1, note2, note3, note4, note5, note6;

var jsonScore;
var notes = [];
var queue = [];
var scoreLine = 0;
var pauseLength = 0;

var framesPerVideoFrame = 20;

var noteDuration = 1;

function preload() {

    // the talk doesn't start till 1:37 inton the video
    // skipped ahead to the action
    // changed the videoframe of the first item of json from 97 to 102
    frameCount = 102 * framesPerVideoFrame - 4;

    jsonScore = loadJSON('./corpus/output/score.json');

    bassoon0 = loadSound('instrument/bassoon.mp3');
    bassoon1 = loadSound('instrument/bassoon.mp3');
    bassoon2 = loadSound('instrument/bassoon.mp3');
    bassoon3 = loadSound('instrument/bassoon.mp3');
    bassoon4 = loadSound('instrument/bassoon.mp3');
    bassoon5 = loadSound('instrument/bassoon.mp3');
    bassoon6 = loadSound('instrument/bassoon.mp3');
}

function setup() {

    frameRate(1 / noteDuration);

    notes[0] = new p5.Phrase('note0', makenote0, [1]);
    notes[1] = new p5.Phrase('note1', makeNote1, [1]);
    notes[2] = new p5.Phrase('note2', makeNote2, [1]);
    notes[3] = new p5.Phrase('note3', makeNote3, [1]);
    notes[4] = new p5.Phrase('note4', makeNote4, [1]);
    notes[5] = new p5.Phrase('note5', makeNote5, [1]);
    notes[6] = new p5.Phrase('note6', makeNote6, [1]);
}

function draw() {

    if (queue.length > 0) {
        var currentBinary = queue.shift();
        playPart(currentBinary);

    } else {
        pauseLength++;
    }

    if (jsonScore[scoreLine].videoframe * framesPerVideoFrame == frameCount) {

        if (pauseLength > 0) {
            console.log('Pause length: ' + pauseLength);
            pauseLength = 0;
        }
        console.log('Length of queue: ' + queue.length);
        console.log(jsonScore[scoreLine].words);

        queue = queue.concat(jsonScore[scoreLine].binary);
        scoreLine++;
    }
}

function playPart(binary) {

    var thispart = new p5.Part();

    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            thispart.addPhrase(notes[i]);
        }
    }
    thispart.start();
}
