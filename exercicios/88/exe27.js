function comparaAlturas(altura1, taxa1, altura2, taxa2) {
    let tempo = 0;
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            console.log(`Criança 1 passará a Criança 2 em 1 ano.`);
        } else if (taxa1 < taxa2) {
            console.log(`Criança 2 passará a Criança 1 em 1 ano.`);
        } else {
            console.log("As duas crianças possuem a mesma altura");
        }
    } else if (altura1 < altura2) {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 < altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 1 passou a Criança 2 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    } else {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 > altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 2 passou a Criança 1 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    }
}

comparaAlturas(50, 0.05, 50, 0.06);