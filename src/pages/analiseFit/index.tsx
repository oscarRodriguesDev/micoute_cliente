import React, { useState, useEffect } from 'react';
import perguntasData from '../analiseFit'; // Importando os dados das perguntas

interface Resposta {
  pergunta: string;
  pontuacao: number;
}

const AnaliseCultural= () => {
  perguntasData.length
  const [respostas, setRespostas] = useState<Resposta[]>([]);

  useEffect(() => {
    const respostasIniciais = perguntasData.map((pergunta: { texto: string; porcentagem: number }) => ({
      pergunta: pergunta.texto,
      pontuacao: 0
    }));
   
  }, []);

  const handleChange = (index: number, pontuacao: number) => {
    // Fazendo uma cópia profunda do array de respostas
    const novasRespostas = [...respostas];
    // Atualizando a pontuação da resposta específica
    novasRespostas[index] = { ...novasRespostas[index], pontuacao };
    setRespostas(novasRespostas);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar as respostas para a API
    console.log('Respostas enviadas:', respostas);
  };

  return (
    <div>
      <h2>Formulário de Análise Cultural</h2>
      <form onSubmit={handleSubmit}>
        {respostas.map((resposta, index) => (
          <div key={index}>
            <label>{resposta.pergunta}</label>
            <input
              type="range"
              min={0}
              max={100}
              value={resposta.pontuacao}
              onChange={(e) => handleChange(index, parseInt(e.target.value))}
            />
            <span>{resposta.pontuacao}</span>
          </div>
        ))}
        <button type="submit">Enviar Respostas</button>
      </form>
    </div>
  );
};

export default AnaliseCultural;
