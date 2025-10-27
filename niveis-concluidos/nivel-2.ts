// Sua missão: Criar a hierarquia de criaturas místicas

// Classe abstrata
abstract class CriaturaMistica {
    nome: string
    elemento: string

    constructor(nome: string, elemento: string) {
        this.nome = nome
        this.elemento = elemento
    }

    
    abstract atacar(): void
}

// Interface
interface PoderElemental {
    atacar(): void
}

// Classe concreta
class DragaoDeFogo extends CriaturaMistica implements PoderElemental {
    constructor(nome: string) {
        super(nome, "fogo")
    }

    atacar(): void {
        console.log(`${this.nome} está atacando com o elemento ${this.elemento}!`)
    }
}

const draco = new DragaoDeFogo("Draco Flamejante")
draco.atacar()
