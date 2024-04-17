import Image from "next/image";
import { Toaster, toast } from "sonner";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import logo from '../../res/logo.png'
import { logar, getState } from "@/services/firebase";

const Login: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    logar(user, senha);
    setUser('')
    setSenha('')
  };

  useEffect(() => {
    async function checkAuthState() {
      try {
        const userEmail = await getState();
        if (userEmail) {
          toast.success("Usuário logado:", userEmail);
          window.location.href = "/dashboard";
        } else {
          toast.error("Usuário não está logado");
        }
      } catch (error) {
        console.error("Erro ao verificar o estado de autenticação:", error);
      }
    }
    checkAuthState();
  }, []);

  return (
    <>
      <div className={styles.container}>

        <Toaster position="top-right" richColors />
        <section className={styles.banner}>
         
        </section>
        <section className={styles.login}>
        
          <div className={styles.box_login}>
            <form onSubmit={handleSubmit}>
            <Image src={logo} alt='logo do sistema'/>
              <h1>Login</h1>
              <div  className={styles.saudacao}>
                <p><span>Olá, boas-vindas! </span><br />
                Faça seu login para acessar as funcionalidades do <span className={styles.empresa}>GNT COACH</span></p>
              </div>
              <label>Usuário</label>
              <input
                type="text"
                placeholder="gntCoach"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <label>Senha</label>
              <input
                type="password"
                placeholder="•••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>
            <div  className={styles.register}>
              <a href='/acessCreate'>Primeiro Acesso</a>
              <a href='#'>Esqueceu a Senha</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
