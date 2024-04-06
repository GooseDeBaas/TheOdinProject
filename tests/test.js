let combination1 = ["3", "1", "5", "9"];
const win = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"]
]

let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })
}

for (let i = 0; i < win.length; i++) {
    if (checkSubset(combination1, win[i]) == true) {
        console.log("Won!");
    }
}