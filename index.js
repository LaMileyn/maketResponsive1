const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")
const animated_items = document.querySelectorAll(".animate")

const circles = document.querySelectorAll('circle')
window.onload = () => {
    circles.forEach( el =>{
        console.log(el.dataset.array)
        el.style.strokeDasharray = el.dataset.array
    } )
    animated_items.forEach( el => el.classList.add("animated"))

}

// CLOSE SIDEBAR
closeBtn.addEventListener("click", () => sideMenu.style.display = "none")
//OPEN SIDEBAR
menuBtn.addEventListener("click", () => sideMenu.style.display = "block")
//CHANGE THEME
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelectorAll('span')[0].classList.toggle('active')
    themeToggler.querySelectorAll('span')[1].classList.toggle('active')
})

