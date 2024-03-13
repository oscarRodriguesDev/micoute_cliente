import { useState } from "react";
import styles from "./styles.module.scss";

interface Pergunta {
  texto: string;
  porcentagem: number;
}

const perguntasData: Pergunta[] = [
  {
    texto:
      "Estamos abertos a contribuições criativas entre nossos colaboradores?",
    porcentagem: 2.08,
  },
  {
    texto: "Quão comprometido estamos em desenvolver pessoas continuamente?",
    porcentagem: 2.08,
  },
  {
    texto: "Quão importante são as iniciativas de bem-estar na organização?",
    porcentagem: 2.08,
  },
  {
    texto:
      "Há eventos regulares que promovem a interação entre os funcionários?",
    porcentagem: 2.08,
  },
  {
    texto:
      "A cultura organizacional é flexível o suficiente para se adaptar a novos desafios?",
    porcentagem: 2.08,
  },
  {
    texto: "Os erros são vistos como oportunidades de aprendizado?",
    porcentagem: 2.08,
  },
  {
    texto:
      "Quão comprometido estamos em promover um ambiente de aprendizado mutuo?",
    porcentagem: 2.5,
  },
  {
    texto:
      "Quão disposto estamos para incorporar elementos de diversão nas jornadas de trabalho para torna-la mais agradável?",
    porcentagem: 2.5,
  },
  {
    texto:
      "Quão estamos comprometidos para promover um ambiente de descontração e informalidade?",
    porcentagem: 2.5,
  },
  {
    texto:
      "Quão disposto estamos para participar de atividades ou iniciativas que promovam o espirito de equipe por meio de brincadeiras e estímulos positivos?",
    porcentagem: 2.5,
  },
  {
    texto:
      "Quão comprometidos somos em criar um ambiente de trabalho onde a diversão e o entusiasmo sejam valorizados, e as pessoas se sintam livres para expressar suas individualidades?",
    porcentagem: 2.5,
  },
  {
    texto: "Quão disposto estamos para competir no ambiente de trabalho?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão confiança a empresa deposita entre os colaboradores para que crie neles condições de assumir posições de domínio e liderança?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Estamos sempre incentivando o desenvolvimento de competências e habilidades em prol do alcance de sucesso profissional?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Resultados individuais x trabalho em equipe, são constantemente incentivados pela minha organização?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão importante é a orientação entre os colaboradores para atingir resultados, metas e objetivos?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão comprometido estamos para desenvolver um nível de aspiração onde seja alcançado desempenho superior entre os colaboradores?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão comprometidos estamos em criar um ambiente de trabalho que valorize e recompense o desempenho excepcional dos nossos colaboradores?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão é importante a busca por relacionamentos e colaboração a fim de atingir metas?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Em que medida buscamos constantemente as oportunidades para melhorar o time?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão comunicado e promovido são nossos valores dentro da organização?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Qual o nível de conscientização sobre riscos e desafios a fim de mitiga-los, entre os colaboradores?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão estamos comprometidos em valorizar a segurança e a estabilidade no ambiente de trabalho?",
    porcentagem: 3.12,
  },
  {
    texto: "Quão importante o controle e a disciplina no ambiente de trabalho?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Normas e Costumes são importantes, e constantemente compartilhados?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Ordem, respeito ás normas e cooperação, são valores estimulados pela organização?",
    porcentagem: 3.12,
  },
  {
    texto: "Quão clara é nossa estrutura hierárquica da organização?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Estamos sempre em busca do equilíbrio entre a INOVAÇÃO x ADAPTAÇÃO?",
    porcentagem: 2.08,
  },
  {
    texto:
      "Quão comprometidos estamos em estimular a cooperação e o trabalho em equipe?",
    porcentagem: 2.08,
  },
  {
    texto:
      "A construção de relacionamentos e confiança mutua é algo importante dentro da organização?",
    porcentagem: 2.08,
  },
  {
    texto: "Qual nível de ACOLHIMENTO é disseminado entre os colaboradores?",
    porcentagem: 2.08,
  },
  {
    texto: "Líderes estão dispostos a apoiar suas equipes quando necessário?",
    porcentagem: 2.08,
  },
  {
    texto: "Quão é o nosso valor para a inclusão, equidade e diversidade?",
    porcentagem: 2.08,
  },
  {
    texto:
      "Estamos dispostos a ouvir e considerar diferentes perspectivas, mesmo que sejam o oposto da organização?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Nossa contribuição positiva para um futuro a longo prazo é algo em que estamos comprometidos?",
    porcentagem: 3.12,
  },
  {
    texto:
      "Quão estamos envolvidos em questões de SUSTENTABILIDADE e apoio a comunidades globais?",
    porcentagem: 3.12,
  },
  {
    texto: "Nossas ideias estão alinhadas aos dos nossos colaboradores?",
    porcentagem: 3.12,
  },
];

const FitCultural = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [indicador, setIndicador] = useState(0);
  const [respostas, setRespostas] = useState(
    new Array(perguntasData.length).fill(5)
  ); // Inicialize as respostas com um array de notas padrão (5)

  const proximaPergunta = () => {
    if (perguntaAtual < perguntasData.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    }
  };

  const handleChangeNota = (index: number, value: number) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  const perguntaAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(perguntaAtual - 1);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Teste Fit Cultural</h1>
      <form className={styles.formulario}>
        {perguntasData.map((pergunta, index) => (
          <div
            key={index}
            style={{ display: index === perguntaAtual ? "block" : "none" }}
          >
            <div className={styles.intern}>
              <label>{index + 1 + " - " + pergunta.texto}</label>
              <input type="text" value={indicador} />
              <input
                type="range"
                min="1"
                max="10"
                value={respostas[index]}
                onChange={(e) => {
                  let valor = parseInt(e.target.value);
                  handleChangeNota(index, valor);
                  setIndicador(valor);
                }}
                name={`pergunta${index}`}
              />
              <div className={styles.buttons}>
                {perguntaAtual > 0 && (
                  <button type="button" onClick={perguntaAnterior}>
                    Previous
                  </button>
                )}
                {perguntaAtual < perguntasData.length - 1 && (
                  <button type="button" onClick={proximaPergunta}>
                    Next
                  </button>
                )}
                {perguntaAtual === perguntasData.length - 1 && (
                  <button type="submit">Enviar Respostas</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FitCultural;
