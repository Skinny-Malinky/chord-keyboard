var rootNote, majorThird, perfectFifth, myPhrase, myPart;
var pattern = [3];
var msg = 'click to play';

function preload() {
    rootNote = loadSound('instrument/bassoon.mp3');
    majorThird = loadSound('instrument/bassoon.mp3');
    perfectFifth = loadSound('instrument/bassoon.mp3');
}

function setup() {
    noStroke();
    fill(255);
    textAlign(CENTER);
    masterVolume(0.1);

    aRoot = new p5.Phrase('bassoon', makeSound, [3]);
    aMajThird = new p5.Phrase('bassoon', makeSoundTwo, [1]);
    aPerfectFifth = new p5.Phrase('bassoon', makeSoundThree, [7]);
    
    aMaj = new p5.Part();
    aMaj.addPhrase(aRoot);
    aMaj.addPhrase(aMajThird);
    aMaj.addPhrase(aPerfectFifth);
    aMaj.setBPM(60);
    
    bRoot = new p5.Phrase('bassoon', makeSound, [3]);
    bMajThird = new p5.Phrase('bassoon', makeSoundTwo, [1]);
    bPerfectFifth = new p5.Phrase('bassoon', makeSoundThree, [7]);
    
    bMaj = new p5.Part();
    bMaj.addPhrase(bRoot);
    bMaj.addPhrase(bMajThird);
    bMaj.addPhrase(bPerfectFifth);
    bMaj.setBPM(60);
        
    cRoot = new p5.Phrase('bassoon', makeSound, [3]);
    cMajThird = new p5.Phrase('bassoon', makeSoundTwo, [1]);
    cPerfectFifth = new p5.Phrase('bassoon', makeSoundThree, [7]);
    
    cMaj = new p5.Part();
    cMaj.addPhrase(cRoot);
    cMaj.addPhrase(cMajThird);
    cMaj.addPhrase(cPerfectFifth);
    cMaj.setBPM(60);
    
    dRoot = new p5.Phrase('bassoon', makeSound, [3]);
    dMajThird = new p5.Phrase('bassoon', makeSoundTwo, [1]);
    dPerfectFifth = new p5.Phrase('bassoon', makeSoundThree, [7]);
    
    dMaj = new p5.Part();
    dMaj.addPhrase(dRoot);
    dMaj.addPhrase(dMajThird);
    dMaj.addPhrase(dPerfectFifth);
    dMaj.setBPM(60);   

    eRoot = new p5.Phrase('bassoon', makeSound, [3]);
    eMajThird = new p5.Phrase('bassoon', makeSoundTwo, [1]);
    ePerfectFifth = new p5.Phrase('bassoon', makeSoundThree, [7]);
    
    eMaj = new p5.Part();
    eMaj.addPhrase(eRoot);
    eMaj.addPhrase(eMajThird);
    eMaj.addPhrase(ePerfectFifth);
    eMaj.setBPM(60);
    // https://p5js.org/reference/#/p5.Score/
    new p5.Score(aMaj, bMaj);
}

function draw() {
    background(0);
    text(msg, width / 2, height / 2);
}

function makeSound(time, playbackRate) {
    rootNote.rate(playbackRate);
    rootNote.play(time);
}
function makeSoundTwo(time, playbackRate) {
    majorThird.rate(playbackRate);
    majorThird.play(time);
}
function makeSoundThree(time, playbackRate) {
    perfectFifth.rate(playbackRate);
    perfectFifth.play(time);
}
function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        //https://p5js.org/reference/#/p5.Score/start
        start();
    }
}