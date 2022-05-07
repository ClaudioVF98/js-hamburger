const menu = document.querySelector (".fa-bars");

const menuHamburger = document.querySelector (".hamburger-menu");

const exit = document.querySelector (".fa-times")


menu.addEventListener ("click",
    
    function() {
        menuHamburger.style.display = "block";       
    }
)

exit.addEventListener ("click",
    
    function() {
        menuHamburger.style.display = "none";       
    }
)
