let btn1=document.querySelectorAll(".btn");
let div=document.querySelector("#winner");
let newGame =document.querySelector("#new");
let reset=document.querySelector("#reset");



turnO=true;
btn1.forEach((btn)=>{
btn.addEventListener("click",()=>{
    if(turnO){
    btn.innerText="O";
    turnO=false;
    btn.disabled=true;
    check();
    
    }
    else{
        btn.innerText="X";
        turnO=true;
        btn.disabled=true;
        check();
        
    }
});
});
let disable=()=>{
    for(let b of btn1){
        b.disabled=true;
    }
}
let enable=()=>{
    for(let b of btn1){
        b.disabled=false;
        b.innerText="";
        div.innerText="";
        turnO=true;
    }
}

newGame.addEventListener("click",enable);

reset.addEventListener("click",enable);

let check=()=>{
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
for(let val of win){
    let val1=btn1[val[0]].innerText;
   let val2=btn1[val[1]].innerText;
   let val3=btn1[val[2]].innerText;
   if(val1!=""&&val2!=""&&val3!=""){
    if(val1===val2&&val2===val3){
        disable();
        div.innerText=`YOU WIN ${val1}`;
    }
   }
}
};

