var bassoon1, bassoon2, bassoon3, bassoon4, bassoon5;
var note0, note1, note2, note3, note4, note5, note6;

var score = ['1000001', '1010101', '1000111', '1001101', '1000101', '1001110', '1010100', '1001001', '1001110', '1000111', '0000000', '1001000', '1010101', '1001101', '1000001', '1001110'];

var noteDuration = 1;

function preload() {

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

    note0 = new p5.Phrase('note0', makenote0, [1]);
    note1 = new p5.Phrase('note1', makeNote1, [1]);
    note2 = new p5.Phrase('note2', makeNote2, [1]);
    note3 = new p5.Phrase('note3', makeNote3, [1]);
    note4 = new p5.Phrase('note4', makeNote4, [1]);
    note5 = new p5.Phrase('note5', makeNote5, [1]);
    note6 = new p5.Phrase('note6', makeNote6, [1]);

}

function draw() {

    console.log(frameCount);

    if (frameCount < score.length) {
        playPart(score[frameCount]);
    }
}

function makenote0(time, playbackRate) {
    bassoon0.play(time, 1, 1, 0, noteDuration * 1);
}

function makeNote1(time, playbackRate) {
    bassoon1.play(time, 1.5, 1, 0, noteDuration * 1.5);
}

function makeNote2(time, playbackRate) {
    bassoon2.play(time, 2, 1, 0, noteDuration * 2);
}

function makeNote3(time, playbackRate) {
    bassoon3.play(time, 2.5, 1, 0, noteDuration * 2.5);
}

function makeNote4(time, playbackRate) {
    bassoon4.play(time, 3, 1, 0, noteDuration * 3);
}

function makeNote5(time, playbackRate) {
    bassoon5.play(time, 3.5, 1, 0, noteDuration * 3.5);
}

function makeNote6(time, playbackRate) {
    bassoon6.play(time, 4, 1, 0, noteDuration * 4);
}

function playPart(binary) {

    console.log(binary);
    var thispart = new p5.Part();

    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            thispart.addPhrase(eval('note' + i));
        }
    }
    thispart.start();
}
