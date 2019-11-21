var diaml=0;

function setup() {
    createCanvas(500,500);
    background("#33FFFF");
}

function draw() {
    
    fill("#FF33F6");
    stroke("#ffff000");
    strokeWeight(5);
    ellipse(diaml,diaml,20,20);
    diaml=diaml+5
    fill("#33FFA8");
    ellipse(random(width),random(height),30,30);
    textSize(40);
    textFont("Georgia");
    textStyle("ITALIC");
    textAlign(CENTER);
    text("How Do You Do?",width/2,100);
    
}

function mousePressed(){
    if(diaml>50){
        diaml=0;
    }else{
    diaml=diaml+5;
    }
}
    