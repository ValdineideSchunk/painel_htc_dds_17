import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';

function CadastroAulas() {
  const [dataAula, setDataAula] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [turma, setTurma] = useState('');
  const [instrutor, setInstrutor] = useState('');
  const [unidadeCurricular, setUnidadeCurricular] = useState('');
  const [ambiente, setAmbiente] = useState('');
  const [infoAulas, setInfoAulas] = useState('');


  async function cadastarAula(e) {
    e.preventDefault();
    console.log(dataAula);
    console.log(horaInicio);
    console.log(horaFim);
    console.log(turma);
    console.log(instrutor);
    console.log(unidadeCurricular);
    console.log(ambiente);
  }
  return (
    <div>
      <Navbar />
      <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
        <h1 className="texte-center">Adicionar Aula</h1>
        <form onSubmit={cadastarAula}>
          <label className="form-label" htmlFor="">
            Data:
          </label>
          <input
            className="form-control"
            type="date"
            name=""
            id=""
            value={dataAula}
            onChange={(e) => setDataAula(e.target.value)}
          />

          <label className="form-label" htmlFor="">
            Hora Inicio:
          </label>
          <input className="form-control" type="time" name="" id="" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)}/>

          <label className="form-label" htmlFor="">
            Hora Fim:
          </label>
          <input className="form-control" type="time" name="" id="" value={horaFim} onChange={(e) => setHoraFim(e.target.value)}/>

          <label className="form-label" htmlFor="">
            Turma:
          </label>
          <input className="form-control" type="text" name="" id="" value={turma} onChange={(e) => setTurma(e.target.value)}/>

          <label className="form-label" htmlFor="">
            Instrutor:
          </label>
          <input className="form-control" type="text" name="" id="" value={instrutor} onChange={(e) => setInstrutor(e.target.value)}/>

          <label className="form-label" htmlFor="">
            Unidade curricular:
          </label>
          <input className="form-control" type="text" name="" id="" value={unidadeCurricular} onChange={(e) => setUnidadeCurricular(e.target.value)}/>

          <label className="form-label" htmlFor="">
            Ambiente:
          </label>
          <input className="form-control" type="text" name="" id="" value={ambiente} onChange={(e) => setAmbiente(e.target.value)}/>

          <Link className="btn btn-danger mt-2" to="login">
            Cancelar
          </Link>
          <button className="btn btn-success mt-2 float-end" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastroAulas;
