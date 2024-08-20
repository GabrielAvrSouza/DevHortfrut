
const morango = 2.99, maca = 3.98, mamao = 3.98, banana = 3.98, abacate = 3.99, lichia = 9.99, melancia = 3.98, abacaxi = 2.90
const Produtos = [
    { name: "morango", preco: morango }, { name: "maçã", preco: maca }, { name: "mamao", preco: mamao },
    { name: "banana", preco: banana }, { name: "abacate", preco: abacate }, { name: "lichia", preco: lichia },
    { name: "melancia", preco: melancia }, { name: "abacaxi", preco: abacaxi }
]

let total = 0

function adicionar() {
    const input = document.querySelector("input")
    Produtos.forEach(value => {
        if (input.value == value.name) {
            total = total + value.preco
        }
    });
    input.focus()
    input.value = ""
}



function finalizar() {
    const mask = document.querySelector(".mask")
    const form = document.querySelector(".confirmação-compra")
    const exibirPreco = document.querySelector(".valor-total")


    form.style.left = ("43%")
    mask.style.visibility = "visible"
    exibirPreco.innerHTML = `O valor total dos Produtos Ficou em R$${total.toFixed(2)}`
    // Tela Responsiva
    if (innerWidth < 1100) {
        form.style.left = ("10%")
    }
}



function finalizarCompra() {
    const mask = document.querySelector(".mask")
    const form = document.querySelector(".confirmação-compra")
    const pedidoefetuado = document.querySelector(".compra-Finalizada")

    total = 0
    form.style.left = ("-300px")
    mask.style.visibility = "hidden"
    pedidoefetuado.style.left = ("43%")
    mask.style.visibility = "visible"
    // Tela Responsiva
    if (innerWidth < 1100) {
        pedidoefetuado.style.left = ("10%")
        form.style.left = ("-300px")
    }
}



function hiddenMask() {
    const pedidoefetuado = document.querySelector(".compra-Finalizada")
    const mask = document.querySelector(".mask")
    pedidoefetuado.style.left = ("-300px")
    mask.style.visibility = "hidden"

}
