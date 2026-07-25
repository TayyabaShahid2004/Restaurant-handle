const navburger=document.querySelector(".navburger");
const navbarlinks=document.querySelector(".container");
const showMenu=()=>{
    navbarlinks.classList.add("active");
}


navburger.addEventListener("click",showMenu);