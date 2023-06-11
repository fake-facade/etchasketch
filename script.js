const container = document.querySelector('div.container');

let size = 16;

const rowContainer = document.getElementsByClassName("row-container");
const box = document.getElementsByClassName("box");

function generator (size) {
    for (let i = 0; i < size; i++){
    const row = document.createElement('div');
    container.appendChild(row);
    row.classList.add('row-container');
        for (let i = 0; i < size; i++){
            const column = document.createElement('div');
            row.appendChild(column);
            column.classList.add('box');
        };
    };
    addEvent();
};


generator(size); 

function addEvent (){
        for (let i = 0; i < box.length; i++){
        let div = box[i];
        div.addEventListener('mouseover', () => {
            div.classList.toggle('hoveredBox');
        });
    };
};

function resetBoard() {
    let input = prompt("How large would you like your grid?", size);
    const length = rowContainer.length;

    for (let i = 0; i < length; i++){
        rowContainer[0].remove();
    };

    if (input > 100){
        alert("Max size = 100x100!");
        generator(100);
    } else if (!Number.isInteger(size)){
        alert("Numeric inputs only!");
        generator(16);
    } else {
        generator(input);
    };
 };