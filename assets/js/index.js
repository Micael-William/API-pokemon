const mostrarPokemon = document.getElementById('boxes-pokens');
const input = document.getElementById('item')
const botao = document.getElementById('botao')

// const valor = 20
function chamar(valor){
  const valorInput = input.value
  for(let i = 0; i < valorInput ; i++){
    criarConexao(i)
  }
}

async function criarConexao(pokemon) {
  const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const url = await fetch(api)
  const data = await url.json()
  criaElemento(data)
}

const colors = {
  black: '#272727',
  white: '#FFFFFF',
  grey: '#919191',
  lightGrey: '#E7E7E8',
  semiGrey: '#F4F5F4',
  red: '#FA6555',
  green: '#41D168',
  blue: '#0055D4',
  lilac: '#6C79DB',
}
function criaElemento(poke){
  // style="${poke['types'][0]['type']['name'] === "grass" ? `background-color=${colors.green}` : "não"}"

  mostrarPokemon.innerHTML += `
    <div class="container-poken" >
    <span class="campo-id"></span>
      <span class="box-imagem">
       <img class="imagem-poken" src="${poke['sprites']
       ['versions']
       ['generation-v']
       ['black-white']
       ['animated']
       ['front_default']}" alt="${poke['name']}">
      </span>
    
      <div class="fundo-poken">
      <span class="nome-poken"> ${poke['id']}  ${poke['name']}</span>
     
        <div class="exp-poken">
          <span class="numero-exp-poken exp-legenda"> <span class="tipo-legenda">Experiência</span> <span class="tipo"> ${poke['base_experience']} </span>
           </span>
          <span class="numero-exp-poken exp">
           <span class="tipo-exp ">Tipo</span> <span class="tipo"> ${poke['types'][0]['type']['name']} </span>
          </span>
        </div>
          
      </div>
    </div>
  `;  
}
// chamar(150)

botao.addEventListener('click', chamar)

