
let progress=document.getElementById("progress");
let audio=document.getElementById("audio");
let play=document.getElementById("play");
let songtitle=document.getElementById("songtitle");
let artist=document.getElementById("artist");
let person=document.getElementById("person"); 
let albumImg=document.getElementById("album-img"); 
let previous=document.getElementById("prev");
let next=document.getElementById("next");

let card=document.getElementById("card");

const musicList =[
{  owner:`pardha's player`,
   img :`ilayaraja1.webp`,
   name:`yen iniya pon nilave`,
   singer:`ilaiyaraja`,
   music:`YENINIYA.mp3`
},
   // {
   //    owner:`vardhini's player`,
   //    img :`khalid.jpg`,
   //    name:`young dumb and broke`,
   //    singer:`khalid`,
   //    music:`youngnbroke.mp3`
   // },
{
   owner:`pardha's player`,
   img :`vivek.jpg`,
   name:`sakkani bomma`,
   singer:`vivek sagar`,
   music:`sakkani bomma.mp3`
}
,
// {
//    owner:`ismaeel bhai's player`,
//    img :`prateek.jpg`,
//    name:`kasoor`,
//    singer:`prateek kuhad`,
//    music:`kasoor.mp3`
// }
];
let currentIndex=0;

play.addEventListener("click",()=>
{
   if(audio.paused){
      audio.play();
      play.innerHTML=`<i  class="fa-solid fa-pause  style=color:#fff;"></i>`
   }else{
      audio.pause();
      play.innerHTML=`<i  class="fa-solid fa-play  style=color:#fff;"></i>`
   }
})

next.addEventListener("click",()=>{
if(currentIndex > musicList.length-1){
   currentIndex = 0;
}else{
   currentIndex++;
}
setmusic(currentIndex);
play.click();
})


previous.addEventListener("click",()=>{
   if(currentIndex < 0){
      currentIndex = musicList.length-1;
   }else{
      currentIndex--;
   }
   setmusic(currentIndex);
   play.click();
   })
  
function setmusic(index){

   const currenmusic=musicList[index];

   person.innerText=currenmusic.owner;
   albumImg.src=currenmusic.img;
   audio.src=currenmusic.music;
   artist.innerText=currenmusic.singer;
   songtitle.innerText=currenmusic.name;
   // document.card.style.backgroundColor = cardColors[index];

}
audio.addEventListener("timeupdate", () => {
     const progressValue = (audio.currentTime / audio.duration) * 100;
       progress.value = progressValue;
})



