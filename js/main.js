var ElInp = document.querySelector('.inp')
var ElPiyoda = document.querySelector('.piyoda')
var ElVelosiped = document.querySelector('.velosiped')
var ElMoshina = document.querySelector('.moshina')
var ElSamolyot = document.querySelector('.samolyot')
function fn(){
    var km = ElInp.value
    ElPiyoda.textContent = km / 4
    ElVelosiped.textContent = km / 20
    ElMoshina.textContent = km / 100
    ElSamolyot.textContent = km / 800


}
var ElSwitch = document.querySelector('.span')
var bol = true
function dayni(){
    if(bol == true){
        ElSwitch.classList.add('white')
        ElSwitch.classList.remove('dark')
    }else{
        ElSwitch.classList.add('dark')
        ElSwitch.classList.remove('white')
    }
    bol = !bol
}