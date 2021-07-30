const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground;
var polygon;
var bird, slingshot,stand1,stand2;
var boxes1,boxes2,boxes3,boxes4,boxes5,boxes6,boxes7,boxes8,boxes9;
var backgroundImg;


//var gameState = "polygon";
var bg= "images/white.jpg";
var score=0;


function preload() {
    polygon = loadImage("images/polygon.png");
    getTime();
     }


function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    //bodies
    ground=new Ground(450,390,1100,20);
    stand1=new Ground (390,300,250,10);
    stand2= new Ground (700,200,200,10);
// boxstand1
box1=new Box(300,275,30,40);
box2=new Box(330,275,30,40);
box3=new Box(360,275,30,40);
box4=new Box(390,275,30,40);
box5=new Box(420,275,30,40);
box6=new Box(450,275,30,40);
box7=new Box(480,275,30,40);
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);
box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);
box16=new Box(390,155,30,40);
// boxesstand2
boxes1=new Box(640,175,30,40);
boxes2=new Box(670,175,30,40);
boxes3=new Box(700,175,30,40);
boxes4=new Box(730,175,30,40);
boxes5=new Box(760,175,30,40);
boxes6=new Box(675,135,30,40);
boxes7=new Box(700,135,30,40);
boxes8=new Box(730,135,30,40);
boxes9=new Box(700,95,35,50);
ball=Bodies.circle(50,200,50);
World.add(world,ball);
slingshot=new SlingShot(this.ball,{x:100,y:200})

}
function draw(){
    if(backgroundImg)
    background(backgroundImg);
     textSize(35);
    fill ("black");
    text ("SCORE:"+score,750,40);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
    fill("skyblue");
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
fill("pink");
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
fill("skyblue");
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
fill("pink");
box16.display();
//second stand
fill("skyblue");
boxes1.display();
boxes1.score();
boxes2.display();
boxes2.score();
boxes3.display();
boxes3.score();
boxes4.display();
boxes4.score();
boxes5.display();
boxes5.score();
fill("pink");
boxes6.display();
boxes6.score();
boxes7.display();
boxes7.score();
boxes8.display();
boxes8.score();
fill("skyblue");
boxes9.display();
boxes9.score();
imageMode(CENTER);
image(polygon,ball.position.x,ball.position.y,40,40);
slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
    slingshot.attach(this.ball);
    }
}
    async  function getTime(){
     var response = await fetch( "http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON = await response.json();
     //console.log(responseJSON);
     var dateTime = responseJSON.datetime;
     var hour = dateTime.slice(11,13);
     console.log(hour);
    
     if (hour>=06 && hour<=18){
     bg="images/white.jpg";
     
     }
     else{
         bg="images/black.png";
     }
     backgroundImg = loadImage(bg);
    }















