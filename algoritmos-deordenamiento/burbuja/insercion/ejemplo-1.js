function oredenamientoPorInsercion(numerosAOrdenar) {
    for (let i = 1; i < numerosAOrdenar.length; i++) {
        let j = i;
        while (j >= i && numerosAOrdenar[j] < numerosAOrdenar[j - 1]) {
            [numerosAOrdenar[j - 1 ], numerosAOrdenar[j], ]
        }
    }
}