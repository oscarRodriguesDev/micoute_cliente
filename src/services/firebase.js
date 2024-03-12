import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAj1pIq3lyEprzCZgsokUu0Ups9W2f8aMA",
  authDomain: "micouch.firebaseapp.com",
  projectId: "micouch",
  storageBucket: "micouch.appspot.com",
  messagingSenderId: "840331037466",
  appId: "1:840331037466:web:f4d9f7fa27c12992d07aa3"
};
const app = initializeApp(firebaseConfig);
const auth =  getAuth()
//preciso tipar emailo e senha

export async function logar(email, senha) {
 
    try {
      // Tente fazer login com o email e senha fornecidos
      await signInWithEmailAndPassword(auth, email, senha);
     alert("Login bem-sucedido!");
    } catch (error) {
      // Em caso de erro, imprima o erro no console
      alert(`não logou com: ${email} e ${senha} informados`);
      throw error; // você pode tratar esse erro em outros lugares se necessário
    }
  }


  //faz logout do usuario
  export async function deslogar() {
    try {
      // Tente fazer logout
      await signOut(auth);
      alert("Logout bem-sucedido!");
    } catch (error) {
      // Em caso de erro, imprima o erro no console
     alert("Erro ao fazer logout:", error);
      throw error; // você pode tratar esse erro em outros lugares se necessário
    }
  }
  


//checar se está logado e qual usuario está caso esteja
  export function getState(){
    try{

      onAuthStateChanged(auth, (user) => {
        if (user) {
          alert('logged ' +user.email)
          console.log(user.getIdToken);
        } else {
          // O usuário não está autenticado

        }
      });
    }catch(error){
        console.log(error)
    }
  }

  
 