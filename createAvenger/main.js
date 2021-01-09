canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;
var player_object = "images/RocketRacoon.png";

function player_update(){
    fabric.Image.fromURL("images/RocketRacoon.png",function(Img){
    player_object=img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);

    player_object.set({
        top:player_y,
        left:player_x
    }); 
    canvas.add(player_object);


    });
    function new_image(get_image){
     fabric.Image.fromURL(get_image, function(img){
        block_image_object = img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToWidth(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    
     }); 
    }
}
//key events start//
window.addEventListener("keydown", my_keydown);
    

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    //arrow keys for rocketRacoon.png begin//

    if(keyPressed == '38')
    {
        up();
        console.log("up");

    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
        
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
        
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
        
    }
    
    // hybrid images start here//

    if(keyPressed == '73')
    {
        new_image("images/IronManHead.png");
        console.log("i");
        
    }
    if(keyPressed == '82')
    {
        new_image("images/RocketRacoonHead.png");
        console.log("r");
        
    }
    if(keyPressed == '71')
    {
        new_image("images/grootHead.png");
        console.log("g");
        
    }
    if(keyPressed == '84')
    {
        new_image("images/thorHead.png");
        console.log("t");
        
    }
    if(keyPressed == '80')
    {
        new_image("images/blackPantherHead.png");
        console.log("p");
    }
        
  if(keyPressed == '66')
    {
        new_image("images/spidermanFace.png");
        console.log("b");
        
    }
  
 
    if(keyPressed == '65')
    {
        new_image("images/ironManBody.png");
        console.log("a");
        
    }
    if(keyPressed == '67')
    {
        new_image("images/RocketBody2.png");
        console.log("c");
        
    }
    if(keyPressed == '70')
    {
        new_image("images/ironManRightHand.png");
        console.log("f");
        
    }
    if(keyPressed == '74')
    {
        new_image("images/spidermanRightHand.png");
        console.log("j");
        
    }
    if(keyPressed == '75')
    {
        new_image("images/cptnAmericaLeftHand.png");
        console.log("k");
        
    }
    if(keyPressed == '81')
    {
        new_image("images/thorRightHand.png");
        console.log("q");
        
    }
    if(keyPressed == '86')
    {
        new_image("images/thorLeftHand.png");
        console.log("v");
        
    }
    if(keyPressed == '87')
    {
        new_image("images/hulkRightHand.png");
        console.log("w");
        
    }
    if(keyPressed == '90')
    {
        new_image("images/spiderManLegs.png");
        console.log("z");
        
    }
    if(keyPressed == '89')
    {
        new_image("images/ironManLegs.png");
        console.log("y");
        
    }

    }