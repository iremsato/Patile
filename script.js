window.addEventListener("load", () => {
    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-preloader").style.display = "none";
    },600);
});

// Nav
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click",navToggle);

// dışına tıklayarak nav gizleme

document.addEventListener("click",(event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickInsideNavToggler = navToggler.contains(event.target);
    if(!(isClickInsideNav || isClickInsideNavToggler) && nav.classList.contains("active")){
        navToggle();
    }
});

// gunduz/gece modu
function themeLightDark(){
    const switcherBtn = document.querySelector(".js-switcher-btn");
    const icon = switcherBtn.querySelector("i");

    function changeIcon(){
        if(document.body.classList.contains("dark")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else{
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    switcherBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        changeIcon();
        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        }
        else{
            localStorage.setItem("theme","light");
        }
    });

    if(localStorage.getItem("theme") !== null){
        if(localStorage.getItem("theme") === "light"){
            document.body.classList.remove("dark");
        }
        else{
            document.body.classList.add("dark")
        }
    }

    changeIcon();
}
themeLightDark();