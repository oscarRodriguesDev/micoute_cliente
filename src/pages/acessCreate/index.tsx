import { useState } from 'react';
import { Toaster, toast } from 'sonner'
import styles from './styles.module.scss';
import Rodape from '@/components/rodape';
interface FormData {
  companyName: string;
  email: string;
  tipoUser:string;
}
const Account: React.FC = () => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    tipoUser:''
  });

  // Estado para rastrear qual opção está selecionada
  const [tipoUsuario, setTipoUsuario] = useState<string>('pessoa');
  const [senha, setSenha] = useState<string>('');
  const [verification, setVerification]=  useState<string>('');
  const [status,setStatus] =  useState<boolean>(false)
  const [sizeChar,setSizeChar] =  useState<number>(0)
  const [place,setPlace]=useState<string>('Digite seu nome')


  //opção para cadastro em banco de talentos
  const OptionPeople: React.FC = () => {
    return (
      <div className={styles.persona}>
        <input type="text" placeholder='Telefone' />
        <input type="text" placeholder='Idade' />
        <input type="text" placeholder='CEP' />
        <div className={styles.sexo}>
          <input type="radio" /><label>Masculino</label>
          <input type="radio" /><label>Feminino</label>
          <input type="radio" /><label>Prefere não dizer</label>
          </div>
      </div>
    );
  };


    // Função para lidar com a mudança de seleção
    const handleTipoUsuarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTipoUsuario(e.target.value);
      formData.tipoUser =  tipoUsuario
      if(tipoUsuario=='pessoa'){
        setPlace('Qual o nome da sua Empresa')
      }else{
        setPlace('Qual o seu Nome')
      }
      
    };
  
  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(senha==verification){
      
      localStorage.setItem('formData', JSON.stringify(formData));
      toast.success('Nova empresa cadastrada com sucesso')
      if(tipoUsuario=='empresa'){
        window.location.href = '/cadastro';
      }else{
        window.location.href = '/cadastro2';
      }
    }else{
      toast.warning('AS senhas não coincidem')
      setVerification('')
    }
    };
   
     
   
  
  return (
    <div className={styles.container}>

      <Toaster position='top-left'  richColors  closeButton/>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>

        <div className={styles.opcaoUser}>
        <input
        type="radio"
        name="tipo_usuario"
        value="pessoa"
        checked={tipoUsuario === 'pessoa'}
        onChange={handleTipoUsuarioChange}
      />
      <label>Sou uma pessoa</label>
       
      <input
        type="radio"
        name="tipo_usuario"
        value="empresa"
        checked={tipoUsuario === 'empresa'}
        onChange={handleTipoUsuarioChange}
      />
     
        <label>Sou uma empresa</label>
        </div>
        <input
          type="text"
          name="companyName"
          placeholder={place}
          value={formData.companyName}
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Digite um e-mail válido"
          value={formData.email}
          required
          onChange={handleChange}
        />

    

      
        <input
          type="text"
          name="password"
          placeholder="********"
          required
          value={senha}
          onChange={(e)=>{
            setSenha(e.target.value)
            setSizeChar(e.target.value.length)
           
          }}
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="********"
          required
          value ={verification}
          onFocus={(e)=>{
            if(sizeChar<=8&&senha.length<0){
              toast.warning('Sua senha precisa ter no minimo 8 caracteres')
              }
          }}
          onChange={(e)=>{
            setVerification(e.target.value)
           
          }}
        />

     {tipoUsuario=='pessoa'&&(
      <OptionPeople/>
     )}
        <input type="submit" value="Cadastrar" onClick={()=>{
          handleSubmit
        }} />
      </form>
    </div>
   
  );
};
export default Account;
