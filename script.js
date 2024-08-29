const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a obra de arte mais cara já arrematada em um leilão?",
        alternativas: [
            {
                texto: "O Grito, de Edvard Munch",
                afirmacao: "Salvator Mundi, de Leonardo da Vinci,"
            },
            {
                texto: "Salvator Mundi, de Leonardo da Vinci",
                afirmacao: "Salvator Mundi, de Leonardo da Vinci,"
            }          
           
        ]
    },
    {
        enunciado: " Qual o país mais novo do mundo?",
        alternativas: [
            {
                texto:"Kosovo",
                afirmacao:"Sudão do Sul,"
            },
            {
                texto: "Sudão do Sul",
                afirmacao:"Sudão do Sul,"
            }
        ]
    },
    {
        enunciado: " Quem foi a primeira mulher a viajar para o espaço?",
        alternativas: [
            {
                texto:" Kathryn D. Sullivan",
                afirmacao:"Valentina Tereshkova,"
            },
            {
                texto:"Valentina Tereshkova",
                afirmacao:" Valentina Tereshkova,"
            }
           
        ]
    },
    {
        enunciado: "Quem foram os primeiros escaladores a conquistar o pico do Everest?",
        alternativas: [
            {
                texto:"  Maurice Herzog e Louis Lachenal",
                afirmacao:"Edmund Hillary e Tenzing Norgay ,"
            },
            {
                texto:"Edmund Hillary e Tenzing Norgay",
                afirmacao:"Edmund Hillary e Tenzing Norgay,"
            }
           
        ]
    },
    {
        enunciado: "Qual o nome do evento astronômico responsável pelo dia mais longo do ano?",
        alternativas: [
            {
                texto: "Solstício de verão",
                afirmacao:"Equinócio de primavera."
            },
            {
                texto: "Equinócio de primavera",
                afirmacao:"Solstício de verão"
            }
           
           
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Gabarito";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
