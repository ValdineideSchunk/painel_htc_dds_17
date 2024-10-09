import React, { useEffect, useState } from 'react'
import TabelaAulas from '../TabelaAulas/TabelaAulas';
import Navbar from '../layout/Navbar'
import { Link, useParams } from 'react-router-dom';

function GestaoAulas() {
  const {tipo}= useParams();
  const [tipoAlterado, setTipoAlterado] = useState(tipo);
  const [mostraMensagem, setMostraMensage] = useState(false);
  const [classeMensagem,setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');

  useEffect(()=>{
    if(tipoAlterado){
      setMostraMensage(true);
      tipoMensagem();
      setTimeout(()=>{
        setMostraMensage(false);
        setTipoAlterado(' ');
      },5000)
    }
  },[tipoAlterado])

function tipoMensagem(){
  switch(tipoAlterado){
    case'cadastrada':
      setClasseMensagem('alert alert-success'); 
      setTextoMensagem('Aula Cadastrada');
    break;
    case'editada':
      setClasseMensagem('alert alert-primary'); 
      setTextoMensagem('Aula Editada');
    break;
    case'deletada':
      setClasseMensagem('alert alert-danger'); 
      setTextoMensagem('Aula Deletada');
    break;
  }
}
 function handleDelete(){
   setTipoAlterado ('deletada') ;
 }

  return (
    <>
      <Navbar/>
      <div className='container'>
        <h1 className='text center my-3'>Gestão Aulas</h1>
        {mostraMensagem && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='text-end'>
          <Link className='btn btn-primary mb-3' to='/cadastro_aulas'>Cadastro Aula</Link>
        </div>
        <TabelaAulas tipo= 'edit' onDeleteSuccess={handleDelete}/>
      </div>
    </>
  )
}

export default GestaoAulas
