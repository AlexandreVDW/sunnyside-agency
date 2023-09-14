const hamburger = document.querySelector(".section_one_navbar_div_hamburger");
const navMenu = document.querySelector(".section_one_navbar_menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".section_one_navbar_item_link").forEach(n=> n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))