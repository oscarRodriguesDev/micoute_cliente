import React, { FormEvent, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import perguntasData from "@/teste_perfis/fit_cultural";

interface Pergunta {
  texto: string;
}

interface Elemento {
  propriedade: string;
  outraPropriedade: number;
}

const lista: Elemento[] = [];


const Cadastro = () => {
  const [categorias, setCategorias] = useState<{ [key: string]: number }[]>([]);
  const [categoriaAtual, setCategoriaAtual] = useState<number>(0);
  const [inovacao, setInovacao] = useState([]);
 

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
                onChange={(e) => {handleChange(e, index)
                  lista.push(Number(e.target.value))
                }}
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
          <input
            type="button"
            value="NEXT"
            onClick={() => {
              if (categoriaAtual < Object.keys(perguntasData).length - 1) {
                setCategoriaAtual(categoriaAtual + 1);
                switch (categoriaAtual) {
                  case 0:
                    // Tipagem da função setInovacao
                    const setInovacao: React.Dispatch<
                      React.SetStateAction<Elemento[]>
                    > = (lista) => {
                      // Lógica para atualizar o estado inovacao
                    };
                    console.log(inovacao)
                }
              }
            }}
          />
          <input
            type="button"
            value="PREVIOUS"
            onClick={() => {
              if (categoriaAtual > 0) {
                setCategoriaAtual(categoriaAtual - 1);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
