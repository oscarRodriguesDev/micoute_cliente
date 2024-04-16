import Image from "next/image";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import banner from "../../res/banner-gnt-coach.png";
import { logar } from "@/services/firebase";

const Login: React.FC = () => {
  const [user, setUser] = useState<string>("example@email.com");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       logar(user,senha)
  }
  return (
    <>
      <div className={styles.container}>
        <Toaster position="top-right" richColors />
        <section className={styles.banner}>
          <Image src={banner} alt="banner da tela de login" />
        </section>
        <section className={styles.login}>
          <div className={styles.box_login}>
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              <label>Digite seu usuário</label>
              <input type="text" placeholder="gntCoach" value={user} onChange={(e) => setUser(e.target.value)} />
              <label>Informe sua senha</label>
              <input type="password" placeholder="•••••••••" value={senha} onChange={(e) => setSenha(e.target.value)} />
              <button type="submit">Entrar</button>
            </form>

            <p>
              Não possui cadastro? Cadastre-se <a href="/acessCreate">aqui</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
