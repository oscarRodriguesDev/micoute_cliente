import styles from './styles.module.scss'
const Login =()=>{
    return(
        <>
        <div className={styles.container}>
        <h1 className={styles.title}>MICOUTE</h1>
        <section className={styles.boxLogin}>
            <form action="" >
            <input type="text" placeholder='Usuário'/>
            <input type="password" placeholder='Senha'/>
            <button>Entrar</button>
            </form>
        </section>

        <section className={styles.boxLoginCreate}>
            <p>Não tem uma conta?<br /> Cadastre-se agora!</p>
            <button onClick= {() => alert('Funcionalidade ainda não disponível')} >Cadastrar</button>  
        </section>
        </div>
        </>
    )
}

export default Login

//