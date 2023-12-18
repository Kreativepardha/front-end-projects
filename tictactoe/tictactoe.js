const box=document.querySelectorAll(".box");
const statustext= document.querySelector("#statustext");
const restartbtn=document.getElementById("button");
const result=document.getElementById("result");
let x_player="x";
let o_player="o";
let currplayer= x_player;
let turn=currplayer;

let winconditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let board=["","","","","","","","",""];



    box.forEach( cell => {

        cell.addEventListener("click",(e)=>{

            
            statustext.innerText=`${turn}'s TURN`;  
            changeturn();

 if(e.target.textContent==="")  {

    if(turn===x_player){

        e.target.innerText=x_player;
     
        // let stat=statustext;
        }
        else if(turn===o_player){
            e.target.innerText=o_player;
        }
      
    }
    if(wincheck()){
        // console.log(`${turn} is winner `);
            result.innerText=`${turn} gelichaduu ${o_player} chusi nerchuko`; 
            result.style.color='aquamarine';

    }
    else if(isdraw()){
        result.innerText=` draww idharu attagalu ahha`; 
        result.style.color='yellow'; 
      } 
//         else{
//     changeturn();
//    }
      });
    });


   
const changeturn=()=>
{
  turn = turn === x_player ? o_player : x_player; 
};



function wincheck(){
  return  winconditions.some(condition=>{
     return   condition.every(index=>{
         return box[index].textContent===turn;
        })
    })
}

function isdraw(){
  return  [...box].every(cell=>{
        // return tile.classList.contains(x_player) || tile.classList.contains(o_player) ;
        return cell.textContent===x_player ||  cell.textContent===o_player; 
    })
}