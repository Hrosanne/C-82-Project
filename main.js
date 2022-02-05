var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_x,last_y;
color = "black";
width_of_line = 1;
radius = 10;

canvas.addEventListener("mousedown",my_Mousedown);
function my_Mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_Mouseup);
function my_Mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_Mouseleave);
function my_Mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        console.log("last position of x and y");
        console.log("x = "+ last_x);
        console.log("y = "+ last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x and y")
        console.log("x = "+ current_x);
        console.log("y = "+ current_y);
        ctx.arc(current_x,current_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}
function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }