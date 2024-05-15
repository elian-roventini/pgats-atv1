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
        if (listaTextos[indice].nome == textoPesquisado) {
            return true;
        } 
    }

    return false;
}

function precoFerramenta(listaFerramentas, textoPesquisado) {
    const quantidadeDeTextos = listaFerramentas.length;

    for (let indice = 0; indice < quantidadeDeTextos; indice++) {
        if (listaFerramentas[indice].nome == textoPesquisado) {
            return listaFerramentas[indice].preco;
        } 
    }

    return 0;
}

const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas == '' || comprar == '') {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    let preco = 0;
    let nomes = [];
    let flag = false;
    for (let i = 0; i < comprar.length; i++) {
        flag = existeTexto(ferramentas, comprar[i]);

        if (flag) {
            preco += precoFerramenta(ferramentas, comprar[i]);
            nomes.push(comprar[i]);
        }
    }


    if (!flag && preco == 0 && nomes == '') {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }
    
    return `O valor a pagar pelas ferramentas (${concatenarString(nomes)}) é R$ ${preco.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}