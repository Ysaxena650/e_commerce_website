let cross=document.querySelector(".forcross");
let btn=document.querySelector(".belowhead button")
let arrowleftbtn=document.querySelector(".arrowleft");
let arrowrightbtn=document.querySelector(".arrowright");
let buttonham=document.querySelector(".rishabh");
let hamburger=document.querySelector(".hamburgerwindow");
let bigimg=document.querySelector(".wideimage img");
let wideimg=document.querySelector(".wideimage img");
let button = document.getElementById("rishabh");
let headcross=document.querySelector(".cross");
let head=document.querySelector(".headbar");

let zidx=10;

let arr=['furr.jpg','furr2.jpg','furr3.jpg'];
let i=0;
      

       function changeimage(){
        const randomNumber = Math.floor(0+Math.random() * 3);
        wideimg.setAttribute('src', `${arr[randomNumber]}`);
       }
     
       setInterval(changeimage,1000);

arrowleftbtn.addEventListener(("click"),()=>{
    if(i==arr.length){
        i=0;
    }
    bigimg.setAttribute('src',`${arr[i]}`);
    i++;
})

arrowrightbtn.addEventListener(("click"),()=>{
    if(i==arr.length){
        i=0;
    }
    bigimg.setAttribute('src',`${arr[i]}`);
    i++;
})



button.addEventListener(("click"),()=>{
    console.log("hurray")
     hamburger.style.left='0';

})

cross.addEventListener(("click"),()=>{
    hamburger.style.left='-80vw';
})

headcross.addEventListener(("click"),()=>{
    head.style.display='none';
})



