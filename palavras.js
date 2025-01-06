const words = [
  {
    "english": "Time",
    "portuguese": ["tempo", "hora", "momento", "época"],
    "examples": [
      {
        "definition": "Tempo – Período em que algo acontece.",
        "en": "Time flies when you're having fun.",
        "pt": "O tempo voa quando você está se divertindo."
      },
      {
        "definition": "Hora – Momento específico no dia.",
        "en": "What time is it?",
        "pt": "Que horas são?"
      },
      {
        "definition": "Momento – Ponto ou evento em um período.",
        "en": "It was a time of great change.",
        "pt": "Foi um momento de grandes mudanças."
      },
      {
        "definition": "Época – Período histórico ou sazonal.",
        "en": "The medieval time was fascinating.",
        "pt": "A época medieval foi fascinante."
      }
    ]
  },
  {
    "english": "Year",
    "portuguese": ["ano"],
    "examples": [
      {
        "definition": "Ano – Período de 12 meses.",
        "en": "This year has been challenging.",
        "pt": "Este ano tem sido desafiador."
      },
      {
        "definition": "Ano – Idade de uma pessoa ou coisa.",
        "en": "She is eight years old.",
        "pt": "Ela tem oito anos de idade."
      },
      {
        "definition": "Ano – Período específico.",
        "en": "The year 2000 was a milestone.",
        "pt": "O ano 2000 foi um marco."
      },
      {
        "definition": "Ano – Unidade de tempo usada para cálculos.",
        "en": "Light travels many miles in a year.",
        "pt": "A luz viaja muitos quilômetros em um ano."
      }
    ]
  },
  {
    "english": "People",
    "portuguese": ["pessoas", "povo", "gente"],
    "examples": [
      {
        "definition": "Pessoas – Seres humanos no geral.",
        "en": "People are kind here.",
        "pt": "As pessoas são gentis aqui."
      },
      {
        "definition": "Povo – Comunidade ou nação.",
        "en": "The people of this country are resilient.",
        "pt": "O povo deste país é resiliente."
      },
      {
        "definition": "Gente – Grupo de indivíduos.",
        "en": "There's a lot of people at the event.",
        "pt": "Há muita gente no evento."
      },
      {
        "definition": "Pessoas – Indivíduos específicos.",
        "en": "She enjoys meeting new people.",
        "pt": "Ela gosta de conhecer novas pessoas."
      }
    ]
  },
  {
    "english": "Way",
    "portuguese": ["caminho", "maneira", "forma", "jeito"],
    "examples": [
      {
        "definition": "Caminho – Rota ou direção.",
        "en": "This is the way to the park.",
        "pt": "Este é o caminho para o parque."
      },
      {
        "definition": "Maneira – Método ou estilo.",
        "en": "He explained it in a simple way.",
        "pt": "Ele explicou de uma maneira simples."
      },
      {
        "definition": "Forma – Aspecto ou estrutura.",
        "en": "There’s no way to solve this now.",
        "pt": "Não há forma de resolver isso agora."
      },
      {
        "definition": "Jeito – Habilidade ou característica.",
        "en": "She has a way with words.",
        "pt": "Ela tem jeito com as palavras."
      }
    ]
  },
  {
    "english": "Day",
    "portuguese": ["dia", "jornada", "data", "período"],
    "examples": [
      {
        "definition": "Dia – Período de 24 horas.",
        "en": "Today is a sunny day.",
        "pt": "Hoje é um dia ensolarado."
      },
      {
        "definition": "Jornada – Período ativo de trabalho ou estudo.",
        "en": "He works an eight-hour day.",
        "pt": "Ele trabalha uma jornada de oito horas."
      },
      {
        "definition": "Data – Ocasião específica.",
        "en": "The big day is tomorrow.",
        "pt": "O grande dia é amanhã."
      },
      {
        "definition": "Período – Parte do dia.",
        "en": "He prefers to exercise during the day.",
        "pt": "Ele prefere se exercitar durante o dia."
      }
    ]
  },
  {
    "english": "Man",
    "portuguese": ["homem", "ser humano", "macho"],
    "examples": [
      {
        "definition": "Homem – Pessoa do sexo masculino.",
        "en": "He is a tall man.",
        "pt": "Ele é um homem alto."
      },
      {
        "definition": "Ser humano – Espécie humana.",
        "en": "Man has always been curious about the stars.",
        "pt": "O ser humano sempre foi curioso sobre as estrelas."
      },
      {
        "definition": "Macho – Macho de espécies animais.",
        "en": "The male lion is a majestic animal.",
        "pt": "O leão macho é um animal majestoso."
      },
      {
        "definition": "Homem – Figura representativa.",
        "en": "The man in charge gave the orders.",
        "pt": "O homem responsável deu as ordens."
      }
    ]
  },
  {
    "english": "Thing",
    "portuguese": ["coisa", "objeto", "assunto", "fato"],
    "examples": [
      {
        "definition": "Coisa – Objeto indefinido.",
        "en": "I forgot my thing at home.",
        "pt": "Esqueci minha coisa em casa."
      },
      {
        "definition": "Objeto – Algo tangível.",
        "en": "This thing is very fragile.",
        "pt": "Esta coisa é muito frágil."
      },
      {
        "definition": "Assunto – Tema ou tópico.",
        "en": "The thing is, I’m not ready.",
        "pt": "A questão é que não estou pronto."
      },
      {
        "definition": "Fato – Evento ou ocorrência.",
        "en": "It’s a thing that happened yesterday.",
        "pt": "É um fato que aconteceu ontem."
      }
    ]
  },
  {
    "english": "Woman",
    "portuguese": ["mulher", "fêmea", "dama", "senhora"],
    "examples": [
      {
        "definition": "Mulher – Pessoa do sexo feminino.",
        "en": "She is a kind woman.",
        "pt": "Ela é uma mulher gentil."
      },
      {
        "definition": "Fêmea – Fêmea de espécies animais.",
        "en": "The female wolf is a protective animal.",
        "pt": "A loba é um animal protetor."
      },
      {
        "definition": "Dama – Figura respeitável.",
        "en": "She is a woman of grace.",
        "pt": "Ela é uma dama de graça."
      },
      {
        "definition": "Senhora – Termo formal para mulheres mais velhas.",
        "en": "The woman at the counter helped me.",
        "pt": "A senhora no balcão me ajudou."
      }
    ]
  },
  {
    "english": "Life",
    "portuguese": ["vida", "existência", "vitalidade", "mundo"],
    "examples": [
      {
        "definition": "Vida – Estado de estar vivo.",
        "en": "Life is precious.",
        "pt": "A vida é preciosa."
      },
      {
        "definition": "Existência – Experiência de viver.",
        "en": "He devoted his life to science.",
        "pt": "Ele dedicou sua existência à ciência."
      },
      {
        "definition": "Vitalidade – Energia ou força.",
        "en": "She is full of life.",
        "pt": "Ela está cheia de vitalidade."
      },
      {
        "definition": "Mundo – Modo de viver ou realidade.",
        "en": "Life in the city is fast-paced.",
        "pt": "A vida na cidade é acelerada."
      }
    ]
  },
  {
    "english": "Child",
    "portuguese": ["criança", "filho", "menino", "menina"],
    "examples": [
      {
        "definition": "Criança – Pessoa jovem.",
        "en": "The child is playing in the park.",
        "pt": "A criança está brincando no parque."
      },
      {
        "definition": "Filho – Descendente.",
        "en": "She is proud of her child.",
        "pt": "Ela está orgulhosa do seu filho."
      },
      {
        "definition": "Menino – Pessoa jovem do sexo masculino.",
        "en": "The child is a boy.",
        "pt": "A criança é um menino."
      },
      {
        "definition": "Menina – Pessoa jovem do sexo feminino.",
        "en": "The child is a girl.",
        "pt": "A criança é uma menina."
      }
    ]
  },
  {
    "english": "World",
    "portuguese": ["mundo", "planeta", "universo", "sociedade"],
    "examples": [
      {
        "definition": "Mundo – O planeta Terra.",
        "en": "The world is a beautiful place.",
        "pt": "O mundo é um lugar bonito."
      },
      {
        "definition": "Planeta – Corpo celeste habitável.",
        "en": "Earth is the only world we know with life.",
        "pt": "A Terra é o único planeta conhecido com vida."
      },
      {
        "definition": "Universo – Realidade existente.",
        "en": "He dreams of exploring other worlds.",
        "pt": "Ele sonha em explorar outros mundos."
      },
      {
        "definition": "Sociedade – Conjunto global de pessoas.",
        "en": "We live in a connected world.",
        "pt": "Vivemos em um mundo conectado."
      }
    ]
  },
  {
    "english": "School",
    "portuguese": ["escola", "colégio", "instituição", "aula"],
    "examples": [
      {
        "definition": "Escola – Local de ensino.",
        "en": "She goes to school every day.",
        "pt": "Ela vai para a escola todos os dias."
      },
      {
        "definition": "Colégio – Instituição educacional.",
        "en": "He attends a private school.",
        "pt": "Ele frequenta um colégio particular."
      },
      {
        "definition": "Instituição – Organização educacional.",
        "en": "The school has a good reputation.",
        "pt": "A instituição tem boa reputação."
      },
      {
        "definition": "Aula – Sessão de aprendizado.",
        "en": "We have math class at school.",
        "pt": "Temos aula de matemática na escola."
      }
    ]
  },
  {
    "english": "Place",
    "portuguese": ["lugar", "local", "situação", "posição"],
    "examples": [
      {
        "definition": "Lugar – Localização ou área.",
        "en": "This is a beautiful place.",
        "pt": "Este é um lugar bonito."
      },
      {
        "definition": "Local – Ponto específico.",
        "en": "He is at the place of the accident.",
        "pt": "Ele está no local do acidente."
      },
      {
        "definition": "Situação – Condição ou estado.",
        "en": "She is in a difficult place right now.",
        "pt": "Ela está em uma situação difícil agora."
      },
      {
        "definition": "Posição – Ordem ou classificação.",
        "en": "He finished in first place.",
        "pt": "Ele terminou em primeiro lugar."
      }
    ]
  },
  {
    "english": "Family",
    "portuguese": ["família", "parentes", "grupo", "lar"],
    "examples": [
      {
        "definition": "Família – Pessoas relacionadas por laços de sangue ou casamento.",
        "en": "My family is very supportive.",
        "pt": "Minha família é muito solidária."
      },
      {
        "definition": "Parentes – Pessoas com vínculos familiares.",
        "en": "We visited our family during the holidays.",
        "pt": "Visitamos nossos parentes durante as férias."
      },
      {
        "definition": "Grupo – Pessoas próximas.",
        "en": "They are like family to me.",
        "pt": "Eles são como família para mim."
      },
      {
        "definition": "Lar – Unidade familiar.",
        "en": "He wants to start a family.",
        "pt": "Ele quer formar uma família."
      }
    ]
  },
  {
    "english": "Student",
    "portuguese": ["estudante", "aluno", "discente", "aprendiz"],
    "examples": [
      {
        "definition": "Estudante – Pessoa matriculada em curso.",
        "en": "She is a college student.",
        "pt": "Ela é uma estudante universitária."
      },
      {
        "definition": "Aluno – Participante de aulas.",
        "en": "The student asked a question.",
        "pt": "O aluno fez uma pergunta."
      },
      {
        "definition": "Discente – Termo formal para aluno.",
        "en": "The students prepared their projects.",
        "pt": "Os discentes prepararam seus projetos."
      },
      {
        "definition": "Aprendiz – Pessoa em processo de aprendizado.",
        "en": "He is a diligent student.",
        "pt": "Ele é um aprendiz dedicado."
      }
    ]
  },
  {
    "english": "Group",
    "portuguese": ["grupo", "equipe", "conjunto", "turma"],
    "examples": [
      {
        "definition": "Grupo – Conjunto de pessoas.",
        "en": "They work in a group.",
        "pt": "Eles trabalham em grupo."
      },
      {
        "definition": "Equipe – Pessoas unidas por um propósito.",
        "en": "Our group won the competition.",
        "pt": "Nosso grupo venceu a competição."
      },
      {
        "definition": "Conjunto – Coletivo organizado.",
        "en": "A group of scientists made the discovery.",
        "pt": "Um conjunto de cientistas fez a descoberta."
      },
      {
        "definition": "Turma – Estudantes em uma mesma classe.",
        "en": "The group presented their project.",
        "pt": "A turma apresentou seu projeto."
      }
    ]
  },
  {
    "english": "Country",
    "portuguese": ["país", "nação", "território", "pátria"],
    "examples": [
      {
        "definition": "País – Unidade política e geográfica.",
        "en": "Brazil is a beautiful country.",
        "pt": "O Brasil é um país bonito."
      },
      {
        "definition": "Nação – Comunidade organizada.",
        "en": "The country declared independence.",
        "pt": "A nação declarou independência."
      },
      {
        "definition": "Território – Área geográfica.",
        "en": "The country covers a large area.",
        "pt": "O país cobre uma grande área."
      },
      {
        "definition": "Pátria – Lugar de origem.",
        "en": "He loves his country.",
        "pt": "Ele ama sua pátria."
      }
    ]
  },
  {
    "english": "Problem",
    "portuguese": ["problema", "dificuldade", "questão", "desafio"],
    "examples": [
      {
        "definition": "Problema – Questão que precisa ser resolvida.",
        "en": "We need to solve this problem.",
        "pt": "Precisamos resolver este problema."
      },
      {
        "definition": "Dificuldade – Objeto de preocupação.",
        "en": "He has a financial problem.",
        "pt": "Ele tem um problema financeiro."
      },
      {
        "definition": "Questão – Assunto em debate.",
        "en": "This raises an ethical problem.",
        "pt": "Isso levanta uma questão ética."
      },
      {
        "definition": "Desafio – Obstáculo a superar.",
        "en": "It's a difficult problem to tackle.",
        "pt": "É um desafio difícil de enfrentar."
      }
    ]
  },
  {
    "english": "Hand",
    "portuguese": ["mão", "ajuda", "controle", "ponteiro"],
    "examples": [
      {
        "definition": "Mão – Parte do corpo.",
        "en": "He raised his hand.",
        "pt": "Ele levantou a mão."
      },
      {
        "definition": "Ajuda – Assistência.",
        "en": "Can you give me a hand?",
        "pt": "Você pode me dar uma mão?"
      },
      {
        "definition": "Controle – Autoridade sobre algo.",
        "en": "The project is in your hands.",
        "pt": "O projeto está em suas mãos."
      },
      {
        "definition": "Ponteiro – Relógio analógico.",
        "en": "The clock’s hands moved slowly.",
        "pt": "Os ponteiros do relógio se moveram lentamente."
      }
    ]
  },
  {
  "english": "Part",
  "portuguese": ["parte", "peça", "papel", "trecho"],
  "examples": [
    {
      "definition": "Parte – Porção de um todo.",
      "en": "This is part of the plan.",
      "pt": "Isto é parte do plano."
    },
    {
      "definition": "Peça – Componente de algo.",
      "en": "We need a new part for the machine.",
      "pt": "Precisamos de uma nova peça para a máquina."
    },
    {
      "definition": "Papel – Função desempenhada por alguém.",
      "en": "He played an important part in the project.",
      "pt": "Ele desempenhou um papel importante no projeto."
    },
    {
      "definition": "Trecho – Seção de algo.",
      "en": "I liked this part of the book.",
      "pt": "Eu gostei deste trecho do livro."
    }
  ]
 }  
];
