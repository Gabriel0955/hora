let iron = document.getElementById("iron")
let mon = document.getElementById("mon")
let irondes = document.getElementById("irondes")
let mondes = document.getElementById("mondes")
function sitio(){
    iron.style.animation = "anima 10s infinite"
    mon.style.animation = "anima 10s infinite"
    iron.style.visibility = "visible"
    mon.style.visibility = "visible"
    irondes.style.visibility = "hidden"
    mondes.style.visibility = "hidden"
    
    
    

}
function detenerAnimacion() {
    iron.style.visibility = 'hidden';
    mon.style.visibility = 'hidden';

}


setTimeout("sitio()",3000)
setTimeout("detenerAnimacion()",0)