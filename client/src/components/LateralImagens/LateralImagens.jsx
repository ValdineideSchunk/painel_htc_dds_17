import { useEffect, useState } from 'react';
import styles from './LateralImagens.module.css';
import Loading from '../layout/Loading';

function LateralImagens() {
  const [imagens, setimagens] = useState([]);
  const [removeLoading,setRemoveLoading]= useState(false);

  useEffect(() => {
    setTimeout(() => {
      carregarImagens();
    }, 300);
  }, []);

  async function carregarImagens() {
    try {
      const resposta = await fetch('http://localhost:5000/imagens', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!resposta) {
        throw new Error('Erro ao buscar aulas');
      }
      const consulta = await resposta.json();
      setimagens(consulta);
      setRemoveLoading(true)
    } catch (error) {
      console.log('Error ao consultar aulas', error);
    }
  }
  return (
    <div className={styles.lateral}>
      {imagens.map((imagem) => (
        <div key={imagem.id}>
          <img src={imagem.caminho} alt={imagem.alt} />
        </div>
      ))}
      {!removeLoading && <Loading/>}
    </div>
    
  );
}

export default LateralImagens;
