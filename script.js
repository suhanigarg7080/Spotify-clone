console.log("Welcome to Spotify")
//initialize the variable

let songIndex = 0;
let audioElement= new Audio('1.mp');
let masterplay = document.getElementById('masterplay');

let myprogressBar =document.getElementById('myprogressBar');
let gif =document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem')); 

const sounds =['sound']

//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',()=>{

    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    
    
    
    }
})
//listen to events
myprogressBar.addEventListener('timeupdate',()=>{
    
//updatebseekbar

progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{

    audioElement.currentTime=myprogressBar.value * audioElement;
})