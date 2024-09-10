import {useEffect, useState} from 'react';

function Relogio() {
    const [hora,setHora] = useState('');

    //useEffect acionado após carregamento da pagina
    useEffect(()=>{
        atualizaHorario();
        const intervalo = setInterval(atualizaHorario,1000);

        // Interrompe a função ao desmontar o elemento
        return() =>{
            clearInterval(intervalo);
        }
    });

    function atualizaHorario(){
        //Declarando o Objeto do tipo Date
        const agora = new Date();

        // Pegando hora minuto e segundo
        const horaMinutoSegundo = agora.toLocaleTimeString('pt-br',{hour: '2-digit', minute: '2-digit', second: '2-digit'});
        
        setHora(horaMinutoSegundo);

    }
  return (
    //Chamando constante horA
    <div>{hora}</div>
  )
}

export default Relogio
