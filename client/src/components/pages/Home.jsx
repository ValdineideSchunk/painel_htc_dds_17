import React from 'react'

import styles from './Home.module.css';
import TabelaAulas from '../TabelaAulas/TabelaAulas';

import Cabecalho from '../layout/Cabecalho';

function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
    </>
  )
}

export default Home


