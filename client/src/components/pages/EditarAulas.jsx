import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import FormAula from '../FormAula/FormAula';
import { useParams } from 'react-router-dom';

function EditarAula() {
  const {id} = useParams();
  async function aditAula(infoAula,id) {
    try{
      //o POST é usado para inserir elementos na API
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
        method:'Put',
        headers:{
          'Content-Type':'application/json'
        },body:JSON.stringify(infoAula)

      })
      if(!resposta.ok){
        console.log('erro ao editar aula');

      }else{
        //alert('Aula editada');
      }
    }catch (error) {
      console.log('erro au editar aula',error)
    }
  }
  return (
    <div>
      <Navbar />
      <FormAula titulo='Editar Aula' txtBtn='Salvar' id={id} tipo='editada' handleSubmit={aditAula}/>
    </div>
  );
}

export default EditarAula;
