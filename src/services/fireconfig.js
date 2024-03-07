import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/compat/auth"; 




const firebaseConfig = {
        apiKey: "AIzaSyAj1pIq3lyEprzCZgsokUu0Ups9W2f8aMA",
        authDomain: "micouch.firebaseapp.com",
        projectId: "micouch",
        storageBucket: "micouch.appspot.com",
        messagingSenderId: "840331037466",
        appId: "1:840331037466:web:f4d9f7fa27c12992d07aa3"   
};

firebase.initializeApp(firebaseConfig);

//realiza o login do usuario
function login(email,senha){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('usuario logado com sucesso!')
      })
      .catch((error) => {
       console.log(error)
      });
}


export function logar(){
 console.log('testando')
    
}

const button =  document.getElementById('btn')
button.addEventListener('click',logar,false)