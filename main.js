function preload(){
    imagen= loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML='status detectando objetos';
}
function draw(){
    image(imagen, 0, 0, 640, 420);
    rect(30, 60, 450, 350);
    noFill();
    stroke(21, 77, 189);
    text("Perro", 45, 75);

    rect(300, 90, 270, 320);
    noFill();
    stroke(21, 77, 189);
    text("Gato", 320, 120);
}
function modelLoaded(){
    console.log("modelo cargado");
    status=true;
    objectDetector.detect(imagen, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}