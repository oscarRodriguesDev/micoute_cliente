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
export var usuario = null;

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
    var logado =  false
    try {
      // Tente fazer logout
      await signOut(auth);
      alert('usuario deslogou')
    logado = true
    } catch (error) {
      // Em caso de erro, imprima o erro no console
     alert("Erro ao fazer logout:", error);
      throw error; // você pode tratar esse erro em outros lugares se necessário
    }
    return logado
  }
  


//checar se está logado e qual usuario está caso esteja
  export function getState(){
    try{

      onAuthStateChanged(auth, (user) => {
        if (user) {
          usuario = user.email
    
        }
      });
    }catch(error){

        console.log(error)
    }
  }

  
 