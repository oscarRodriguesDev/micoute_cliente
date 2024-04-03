import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss";
import perguntasData from "@/teste_perfis/fit_cultural";

const Cadastro = () => {

const [inovacao,setInovao] =  useState([])
const [autonomia,setAutonomia] =  useState([])
const [competicao,setCompeticao] =  useState([])
const [meritocracia,setMeritocracia] =  useState([])
const [estabilidade,setEstabilidade] =  useState([])
const [ordem,setOrdem] =  useState([])
const [acolhimento,setAcolhimento] =  useState([])
const [proposito,setProposito] =  useState([])



  return (
    <div className={styles.container}>
      <form action='POST' onSubmit={()=>{console.log('enviar para o banco')}}>
        {Object.entries(perguntasData).map(([categoria, perguntas]) => (
          <div key={categoria}>
            <h2>{categoria}</h2>
            {perguntas.map((pergunta, index) => (
              <div key={index}>
                <label>{pergunta.texto}</label>
                <input type="range" name={pergunta.texto} />
              </div>
            ))}
            <button>Enviar</button>
          </div>
        ))}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Cadastro;
