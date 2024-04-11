import React, { FormEvent, useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import perguntasData from "@/teste_perfis/fit_cultural_colab";
import { Toaster, toast } from "sonner";

interface Pergunta {
  texto: string;
}

interface Resposta {
  [index: number]: number;
}

interface CategoriaArrays {
  cat1: number[];
  cat2: number[];
  cat3: number[];
  cat4: number[];
  cat5: number[];
  cat6: number[];
  cat7: number[];
  cat8: number[];
}

const Cadastro = () => {
  const [categorias, setCategorias] = useState<Resposta[]>([]);
  const [categoriaAtual, setCategoriaAtual] = useState<number>(0);
  const [respostasPorCategoria, setRespostasPorCategoria] = useState<
    number[][]
  >([]);
  const [mostrarEnviarTeste, setMostrarEnviarTeste] = useState<boolean>(false);
  const [mostrarNext, setMostrarNext] = useState<boolean>(true);

  //função para recuperar os nome da empresa
  const loadName = (): FormData | null => {
    const data = localStorage.getItem("formData");
    if (data) {
      let dado = JSON.parse(data);
      return dado.companyName;
    }
    return null;
  };

  //função para recuperar os email da empresa
  const loadEmail = (): FormData | null => {
    const data = localStorage.getItem("formData");
    if (data) {
      let dado = JSON.parse(data);
      return dado.email;
    }
    return null;
  };
  //função para recuperar os email da empresa
  const loadType = (): FormData | null => {
    const data = localStorage.getItem("formData");
    if (data) {
      let dado = JSON.parse(data);
      return dado.email;
    }
    return null;
  };

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
    if (categoriaAtual <= Object.keys(perguntasData).length - 1) {
      setCategoriaAtual(categoriaAtual + 1);
    }
  };

  const handleNextClick = () => {
    const respostasAtualizadas = [...respostasPorCategoria];
    try {
      if (categoriaAtual < Object.keys(perguntasData).length) {
        respostasAtualizadas[categoriaAtual] = Object.values(
          categorias[categoriaAtual]
        );
        setCategoriaAtual(categoriaAtual + 1);
        setRespostasPorCategoria(respostasAtualizadas);
      } else {
        setMostrarEnviarTeste(true);
        setMostrarNext(false);
      }
    } catch (error) {
      toast.warning(
        "Ocorreu um erro ao tentar responder essa categoria,\n verifique suas respostas e tente novamente"
      );
    }
  };

  const handlePreviousClick = () => {
    if (categoriaAtual > 0) {
      setCategoriaAtual(categoriaAtual - 1);
    }
  };

  //envia a requisição para a api
  const handlesendResponse = async () => {
    var nome = loadName();
    var email = loadEmail();
    try {
      const response = await fetch(
        "http://localhost:3001/rh/perfil/empresa/fitcultural",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: nome,
            web: email,
            cat1: respostasPorCategoria[0],
            cat2: respostasPorCategoria[1],
            cat3: respostasPorCategoria[2],
            cat4: respostasPorCategoria[3],
            cat5: respostasPorCategoria[4],
            cat6: respostasPorCategoria[5],
            cat7: respostasPorCategoria[6],
            cat8: respostasPorCategoria[7],
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(respostasPorCategoria);
        alert("Dados enviados com sucesso");
        location.reload(); //recarregar a pagina
      } else {
        throw new Error("Erro ao enviar requisição para a API");
      }
    } catch (error) {
      console.error("Erro ou tentar processar requisição");
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
        <Toaster position='top-left' richColors closeButton/>
      <form action="POST" onSubmit={handleSubmit}>
        {renderizarPerguntas()}
        <div className={styles.painel}>
          {mostrarNext && (
            <input type="button" value="NEXT" onClick={handleNextClick} />
          )}
          {mostrarNext && (
            <input
              type="button"
              value="PREVIOUS"
              onClick={handlePreviousClick}
            />
          )}
          {mostrarEnviarTeste && (
            <input
              type="button"
              value="Enviar Teste"
              onClick={handlesendResponse}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
