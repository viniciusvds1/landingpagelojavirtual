window.onscroll = function(){
    myFunction();
}

var navbar = document.getElementById('header');
var sticky = navbar.offsetTop;


function myFunction(){
    if(window.pageXOffset >=sticky){
        navbar.classList.add('sticky');
        navbar.style.boxShadow = "0 8px 6px -6px black ";
    }else{
        navbar.classList.remove('sticky');
        navbar.style.boxShadow ="none";
    }
}