import styles from '../styles/home.module.scss'
import Image from 'next/image';
import imgSobre from '../res/sobre.png'

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.titulo}>
          <h1>TalentMatch</h1>
          <Image src={imgSobre} alt='fundo do titulo'/>
        </section>

        <section className={styles.sobre}>
          <p>Bem-vindo ao TalentMatch!</p>
          <p>
            Encontrar o candidato perfeito para sua equipe pode ser desafiador,
            mas com o TalentMatch, a busca pelo talento ideal se torna mais
            fácil do que nunca. Nosso sistema inovador de teste de perfil foi
            projetado para ajudar empresas a identificar candidatos que não
            apenas possuam as habilidades técnicas necessárias, mas também se
            encaixem perfeitamente na cultura e nos valores da sua organização.
          </p>

          <p>
            Com o TalentMatch, você pode simplificar e agilizar o processo de
            contratação, eliminando a necessidade de triagem manual de
            currículos e entrevistas demoradas. Nosso algoritmo avançado analisa
            as características, competências e experiências dos candidatos,
            fornecendo uma visão abrangente de como cada um se encaixa na vaga
            de emprego em questão.
          </p>

          <p>
            Além disso, oferecemos uma variedade de testes e avaliações
            personalizáveis, permitindo que você adapte o processo de seleção de
            acordo com as necessidades específicas do seu negócio. Desde
            avaliações comportamentais até testes de habilidades técnicas, o
            TalentMatch oferece uma ampla gama de ferramentas para garantir que
            você encontre os talentos certos para impulsionar o crescimento da
            sua empresa.
          </p>

          <p>
            Não deixe o talento escapar. Experimente o TalentMatch hoje mesmo e
            descubra como podemos ajudá-lo a construir uma equipe excepcional
            que leve o seu negócio para o próximo nível.
          </p>
        </section>

        <section className={styles.testes}>
          <ul>
            <li>
              DISC Assessment: O DISC é um modelo de avaliação comportamental
              que categoriza os comportamentos em quatro dimensões: Dominância,
              Influência, Estabilidade e Conformidade. Essa avaliação ajuda a
              entender como os candidatos se comportam em diferentes situações e
              ambientes.
            </li>
            <li>
              Myers-Briggs Type Indicator (MBTI): O MBTI é baseado na teoria dos
              tipos psicológicos de Carl Jung e avalia a personalidade dos
              candidatos em quatro dimensões: Extroversão/Introversão,
              Sensação/Intuição, Pensamento/Sentimento e Julgamento/Percepção.
              Ele categoriza os indivíduos em 16 tipos diferentes de
              personalidade.
            </li>
            <li>
              StrengthsFinder: O StrengthsFinder avalia os pontos fortes dos
              candidatos, identificando seus talentos naturais e habilidades
              dominantes. Ele se concentra em identificar e desenvolver os
              pontos fortes individuais de cada candidato.
            </li>
            <li>
              Big Five Personality Traits (OCEAN Model): Este modelo avalia a
              personalidade dos candidatos em cinco dimensões principais:
              Abertura para experiência, Conscienciosidade, Extroversão,
              Amabilidade e Neuroticismo. Ele fornece uma visão abrangente da
              personalidade dos candidatos.
            </li>
            <li>
              Predictive Index (PI): O PI é uma ferramenta de avaliação
              comportamental que mede os drives motivacionais dos candidatos e
              suas necessidades de trabalho. Ele ajuda a identificar quais
              candidatos são mais adequados para determinadas funções e
              ambientes de trabalho.
            </li>
            <li>
              Hogan Personality Inventory (HPI): O HPI avalia a personalidade
              dos candidatos em relação às características que são relevantes
              para o desempenho no local de trabalho, como ambição,
              sociabilidade, prudência, entre outras.
            </li>
          </ul>
        </section>

        <section className={styles.chamada}>
          <h2>Descubra seu perfil profissional com o TalentMatch</h2>
          <p>
            Se você está procurando por uma oportunidade profissional que se
            alinhe perfeitamente com suas habilidades, interesses e valores,
            você veio ao lugar certo. O TalentMatch oferece um teste de perfil
            comportamental abrangente que ajuda a identificar suas forças,
            fraquezas e preferências profissionais.
          </p>
          <p>
            Com base nas suas respostas, forneceremos insights valiosos sobre os
            tipos de papéis e ambientes de trabalho onde você poderá se
            destacar. Nosso objetivo é ajudá-lo a encontrar a vaga dos seus
            sonhos e construir uma carreira gratificante.
          </p>
          <p>
            Está pronto para dar o próximo passo em sua jornada profissional?
            Realize nosso teste de perfil agora mesmo e comece a moldar seu
            futuro!
          </p>
          <a href="/login" className="btn">
           Cadastre-se  </a> <span> e inicie seu teste</span>
        
        </section>
      </div>
    </>
  );
};

export default Landing;
