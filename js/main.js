const form = document.getElementById('tela');

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const campo = evento.target["item"]
  const item = campo.value;

  request(item);

})


const view = document.getElementById('boxes-pokens');
const imagem = document.getElementById('img');

async function request(item){

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${item}/`;
    const api = await fetch(url);
    const json = await api.json()
    const listaPokemon = [];
    listaPokemon.push(json);

    console.log(json) 


    listaPokemon.forEach(elemento => {
      view.innerHTML += `
      <div class="container-poken">
        <img class="images-poken" src="${elemento.sprites.front_shiny}" alt="${elemento.name}">
        
        <div class="fundo-poken">
          <p class="id">#${elemento.id}</p>
          <p class="nome-poken"> ${elemento.name}</p>
          <div class="exp-poken">
            <span class="numero-exp-poken exp-legenda">Experiência</span>
            <span class="numero-exp-poken exp">
              ${elemento.base_experience}
            </span>
          </div>
        </div>
      </div>
    `;
    })
    
    
    
  } catch (error) {
    if(error){
      alert("Pokemon não encontrado...")
    }
  }
}