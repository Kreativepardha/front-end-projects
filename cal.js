const buttons=document.querySelectorAll(".button");
let string="";
let input=document.getElementById("input");


function changein(){
    input.value=string;
}
Array.from(buttons).forEach(buttons=>{
    buttons.addEventListener("click",()=>{
        if(buttons.innerHTML == "="){
            string=eval(string);
            changein();
        }
   
        else if(buttons.innerHTML=="2+2"){
            string="22";
            changein();
        }
        else{
        string = string+buttons.innerHTML;
       changein();
        }
    })
})









