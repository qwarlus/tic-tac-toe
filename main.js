const board = document.querySelector('table')
const btn = document.querySelector('button')
const lines = [
    {cell1: getCell(1, 1), cell2: getCell(1, 2), cell3: getCell(1, 3)}, 
    {cell1: getCell(2, 1), cell2: getCell(2, 2), cell3: getCell(2, 3)},
    {cell1: getCell(3, 1), cell2: getCell(3, 2), cell3: getCell(3, 3)},
    {cell1: getCell(1, 1), cell2: getCell(2, 1), cell3: getCell(3, 1)},
    {cell1: getCell(1, 2), cell2: getCell(2, 2), cell3: getCell(3, 2)},
    {cell1: getCell(1, 3), cell2: getCell(2, 3), cell3: getCell(3, 3)},
    {cell1: getCell(1, 1), cell2: getCell(2, 2), cell3: getCell(3, 3)},
    {cell1: getCell(1, 3), cell2: getCell(2, 2), cell3: getCell(3, 1)},
]

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    line.lineClass = 'line' + (i + 1) 
}

let count = 0

board.onclick = handleClick 
btn.onclick = restart

function getCell(row, col) {
    return board.rows[row - 1].cells[col - 1]
}

function handleClick(event) {
    const cell = event.target

    if (cell.className || cell.localName != 'td') return
    
    count++

    if (count % 2) {
        cell.className = "cross"
    } else {
        cell.className = 'zero'
    }

    checkWin()
}

function checkWin() {
    for (const line of lines) {
        const {cell1, cell2, cell3, lineClass} = line

        if (cell1.className 
            && cell1.className == cell2.className 
            && cell2.className == cell3.className) {
            board.className = lineClass
            board.onclick = null
            btn.hidden = false
        }
    }

    if (count == 9) {
        board.onclick = null
        btn.hidden = false
    }
} 

function restart() {
    location.reload()    
}