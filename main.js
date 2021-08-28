canvas=document.getElementById("marscanvas");
context=canvas.getContext("2d");
roverwidth=100;
roverheight=100;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverx=10;
rovery=10;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

}
function uploadBackground(){
    context.drawImage(background_imgTag,0,0,canvas.roverwidth,canvas.height);
}
function uploadrover(){
    context.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keycode;
console.log(keyPressed)
if(keyPressed=='38'){
    up()
};
if(keyPressed=='40'){
    down()
};
if(keyPressed=='37'){
  left()
};
if(keyPressed=='39'){
   right()
};
}
function up(){
    if(rovery>=0){
        rovery-=10;
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rovery<=550){
        rovery+=10;
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(roverx>=0){
        roverx-=10;
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(roverx<=550){
        roverx+=10;
        uploadBackground();
        uploadrover();
    }
}