import { useEffect,useState } from "react";
function Saudacao(){
    //Criando estado da saudação
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('')

    useEffect(()=>{
        atualizaSaudacao();

        const intervalo = setInterval(atualizaSaudacao,1000);

        //Interrompe a função ao desmontar o elemento
        return() =>{
            clearInterval(intervalo);
        }
        
    });

    //Criando texto saudação
    function atualizaSaudacao(){
        //Declarando o Objeto do tipo Date
        const agora = new Date();
        //obtendo hora em inteiro exempo 21:15
        const hora = agora.getHours();

        //obtendo o dia da semana em inicio em domingo como 0 e sabado como 6
        const dia = agora.getDay();

        let textoSaudacao = '';

        const diaSemana =[
            'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','sexta-Feira','Sabado'
        ];

        textoSaudacao += diaSemana[dia];

        if(hora >=18){
            textoSaudacao +=' - Boa noite!'
        }else  if(hora >=12){
            textoSaudacao +=' - Boa Tarde!'
        }else  if(hora >=6){
            textoSaudacao +=' - Bom dia!'
        }else{
            textoSaudacao +=' - Boa madrugada!'
        }

        setSaudacaoPeriodo(textoSaudacao);
    }
    return(
    <h1>{saudacaoPeriodo}</h1>
    )
}

export default Saudacao;