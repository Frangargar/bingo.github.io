document.getElementById('generateBingo').addEventListener('click', generateBingoCard);

function generateBingoCard() {
    const bingoItems = ["Jorgito", "Raquel", "Multipower libre", "T libre", "Adrian Catedra", "Manu", "Salva", "Monitor ligando", "Jorge hablando +6'", /* Añadir el resto de elementos aquí */];
    const bingoCardElement = document.getElementById('bingoCard');
    bingoCardElement.innerHTML = ''; // Limpiar el cartón anterior
    let usedIndexes = new Set();
    for (let i = 0; i < 16; i++) {
        if (i === 7) { // Dejar la casilla central libre
            bingoCardElement.innerHTML += '<div class="bingo-cell free">Libre</div>';
            continue;
        }
        let itemIndex;
        do {
            itemIndex = Math.floor(Math.random() * bingoItems.length);
        } while (usedIndexes.has(itemIndex));
        usedIndexes.add(itemIndex);
        const cell = document.createElement('div');
        cell.textContent = bingoItems[itemIndex];
        cell.classList.add('bingo-cell');
        cell.addEventListener('click', function() {
            this.classList.toggle('marked');
            checkBingo();
        });
        bingoCardElement.appendChild(cell);
    }
}

function checkBingo() {
    // Implementar la lógica para verificar líneas y bingo
    // Puede ser necesario ajustar la estructura para facilitar esta verificación
}

// Añadir funcionalidad para marcar casillas y verificar línea/bingo aquí
