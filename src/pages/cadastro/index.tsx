import React, { FormEvent, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import perguntasData from "@/teste_perfis/fit_cultural";

interface Pergunta {
  texto: string;
}

interface Resposta {
  [index: number]: number;
}

const Cadastro = () => {
  const [categorias, setCategorias] = useState<Resposta[]>([]);
  const [categoriaAtual, setCategoriaAtual] = useState<number>(0);
  const [respostasPorCategoria, setRespostasPorCategoria] = useState<
    number[][]
  >([]);
  const [mostrarEnviarTeste, setMostrarEnviarTeste] = useState<boolean>(false);
  const [mostrarNext,setMostrarNext] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const novoValor: number = parseInt(e.target.value, 10);
    const novasCategorias = [...categorias];
    novasCategorias[categoriaAtual] = {
      ...novasCategorias[categoriaAtual],
      [index]: novoValor,
    };
    setCategorias(novasCategorias);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoriaAtual < Object.keys(perguntasData).length - 1) {
      setCategoriaAtual(categoriaAtual + 1);
    }
  };

  const handleNextClick = () => {
    const respostasAtualizadas = [...respostasPorCategoria];
    if (categoriaAtual < Object.keys(perguntasData).length -1) {
      respostasAtualizadas[categoriaAtual] = Object.values(
        categorias[categoriaAtual]
      );
      setCategoriaAtual(categoriaAtual + 1);
      setRespostasPorCategoria(respostasAtualizadas);
    }else{
      setMostrarEnviarTeste(true);
      setMostrarNext(false)
 
    
    }
    console.log(respostasAtualizadas)
  };

  const handlePreviousClick = () => {
    if (categoriaAtual > 0) {
      setCategoriaAtual(categoriaAtual - 1);
    }
  };

  const renderizarPerguntas = () => {
    return Object.entries(perguntasData).map(
      ([categoria, perguntas], index) => (
        <div
          className={styles.categoria}
          id={String(index)}
          key={categoria}
          style={{ display: categoriaAtual === index ? "block" : "none" }}
        >
          <h2 className={styles.title_categoria}>{categoria}</h2>
          {perguntas.map((pergunta: Pergunta, index: number) => (
            <div className={styles.boxQuestion} key={index}>
              <label className={styles.text_question}>{pergunta.texto}</label>
              <label className={styles.indicator}>
                {categorias[categoriaAtual]?.[index] ?? 0}
              </label>
              <input
                className={styles.slider}
                type="range"
                name={pergunta.texto}
                max={10}
                min={0}
                value={categorias[categoriaAtual]?.[index] || 0}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className={styles.container}>
      <form action="POST" onSubmit={handleSubmit}>
        {renderizarPerguntas()}
        <div className={styles.painel}>
          {mostrarNext&&<input type="button" value="NEXT" onClick={handleNextClick} />}
         {mostrarNext&& <input type="button" value="PREVIOUS" onClick={handlePreviousClick} />}
          {mostrarEnviarTeste && <input type="button" value="Enviar Teste"/>}
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
