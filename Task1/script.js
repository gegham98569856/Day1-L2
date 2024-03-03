let button = document.getElementById("storageButton")
button.addEventListener("click", function(){
    let name = document.getElementById("name")
    let info = document.getElementById("info")
     localStorage.setItem(name.value,info.value)
    name.value = "";
    info.value = ""
})