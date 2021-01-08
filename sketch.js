var dog, database;
var foodS,foodStock;

function preload(){
dogImg=loadImage("images/dogImg.png");
dogImg1=loadImage("images/dogImg1.png");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  dog = createSprite(250,250,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
} 


function draw(){
  background("white");
 if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogImg1);
  }
    
    drawSprites();
  text("Food remaining : "+foodS,170,200);
    textSize(13);
    text("Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 
}

function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
 database.ref('/').update({
   Food:x
 })
}