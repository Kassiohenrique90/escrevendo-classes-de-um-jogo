let nomePersonagem = "SupremoMix"
let idadePersonagem = 29
let tipoClassePersonagem = "Ninja"

let tipoClassePersonagemMaiusculo = tipoClassePersonagem.toUpperCase();
const classeDisponiveis = ["MAGO","GUERREIRO","MONGE","NINJA"];
const ataqueClasse = ["magia", "espada", "artes marciais", "shuriken"];

function escolhaAtaque() {

  for (let index = 0; index < classeDisponiveis.length; index++) {

    if (tipoClassePersonagemMaiusculo == classeDisponiveis[index]) {

      return ataqueClasse[index];
      
    } 
     
  }
   
   
}

let ataqueDaClasseEscolhida = escolhaAtaque();

class ataque {

  constructor (classe, ataque) {
    this.classe = classe;
    this.ataque = ataque;
  }

  escrever(){

    console.log (`O ${this.classe} atacou usando ${this.ataque}`)
     
  }
   
}

let acaoDeAtaque = new ataque (tipoClassePersonagem, ataqueDaClasseEscolhida);

acaoDeAtaque.escrever();