const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, bird;
var box1,box2,ground,pig1,log1, pig2,log2,box3,box4, box5,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(920,350,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810,365)
    log1 = new Log(810,315,300,PI/2)
    pig2 = new Pig(810,275)
    log2 = new Log(810,215,300,PI/2)
    box3 = new Box(700,270,70,70);
    box4 = new Box(920,270,70,70);
    box5 = new Box(810,180,70,70);
    log3 = new Log(750,153,150,PI/4);
    log4= new Log(870,153,150,-PI/4);
    bird= new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();


}