const sidemenu =document.querySelector("aside");
const menuebtn=document.querySelector("#menu-btn_snow");
const clsoebtn=document.querySelector("#close-btn");
const themetoggler=document.querySelector(".theme-toggler");


let dark=sessionStorage.getItem("dark");

console.log(dark)
if(dark=="true"){


    document.body.classList.toggle('dark-theme-variables');
    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
    document.getElementById("logop").src="img/white.png";
}
if(dark=="false"){
    document.getElementById("logop").src="img/logo.png";
}
//show sidebar
menuebtn.addEventListener('click',() =>{
    console.log("a7a");
    sidemenu.setAttribute("style" , "display:block !important");
})
$(document).on('click', '.menu-btn_snow',  function () {
    sidemenu.setAttribute("style" , "display:block !important");
})
$(document).on('click', '.close-btn',  function () {
    sidemenu.style.display='none';
})
clsoebtn.addEventListener('click',() =>{
    sidemenu.style.display='none';
})

//change thme
themetoggler.addEventListener('click',() =>{
    var notfiImg = document.querySelectorAll(".profileT");
    dark=sessionStorage.getItem("dark");
    document.body.classList.toggle('dark-theme-variables');
    if(dark==null || dark =="false"){
        sessionStorage.setItem("dark", "true");
        console.log("here")
        for (var i = 0; i < notfiImg.length; i++) {
       
            notfiImg[i].src = "img/white.png";
        }
        document.getElementById("logop").src="img/white.png";
    }
    if(dark=="true"){
        for (var i = 0; i < notfiImg.length; i++) {
       
            notfiImg[i].src = "img/logo.png";
        }
        console.log("here2")
        sessionStorage.setItem("dark", "false");
        document.getElementById("logop").src="img/logo.png";
    }
    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})