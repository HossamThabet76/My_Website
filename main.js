let menu=document.getElementById('menu');
function menu_function(){
    menu.classList.toggle('active');
}
let width=document.getElementById('width');
function width_function(){
    width.classList.toggle('width');
}
let arrow=document.getElementById('arrow');
onscroll=function(){
    let value=scrollY;
    if(value>175){
        arrow.style.display='block';
    }
    else{
        arrow.style.display='none';
    }
}