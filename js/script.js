// Individuo e assegno con una variabile il contenitore dove andranno le card
const cellContainer = document.getElementById("cell_container")

// Creo la variabile row che inserisco all'interno del contenitore
const cellRow = document.createElement("div")
cellRow.classList.add("row", "row-cols-6", "gx-2", "gy-5")

cellContainer.append(cellRow)

// Creo il ciclo per creare le card
for (let i = 1; i <= 100; i++) {
    const cellCard = document.createElement("div")

    cellCard.classList.add("col", "m-0")

    let bgColor = "bg-danger"

    let cellText = i

    // Creo il contenuto delle card
    cellCard.innerHTML += `<div class="ratio ratio-1x1 cell ${bgColor}>"
                            <span>${cellText}</span>
                           </div>`

    console.log(cellCard)

    cellRow.append(cellCard)
}




