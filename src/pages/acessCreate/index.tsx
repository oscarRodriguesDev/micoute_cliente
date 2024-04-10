import { useState } from 'react';
import styles from './styles.module.scss';

interface FormData {
  companyName: string;
  email: string;
}

const Account: React.FC = () => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: ''
  });

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
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Nova empresa cadastrada com sucesso')
    //criar o login quando estiver ativo
    window.location.href = '/cadastro';
  };




  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input
          type="text"
          name="companyName"
          placeholder="Qual o nome da empresa?"
          value={formData.companyName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Digite o email da sua empresa"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="********"
          onChange={handleChange}
        />
        <input type="submit" value="Cadastrar" onClick={()=>{
          handleSubmit
        }} />

      
      </form>
    </div>
  );
};

export default Account;
