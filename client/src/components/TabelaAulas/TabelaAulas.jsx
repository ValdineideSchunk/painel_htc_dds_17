import React, { useEffect, useState } from 'react';
import styles from './TabelaAulas.module.css';
import { Link } from 'react-router-dom';

import AbreviaData from './AbreviaData';
import AbreviaNomeInstrutor from './AbreviaNomeInstrutor';
import AbreviaUnidadeCurricular from './AbreviaUnidadeCurricular';
import AbreviaAmbiente from './AbreviaAmbiente';
import Loading from '../layout/Loading';

function TabelaAulas({ tipo, onDeleteSuccess }) {
  const [aulas, setAulas] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      carregarAulas();
    }, 300);
  }, []);

  async function carregarAulas() {
    try {
      const resposta = await fetch('http://localhost:5000/aulas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!resposta) {
        throw new Error('Erro ao buscar aulas');
      }

      const consulta = await resposta.json();
      setAulas(consulta);
      setRemoveLoading(true);
      //console.log(consulta);
    } catch (error) {
      console.log('erro ao buscar aulas', error);
    }
  }

  async function deletarAula(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'addlication/jaon',
        },
      });
      if (!resposta.ok) {
        const error = await resposta.json();
        throw new Error('Erro ao Deletar Usuario', error);
      } else {
        //alert('Aula deletada');
        setAulas(aulas.filter((aula) => aula.id !== id));
        onDeleteSuccess();
      }
    } catch (error) {
      throw new Error('Erro ao Deletar Usuario', error);
    }
  }
  return (
    <div className={`${styles.aulas} ${tipo === 'edit' ? styles.edit : ''}`}>
      <table className={styles.tabelaAulas}>
        <thead>
          <tr>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Turma</th>
            <th>Instrutor</th>
            <th>Unidade Curricular</th>
            <th>Ambiente</th>
            {tipo === 'edit' && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>
          {aulas.map((aula) => (
            <tr key={aula.id}>
              <td>{<AbreviaData data={aula.data_hora_inicio} />}</td>
              <td>{<AbreviaData data={aula.data_hora_fim} />}</td>
              <td>{aula.turma}</td>
              <td>{<AbreviaNomeInstrutor instrutor={aula.instrutor} />}</td>
              <td>
                {
                  <AbreviaUnidadeCurricular
                    unidade_curricular={aula.unidade_curricular}
                  />
                }
              </td>

              <td>{<AbreviaAmbiente nomeAmbiente={aula.ambiente} />}</td>
              {tipo === 'edit' && (
                <td className="bg-light">
                  <Link
                    to={`/editar_aula/${aula.id}`}
                    className="btn btn-warning"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deletarAula(aula.id)}
                  >
                    Deletar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!removeLoading && <Loading />}
      {removeLoading && aulas.length === 0 && <h1>Não há aulas disponivel</h1>}
    </div>
  );
}

export default TabelaAulas;
