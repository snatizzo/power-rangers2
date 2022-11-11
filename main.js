var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;
block_image_width =350;
block_image_height = 430;
var block_image_object = "";
function newImage(get_Image)
{
	fabric.Image.fromURL(grt_image,function(img)
    {

    block_image_objet;
	
		
		player_object.scaleToWidth(block_image_width);
		player_object.scaleToHeight(block_image_height);
		player_object.set({
			top:block_y,
			left:block_x
        });
		canvas.add(block_image_object);
	});
}
window.addEventListener("keydown", my_keydown)

function newImage(get_Image)
if(keyPressed == '82')
{
    newImage('rojo.jpg')
    console.log("r")
}
if(keyPressed == '71')
{
    block_x= 200;

    newImage('índice.jpg')
    console.log("r")
}
if(keyPressed == '89')
{
    block_x =350;
    newImage('amarillo.jpg')
    console.log("y")
}
if(keyPressed == '80')
{
    block_x=600;
    newImage('rosa.jpg')
    console.log("p")
}
if(keyPressed == '66')
{
    block_x=700;
    newImage('azul.jpg')
    console.log("b")
}

