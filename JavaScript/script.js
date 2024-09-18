if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    const removerProdutoBotao = document.getElementsByClassName("botao-remover")
    for (var i = 0; i < removerProdutoBotao.length; i++) {
        removerProdutoBotao[i].addEventListener("click", removerProduto)
    }

    const quantidadeInput = document.getElementsByClassName("produto-qtd")
    for (var i = 0; i < quantidadeInput.length; i++) {
        quantidadeInput[i].addEventListener("change", updateTotal)
    }


    const adicionarProdutoBotao = document.getElementsByClassName("encomenda")
    for (var i = 0; i < adicionarProdutoBotao.length; i++) {
        adicionarProdutoBotao[i].addEventListener("click", adicionarProduto)
    }

    const fecharBotao = document.getElementById("fechar")
    fecharBotao.addEventListener("click", fecharModal)
    
    window.onclick = foraTela
    
}

// Remover produto
function removerProduto(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}

// Atualizar preço
function updateTotal() {
    let total = 0
    const carrinhoProduto = document.getElementsByClassName("carrinho-produto")
    for (var i = 0; i < carrinhoProduto.length; i++) {
        const valorProduto = carrinhoProduto[i].getElementsByClassName("valor-produto")[0].innerText.replace("R$", "").replace(",", ".")
        const produtoQtd = carrinhoProduto[i].getElementsByClassName("produto-qtd")[0].value
        total += valorProduto * produtoQtd
    }

    total = total.toFixed(2)
    total = total.replace(".", ",")
    document.getElementById("valor-total").innerText = "R$" + total
}

var main = document.getElementById("main")
var modal = document.getElementById("abrir-modal")
// Modal para confirmar adição no carrinho
function adicionarProduto() {
    modal.style.display = 'block';
}

// Fechar modal no botão
function fecharModal(){
    modal.style.display = 'none';
}
// Abrir menu responsivo
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".menu");
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// Fechar modal fora da tela
function foraTela(event){
    if (event.target == modal) {
        modal.style.display = 'none';
    }

    if (event.target == main) {
        nav.classList.toggle("active");
    }
}
