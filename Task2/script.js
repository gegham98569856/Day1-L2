function openMenu(){
    let hamburger = document.getElementById("hamburger")
    let menu = document.getElementById("menu");
    let childs = document.getElementsByClassName("child")
    for(let i = 0; i < childs.length; ++i){
        childs[i].style.display = "block"
    }
    menu.style.display = "flex"
    menu.style.width = "400px"
    menu.style.height = "700px"
    hamburger.style.display = "none"
}