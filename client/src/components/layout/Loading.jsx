import imgload from '../../img/loading.svg';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loader_componente}>
      <img src={imgload} alt=""/>
    </div>
  )
}

export default Loading
