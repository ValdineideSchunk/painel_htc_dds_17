import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { Await, Link } from 'react-router-dom';
import FormAula from '../FormAula/FormAula';

function CadastroAulas() {
  async function cadastarAula(infoAula) {
    try{
      //o POST é usado para inserir elementos na API
      const resposta = await fetch('http://localhost:5000/aulas',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },body:JSON.stringify(infoAula)

      })
      if(!resposta.ok){
        console.log('erro ao criar aula');

      }else{
        alert('Aula cadastrada');
      }
    }catch (error) {
      console.log('erro no cadastro de aula',error)
    }
  }
  return (
    <div>
      <Navbar />
      <FormAula titulo='Cadastro Aula' txtBtn='Cadastrar' handleSubmit={cadastarAula}/>
    </div>
  );
}

export default CadastroAulas;
