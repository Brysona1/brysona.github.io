let Shapes = []; //This is where every shape is stored, regardless of type
let dict = new Object();
let idGen = 0; //Used to generate a unique object ID for every node.
function setup() {
    angleMode(DEGREES);
    canvas = createCanvas(500, 1000);
    canvas.parent('content');
}

function draw() {
    //Perform each object's step event
    for (let i = 0; i < Shapes.length; i++) {
        Shapes[i].step()
    }

    background(220);
    //Perform each object's draw event
    for (let i = 0; i < Shapes.length; i++) {
        Shapes[i].draw();
    }
    for (let i = 0; i < Shapes.length; i++) {
        Shapes[i].drawLast();
    }
}

function addKey() {

    var x = document.getElementById("key").value;
    var y = document.getElementById("value").value;
    if (x == "") {return}
    dict[x] = y;
    buildShapes(dict);
}

function buildShapes(dict) {
    Shapes = [];
    for (var key in dict) {
        var value = dict[key];
        x = 50;
        y = 50;
        w = 100;
        h = 50;
        count = Shapes.length/2;
        shapeLen = Shapes.length;
        Shapes[shapeLen] = new clRectangle(x, y * count, 0, 0, h, w);
        Shapes[shapeLen].text = key;
        shapeLen = Shapes.length;
        Shapes[shapeLen] = new clRectangle(x + w, y * count, 0, 0, h, w);
        Shapes[shapeLen].text = value;
    }
}