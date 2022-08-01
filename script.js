const gridcontainer = document.querySelector(".gridcontainer");
const create = document.getElementById("crtbtn");
create.addEventListener("click", getinputvalue());
const clear = document.getElementById('clrbtn');
clear.addEventListener('click',clearGrid());
// createGrid(3)

function getinputvalue(){
    const size = parseInt(document.getElementById("size").value);
    gridcontainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr);  grid-template-rows: repeat(${size}, 1fr);`;
    transient();
    createGrid(size)
};




function createGrid(number){
    let space = number*number;
    for (let i=0; i<space ; i++){
        let cell= document.createElement("div");
        cell.classList.add("gridItem");
        cell.addEventListener("mouseover",function(){
            cell.classList.add("active")
        });
     gridcontainer.appendChild(cell);
    }
};
function transient(){
    const cells = document.querySelectorAll(".gridItem")
    cells.forEach((element)=>{
        gridcontainer.removeChild(element)
    });
}
function clearGrid(){
    const grids=document.querySelectorAll(".active")
    grids.forEach((element)=>{
        element.classList.remove("active");
    });

}