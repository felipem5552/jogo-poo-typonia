import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Sword, Shield, Zap, BookOpen, Trophy, Star, Code, Play, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [maxXp, setMaxXp] = useState(100)
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userCode, setUserCode] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState([])

  const levels = [
    { id: 1, title: "Neófito do Código", concept: "Variáveis e Tipos Básicos", region: "Vila da Instanciação" },
    { id: 2, title: "Iniciado em Objetos", concept: "Classes e Objetos", region: "Vila da Instanciação" },
    { id: 3, title: "Construtor de Mundos", concept: "Construtores e Métodos", region: "Arredores da Vila" },
    { id: 4, title: "Arquiteto da Abstração", concept: "Classes Abstratas", region: "Montanhas da Abstração" },
    { id: 5, title: "Mestre da Simplificação", concept: "Interfaces", region: "Montanhas da Abstração" },
    { id: 6, title: "Guardião do Encapsulamento", concept: "Atributos Privados e Públicos", region: "Fortaleza do Encapsulamento" },
    { id: 7, title: "Protetor dos Segredos", concept: "Getters e Setters", region: "Fortaleza do Encapsulamento" },
    { id: 8, title: "Herdeiro do Conhecimento", concept: "Herança Simples", region: "Floresta da Herança" },
    { id: 9, title: "Mestre das Linhagens", concept: "Herança Múltipla", region: "Floresta da Herança" },
    { id: 10, title: "Metamorfo do Código", concept: "Polimorfismo", region: "Cavernas do Polimorfismo" },
    { id: 11, title: "Mestre da Sobrescrita", concept: "Sobrescrita de Métodos", region: "Cavernas do Polimorfismo" },
    { id: 12, title: "Mestre dos Objetos", concept: "Domínio dos 4 Pilares", region: "O Código Espaguete" }
  ]

  const challenges = [
    {
      id: 1,
      title: "A Vila da Instanciação - Classes e Objetos",
      description: "A Vila da Instanciação está sob ataque de pequenos Glitches. Para defendê-la, você precisa criar defensores. Cada defensor é um Objeto de uma Classe específica.",
      objective: "Crie uma Classe chamada 'Defensor' e, em seguida, instancie dois Objetos dessa classe.",
      requirements: [
        "Defina uma Classe chamada 'Defensor'",
        "A classe deve ter propriedades: nome (string), tipo (string), ataque (number)",
        "Crie um construtor que inicialize essas propriedades",
        "Instancie dois objetos da classe Defensor com valores diferentes"
      ],
      starterCode: `// Sua missão: Criar a classe Defensor e instanciar dois objetos
// Exemplo de uso esperado:
// const defensor1 = new Defensor("Arthur", "Guerreiro", 10);
// const defensor2 = new Defensor("Morgana", "Mago", 12);

class Defensor {
    // Implemente aqui
}

// Crie os objetos aqui
`,
      solution: `class Defensor {
    nome: string;
    tipo: string;
    ataque: number;

    constructor(nome: string, tipo: string, ataque: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.ataque = ataque;
    }
}

const defensor1 = new Defensor("Arthur", "Guerreiro", 10);
const defensor2 = new Defensor("Morgana", "Mago", 12);

console.log(defensor1);
console.log(defensor2);`
    },
    {
      id: 2,
      title: "As Montanhas da Abstração - Classes Abstratas",
      description: "Nas Montanhas da Abstração, você encontra criaturas místicas. Você precisa modelar essas criaturas de forma genérica, focando em suas características essenciais.",
      objective: "Crie uma Classe Abstrata para 'CriaturaMistica' e uma Interface para 'PoderElemental'.",
      requirements: [
        "Defina uma Classe Abstrata chamada 'CriaturaMistica'",
        "Deve ter propriedades nome e elemento",
        "Deve ter um método abstrato 'atacar()'",
        "Crie uma classe concreta 'DragaoDeFogo' que estenda CriaturaMistica"
      ],
      starterCode: `// Sua missão: Criar a hierarquia de criaturas místicas

abstract class CriaturaMistica {
    // Implemente aqui
}

interface PoderElemental {
    // Defina a interface aqui
}

class DragaoDeFogo extends CriaturaMistica implements PoderElemental {
    // Implemente aqui
}
`,
      solution: `abstract class CriaturaMistica {
    nome: string;
    elemento: string;

    constructor(nome: string, elemento: string) {
        this.nome = nome;
        this.elemento = elemento;
    }

    abstract atacar(): string;
}

interface PoderElemental {
    usarPoder(): string;
}

class DragaoDeFogo extends CriaturaMistica implements PoderElemental {
    constructor(nome: string) {
        super(nome, "Fogo");
    }

    atacar(): string {
        return \`\${this.nome} cospe fogo!\`;
    }

    usarPoder(): string {
        return \`\${this.nome} invoca uma bola de fogo massiva!\`;
    }
}`
    }
  ]

  const handleStartGame = () => {
    setGameStarted(true)
  }

  const handleSubmitCode = () => {
    // Simulação de verificação de código
    const isCorrect = userCode.includes('class') && userCode.includes('constructor')
    
    if (isCorrect) {
      setCompletedChallenges([...completedChallenges, currentChallenge])
      setXp(xp + 50)
      
      if (xp + 50 >= maxXp) {
        setCurrentLevel(currentLevel + 1)
        setXp(0)
        setMaxXp(maxXp + 25)
      }
      
      alert('Parabéns! Desafio concluído com sucesso!')
    } else {
      alert('Código incompleto. Tente novamente!')
    }
  }

  const handleNextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1)
      setUserCode(challenges[currentChallenge + 1].starterCode)
    }
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-black/20 backdrop-blur-sm border-purple-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white mb-4">
              🏰 A Lenda de Typetania
            </CardTitle>
            <CardDescription className="text-xl text-purple-200 mb-6">
              O Despertar do Mestre dos Objetos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-white space-y-4">
              <p className="text-lg">
                Bem-vindo ao reino de Typetania, uma terra mística onde a realidade é tecida 
                com os fios da Programação Orientada a Objetos.
              </p>
              <p>
                Uma sombra ameaçadora, a "Praga dos Bugs", começou a se espalhar pelo reino. 
                Você é a última esperança como Aprendiz de Código!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="text-center p-4 bg-purple-800/30 rounded-lg">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm">Abstração</p>
                </div>
                <div className="text-center p-4 bg-purple-800/30 rounded-lg">
                  <Sword className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <p className="text-sm">Encapsulamento</p>
                </div>
                <div className="text-center p-4 bg-purple-800/30 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <p className="text-sm">Herança</p>
                </div>
                <div className="text-center p-4 bg-purple-800/30 rounded-lg">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm">Polimorfismo</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button 
                onClick={handleStartGame}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Iniciar Jornada
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header com Status do Jogador */}
        <Card className="mb-6 bg-black/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="text-white">
                  <h2 className="text-xl font-bold">{levels[currentLevel - 1]?.title}</h2>
                  <p className="text-purple-200">Nível {currentLevel} - {levels[currentLevel - 1]?.region}</p>
                </div>
                <Badge variant="secondary" className="bg-purple-600 text-white">
                  <Trophy className="w-4 h-4 mr-1" />
                  {completedChallenges.length} Desafios
                </Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-white text-right">
                  <p className="text-sm">XP: {xp}/{maxXp}</p>
                  <Progress value={(xp / maxXp) * 100} className="w-32" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(currentLevel)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Painel de Desafio */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  {challenges[currentChallenge]?.title}
                </CardTitle>
                <CardDescription className="text-purple-200">
                  {challenges[currentChallenge]?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="challenge" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="challenge">Desafio</TabsTrigger>
                    <TabsTrigger value="code">Código</TabsTrigger>
                    <TabsTrigger value="solution">Solução</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="challenge" className="space-y-4">
                    <div className="text-white">
                      <h3 className="font-semibold mb-2">Objetivo:</h3>
                      <p className="mb-4">{challenges[currentChallenge]?.objective}</p>
                      
                      <h3 className="font-semibold mb-2">Requisitos:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {challenges[currentChallenge]?.requirements.map((req, index) => (
                          <li key={index} className="text-purple-200">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="code" className="space-y-4">
                    <div>
                      <label className="text-white font-semibold mb-2 block">
                        Seu Código TypeScript:
                      </label>
                      <Textarea
                        value={userCode || challenges[currentChallenge]?.starterCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="min-h-[300px] font-mono text-sm bg-gray-900 text-green-400 border-purple-500/30"
                        placeholder="Digite seu código aqui..."
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSubmitCode} className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Verificar Código
                      </Button>
                      {completedChallenges.includes(currentChallenge) && (
                        <Button onClick={handleNextChallenge} variant="outline">
                          Próximo Desafio
                        </Button>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="solution" className="space-y-4">
                    <div className="text-white">
                      <h3 className="font-semibold mb-2">Solução de Referência:</h3>
                      <pre className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                        <code>{challenges[currentChallenge]?.solution}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Mapa de Progressão */}
            <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Mapa de Typetania</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <div
                        key={level.id}
                        className={`p-3 rounded-lg border ${
                          level.id === currentLevel
                            ? 'bg-purple-600/30 border-purple-400'
                            : level.id < currentLevel
                            ? 'bg-green-600/20 border-green-400'
                            : 'bg-gray-600/20 border-gray-500'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-sm">{level.title}</p>
                            <p className="text-purple-200 text-xs">{level.region}</p>
                          </div>
                          {level.id < currentLevel && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                          {level.id === currentLevel && (
                            <Star className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Guia Syntax */}
            <Card className="bg-black/20 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Syntax, o Sábio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-purple-200 space-y-2">
                  <p className="text-sm">
                    "Jovem aprendiz, lembre-se: em POO, cada classe é como um molde, 
                    e cada objeto é uma criação única desse molde."
                  </p>
                  <p className="text-xs italic">
                    Dica: Use o console.log() para ver os resultados dos seus objetos!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
