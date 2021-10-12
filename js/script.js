// Individuo il contenitore delle card
const cellRow = document.getElementById("cell_container")

// Creo il ciclo per creare le card
for (let i = 1; i <= 100; i++) {
    const cellCard = document.createElement("div")

    cellCard.classList.add("my_col")

    // sfondo card
    let bgColor = "cell_bg_lightblue"

    // testo dentro card
    let cellText = i

    // creo le condizioni alla quale devono essere 
    // sovrascritte le variabili sfondo e testo
    if (i % 3 === 0) {
        bgColor = "cell_bg_lightgreen"
        cellText = "fizz"
    }

    if (i % 5 === 0) {
        bgColor = "cell_bg_yellow"
        cellText = "buzz"
    }

    if (i % 3 === 0 && i % 5 === 0) {
        bgColor = "cell_bg_red"
        cellText = "fizzbuzz"
    }

    // Creo il contenuto delle card
    cellCard.innerHTML += `<div class="ratio ratio-1x1 fw-bold cell ${bgColor}">
                            ${cellText}
                           </div>`

    cellRow.append(cellCard)

}