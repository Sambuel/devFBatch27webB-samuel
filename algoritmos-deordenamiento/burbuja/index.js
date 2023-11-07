
const arr = [0,12,67,4,2,1];

function oredenamientoBurbuja(arregloDeNumerosAOrdenar) {
    const total = arregloDeNumerosAOrdenar.length;

    for (let i= 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            if (arregloDeNumerosAOrdenar[j] > arregloDeNumerosAOrdenar[j + 1 ]) {
                [arregloDeNumerosAOrdenar[j], arregloDeNumerosAOrdenar [j + 1]] = [arregloDeNumerosAOrdenar[j+1], arregloDeNumerosAOrdenar[j]];
            }
        }
    }
    return arregloDeNumerosAOrdenar 
}

console.log(oredenamientoBurbuja(arr));