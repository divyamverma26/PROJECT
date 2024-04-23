var get_s=document.getElementById("get");
function come(){
    get_s.style.background = "linear-gradient(to right, #4CAF50, #2E7D32)";
    get_s.style.fontSize="22px"; 
    get_s.style.padding="0.5rem 1rem 0.5rem 1rem";
    get_s.style.height="4rem";
    get_s.style.width="14rem";
}
function leave(){
    get_s.style.background="";
    get_s.style.fontSize="";
    get_s.style.padding="";
    get_s.style.boxSizing = "";
    get_s.style.height="";
    get_s.style.width="";
}
login=()=>{
    window.open('about.html','_self');
}