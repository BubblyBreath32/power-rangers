var canvas = new fabric.Canvas("myCanvas"); 
// Create canvas variable
 block_y=1;
 block_x=1;

b_width = 350;
b_height = 430;

var block_image_object= "";

function new_image(get_Image)
{
	// to upload images\
	fabric.Image.fromURL(get_Image, function(Img){
		block_image_object = Img;
 
		 block_image_object.scaleToWidth(b_width);
		 block_image_object.scaleToHeight(b_height);
		 block_image_object.set({
			 top:block_y,
			 left:block_x
		 });
 
 canvas.add(block_image_object);
 
	 });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image("rr1.png");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 750;
	// upload blue ranger
	new_image("br.png");
	}
	
}

