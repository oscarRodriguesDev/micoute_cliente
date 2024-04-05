import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss";
import perguntasData from "@/teste_perfis/fit_cultural";
import { documentId } from "firebase/firestore";


const Cadastro = () => {

const [inovacao,setInovao] =  useState([])
const [autonomia,setAutonomia] =  useState([])
const [competicao,setCompeticao] =  useState([])
const [meritocracia,setMeritocracia] =  useState([])
const [estabilidade,setEstabilidade] =  useState([])
const [ordem,setOrdem] =  useState([])
const [acolhimento,setAcolhimento] =  useState([])
const [proposito,setProposito] =  useState([])
const [index,setIndex] = useState(0)
const [categoriaAtual, setCategoriaAtual] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoriaAtual < Object.keys(perguntasData).length - 1) {
      setCategoriaAtual(categoriaAtual + 1);
    }
  };

  return (
    <div className={styles.container}>
      <form action='POST' onSubmit={handleSubmit}>
        {Object.entries(perguntasData).map(([categoria, perguntas], index) => (
          <div className={styles.categoria} id={String(index)} key={categoria} style={{ display: categoriaAtual === index ? 'block' : 'none' }}>
            <h2>{categoria}</h2>
            {perguntas.map((pergunta, index) => (
              <div key={index}>
                <label>{pergunta.texto}</label>
                <input type="range" name={pergunta.texto} />
              </div>
            ))}

         
          </div>
        ))}
         <input type='button' value='NEXT' onClick={() => {
        if (categoriaAtual < Object.keys(perguntasData).length - 1) {
          setCategoriaAtual(categoriaAtual + 1);
        }
      }}/>
      <input type='button' value ='PREVIOUS' onClick={() => {
        if (categoriaAtual < Object.keys(perguntasData).length - 1) {
          setCategoriaAtual(categoriaAtual - 1);
        }
      }}/>
      </form>
     
    </div>
  );
};

export default Cadastro;
