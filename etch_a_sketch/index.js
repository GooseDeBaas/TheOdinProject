const container = document.getElementById("container");

for (let i = 0; i < 4; i++){
    const row = document.createElement("div");
    container.appendChild(row);
    row.classList = "row";
    
    for(let j = 0; j < 4; j++) {
        const divbox = document.createElement("div");
        row.appendChild(divbox);
        divbox.classList = "box";
    }
    
}
