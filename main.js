const sinaleira = document.querySelector('[data-tipo="sinaleira"]')
const botoes = document.querySelector('[data-tipo="botoes"]')


let i=0
let tempo = null
const trocaLuz = (evento)=>{
    zeraTempo()
    troca[evento.target.dataset.tipo]()
    
}

const proximaCor = () => i = i < 2 ? ++i : 0

const trocaCor = () =>{
    const cores = ['botaoVermelho', 'botaoAmarelo' , 'botaoVerde']
    const cor = cores[i]
    troca[cor]()
    proximaCor()
}

const zeraTempo = () =>{
    clearInterval(tempo)
    i=0
}

const troca = {
    'botaoVermelho': () => sinaleira.src='./Imagens/vermelho.png',
    'botaoAmarelo': () => sinaleira.src='./Imagens/amarelo.png',
    'botaoVerde': () => sinaleira.src='./Imagens/verde.png',
    'botaoAutoMatico': () => tempo = setInterval(trocaCor,1000)
}

botoes.addEventListener('click',trocaLuz)