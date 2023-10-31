let iron = document.getElementById("iron")
let mon = document.getElementById("mon")
function sitio(){
    iron.style.marginTop = "-300px"
    iron.style.transition = "4s"
    mon.style.marginTop = "-300px"
    mon.style.transition = "4s"
    

}
iron.addEventListener("click",sitio);mon.addEventListener("click",sitio)
