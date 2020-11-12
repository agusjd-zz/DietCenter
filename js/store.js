const buyButton = document.querySelector(".buttonBuy");
const storeButton = document.querySelector(".storeButton");
const container = document.getElementById("container");
const containerStore = document.getElementById("containerStore");
const containerIndex = document.getElementById("containerIndex");
const sectionSnack = document.getElementById("sectionSnack");
const snackButton = document.getElementById("snackButton");
const catButton = document.getElementById("catButton");
container.removeChild(containerStore);
container.removeChild(sectionSnack);
function openStore(){
    container.removeChild(containerIndex);
    container.appendChild(containerStore);
}
function openSnackSection(){
    container.removeChild(containerStore);
    container.appendChild(sectionSnack);
}
function catBoton(){
    container.removeChild(sectionSnack);
    container.appendChild(containerStore);
}
buyButton.addEventListener("click",openStore,true);
storeButton.addEventListener("click",openStore,true);
snackButton.addEventListener("click",openSnackSection,true);
catButton.addEventListener("click",catBoton,true);

