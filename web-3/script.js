let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

// 按下按鈕之後產生的變化

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}
