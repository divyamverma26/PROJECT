var a=document.getElementById("tn");
var b=document.getElementsByClassName("thumb");
var c=document.getElementById("main");

function changeimg(index){
    c.src=b[index].src;
}
var currind=0;
function setimg(){
    changeimg(currind);
    currind++;
    if(currind==b.length){
        currind=0;
    }
}
setInterval(setimg,3000);