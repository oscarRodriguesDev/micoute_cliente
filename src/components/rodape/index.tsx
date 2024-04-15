import styles from "./styles.module.scss";
import Image from "next/image";
import imagemFooter from '../../res/imgFooter.png'

const Rodape = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foot_image}>
            <Image src={imagemFooter} alt='boneco de madeira subindo escada' width={500} height={400}/>
        </div>
        <nav className={styles.menu_foot}>
          <a href="#">About US</a>
          <a href="#">Testes</a>
          <a href="#">Fale conosco</a>
          <a href="#">Politicas de Privacidade</a>
        </nav>
        <div className={styles.sociais}>
          <a href="#"> Instagram</a>
          <a href="#"> Facebook</a>
          <a href="#"> Linkedin</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </>
  );
};

export default Rodape;
