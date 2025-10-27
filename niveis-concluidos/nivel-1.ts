// Sua missão: Criar a classe Defensor e instanciar dois objetos
// Exemplo de uso esperado:
// const defensor1 = new Defensor("Arthur", "Guerreiro", 10);
// const defensor2 = new Defensor("Morgana", "Mago", 12);

class Defensor {
    nome: string
    tipo: string
    ataque: number
}

     constructor(nome:string, tipo: string, ataque: number) {
             this.nome = nome
             this.tipo = tipo
             this.ataque = ataque 
}



const defensor1 = new Defensor ("Felipe", "Ladino", 10);
const defensor2 = new Defensor ("Elida", "Mago", 24);

console.log(defensor1);
console.log(defensor2);
