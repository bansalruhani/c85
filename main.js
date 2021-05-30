canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
array_images=["mars1.jpg","mars2.jpg","mars3.jpg","mars3.jpg"];
random_number = Math.floor(Math.random() * 4); console.log(random_number);
roverwidth=100;
roverheight=90;

background_image=array_images[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imgtag=new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload= uploadrover;
    rover_imgtag.src=rover_image;
}
 
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,roverwidth,roverheight)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}
function up()
{
  if(rover_y >=0)
  {
      rover_y= rover_y-10;
      console.log("when up arrow is pressed ="+rover_x +"-"+rover_y);
      uploadbackground();
      uploadrover();
  }
}
function down()
{
  if(rover_y <=500)
  {
      rover_y= rover_y+10;
      console.log("when down arrow is pressed ="+rover_x +"-"+rover_y);
      uploadbackground();
      uploadrover();
  }
}
function left()
{
  if(rover_x >=0)
  {
      rover_x= rover_x-10;
      console.log("when left arrow is pressed ="+rover_x +"-"+rover_y);
      uploadbackground();
      uploadrover();
  }
}
function right()
{
  if(rover_x <=700)
  {
      rover_x= rover_x+10;
      console.log("when right arrow is pressed ="+rover_x +"-"+rover_y);
      uploadbackground();
      uploadrover();
  }
}