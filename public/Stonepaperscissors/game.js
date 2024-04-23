let userscore=0;
let compscore=0;
const mes=document.querySelector("#msgs");
const choices=document.querySelectorAll('.image');
const users=document.querySelector("#user");
const comps=document.querySelector("#comp");

const showwinner=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
        console.log("Draw game");
        mes.innerHTML="Game was Draw! Try again.";
        mes.style.backgroundColor="#081b31";
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            userwin= (compchoice==='paper')? false: true;
            if(userwin){
                userscore++;
                users.innerHTML=userscore;
                console.log("You win");
                mes.innerText="You Won!!";
                mes.style.backgroundColor="green";
            }
            else{
                compscore++;
                comps.innerHTML=compscore;
                console.log("Computer win");
                mes.innerText="You Lost!!";
                mes.style.backgroundColor="red";
            }
        }
        else if(userchoice==='paper'){
            userwin= (compchoice==='scissors')? false: true;
        }
        else{
            userwin= (compchoice==='rock')? false: true;
        }
    }
}
const findcomp=()=>{
    const arr=['rock','paper','scissors'];
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
const playgame=(userchoice)=>{
    let compchoice= findcomp();
    showwinner(userchoice,compchoice);
}
choices.forEach((image)=>{
    image.addEventListener('click',()=>{
        const userchoice= image.getAttribute('id');
        playgame(userchoice);
    })
})