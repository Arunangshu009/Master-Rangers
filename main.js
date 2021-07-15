var canvas = ("myCanvas");
ranger_image_width=30;
ranger_image_height=30;
ranger_x=10;
ranger_y=10;
var ranger_object="";
var ranger_image_object="";

function ranger_update(){
    fabric.Image.fromURL("Red-Ranger.jpg", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function player_update(){
    fabric.Image.fromURL("Blue-Ranger.jpg", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function player_update(){
    fabric.Image.fromURL("Black-Ranger", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function player_update(){
    fabric.Image.fromURL("Pink Ranger", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function player_update(){
    fabric.Image.fromURL("Yellow-Ranger", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("p and shift pressed together");
        ranger_image_height=ranger_image_height+10;
        ranger_image_width=ranger_image_width+10;
        document.getElementById("current_width").innerHTML=ranger_image_width;
        document.getElementById("current_height").innerHTML=ranger_image_height;
    }
 
    if(ranger_y=82, 71, 66, 80, 121){
        ranger_image_height=ranger_image_height+10;
        ranger_image_width=ranger_image_width+10;
        document.getElementById("current_width").innerHTML=ranger_image_width;
        document.getElementById("current_height").innerHTML=ranger_image_height;
    }

    if(keyPressed=='82'){
    red("Red-Ranger.jpg");
    console.log("red");
    }

    if(keyPressed=='71'){
    blue("Blue-Ranger.jpg");
    console.log("blue");
    }

    if(keyPressed=='66'){
    Black("Black-Ranger.jpg");
    console.log("Black");
    }

    if(keyPressed=='80'){
    pink("Pink Ranger.jpg");
    console.log("pink");
    }

    if(keyPressed=='121'){
    yellow("Yellow-Ranger.jpg");
    console.log("yellow");
    }
}