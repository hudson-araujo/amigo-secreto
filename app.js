//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
  const input = document.getElementById('amigo')
  const nome = input.value.trim()
  if (nome === '') return

  // Verificar se o nome já está na lista, ignorando maiúsculas/minúsculas
  const nomeLower = nome.toLowerCase()
  if (amigos.some(amigo => amigo.toLowerCase() === nomeLower)) {
    alert('Este nome já foi adicionado à lista de amigos!')
    input.value = ''
    return
  }

  amigos.push(nome)
  input.value = ''
  atualizarListaAmigos()
}

function atualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos')
  lista.innerHTML = ''

  for (let amigo of amigos) {
    let item = document.createElement('li')
    item.textContent = amigo
    lista.appendChild(item)
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = ''

  if (amigos.length === 0) {
    resultado.innerHTML = 'Nenhum amigo disponível para sorteio.'
    return
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length)
  const amigoSorteado = amigos[indiceSorteado]

  let item = document.createElement('li')
  item.textContent = `Amigo sorteado: ${amigoSorteado}`
  resultado.appendChild(item)
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.button-add')
    .addEventListener('click', adicionarAmigo)
  document.querySelector('.button-draw').addEventListener('click', sortearAmigo)
})
