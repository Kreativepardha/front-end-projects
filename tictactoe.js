const board=document.getElementById("board");
const box=document.querySelectorAll(".box");
const result=document.querySelector("#result");
const statust=document.querySelector("#status");
const restart=document.getElementById("button");

let x_player='x';
let o_player='o';
let turn=x_player;
let current_player;


let setboard=["","","","","","","","",""];
let wincombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const startgame =()=>{
    box.forEach(cell=>{
        cell.addEventListener("click",(e)=>{

            e.target.textContent=turn;
           
            if(checkwinner()){
                
                result.textContent=`${turn} izz winner`;
                result.style.color="aquamarine";
                return;
               } 
               else if(checkdraw()) {
                
                result.textContent=`you drawer`;
                result.style.color="orange";
               }
            changeturn();   
            statust.textContent=`${turn}' turn`;
            statust.style.color="violet";
           
            e.target.style.color = turn === x_player ? "yellow" : "antiquewhite";
         
          

        } ,{once:true})
       
    }) }
  
     function regame() { 
        location.reload();
       

}
             
startgame();

function changeturn(){
    
 if(turn===x_player){
   
    turn=o_player;
   
 }else{
 turn=x_player;
 }
}

function checkwinner(){

    for(let i=0;i<wincombination.length;i++){

        const [pos1,pos2,pos3] = wincombination[i];

       
        if(box[pos1].textContent!=='' && box[pos1].textContent===box[pos2].textContent && box[pos2].textContent===box[pos3].textContent){
       return true;
        }

    }
    return false;
}
function checkdraw(){

  if(Array.from(box).every(cell=>cell.textContent!=='')){
   
    return true;
  }
  return false;
}