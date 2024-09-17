import { useEffect, useState } from 'react'

function LateralImagens() {
    const [imagens, setimagens] = useState([]);
    useEffect(() => {
        carregarImagens();
    }, [])

    async function carregarImagens() {
        try {
            const resposta = await fetch('http://localhost:5000/imagens', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!resposta) {
                throw new Error('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setimagens(consulta);
        } catch (error) {
            console.log('Error ao consultar aulas', error);
        }
    }
    return (
        <div>
            {imagens.map((imagem) => (
                <div key={imagem.id}>
                    <img src={imagem.caminho} alt={imagem.alt} />
                </div>
            ))}
        </div>
    )
}

export default LateralImagens
