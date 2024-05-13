function concatenarString(nomes) {
    let texto = '';
    for (let index = 0; index < nomes.length - 1; index++) {
        texto = nomes[index] + ", ";
        
    }
    
    return texto + nomes[nomes.length-1];
}

function existeTexto(listaTextos, textoPesquisado) {
    const quantidadeDeTextos = listaTextos.length;

    for (let indice = 0; indice < quantidadeDeTextos; indice++) {
        if (listaTextos[indice] == textoPesquisado) {
            return true;
        } 
    }

    return false;
}

const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas == '' || comprar == '') {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let preco = 0;
    let nomes = [];
    let flag = false;
    for (let i = 0; i < ferramentas.length; i++) {
        flag = existeTexto(comprar,ferramentas[i].nome);

        if (flag) {
            preco += ferramentas[i].preco;
            nomes.push(ferramentas[i].nome);
        }
    }


    if (!flag && preco == 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }
    
    return `O valor a pagar pelas ferramentas (${concatenarString(nomes)}) é R$ ${preco.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}