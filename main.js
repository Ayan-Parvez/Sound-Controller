function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/L9S9g2UGq/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('Got Result!');
}
