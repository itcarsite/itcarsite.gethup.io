let btn = document.getElementById("btn");
let white = document.getElementById("white");
let yellow = document.getElementById("yellow");
let grey = document.getElementById("grey");
window.onscroll = function(){
    if(scrollY >= 400){
        btn.style.display = 'block';

    }else{
        btn.style.display = 'none';
    }
}

btn.onclick = function(){
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

if(localStorage.length > 0){
    document.body.style.backgroundColor = localStorage.color; 
}


white.onclick = function(){
    localStorage.setItem('color','white');
    document.body.style.backgroundColor = 'white';
}

yellow.onclick = function(){
    localStorage.setItem('color','yellow');
    document.body.style.backgroundColor = 'yellow';
}

grey.onclick = function(){
    localStorage.setItem('color','grey');
    document.body.style.backgroundColor = 'grey';
}
