
import { logar,deslogar,getState,usuario } from '../../services/firebase';
import React, { useState } from 'react';
import styles from './styles.module.scss'; 
import { useRouter } from "next/router";


const Login: React.FC = () => {

    interface State {
        logado: boolean;
      }

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [user , serUser] = useState(''); 

  const entrar = async () => {
    try {
   await logar(email,senha)
    
     setEmail('')
     setSenha('')
    
    } catch (error) {
       console.log(error)
        setSenha('')
    }
  };

  const exit= async () => {
    try{
        await deslogar()
        setEmail('')
        setSenha('')
    }catch(error){
        setEmail('')
        setSenha('')
    }
  };

// Função para verificar se o usuário está logado
const  verificarLogin = async ()=>{
 await getState()
}
verificarLogin()
if(!usuario){
 
}else{
 
  const router = useRouter();
  router.push('/fit'); 

}


  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault() }}>
        
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='example@email.com'
            required 
          />
     
        
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            id="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            placeholder='••••••••••'
            required 
        />
        <button type="submit" onClick={()=>{entrar()}}>Login</button>
        <button type="button" onClick={()=> {exit()}}>sair</button>
      </form>
    </div>
  );
};

export default Login;
