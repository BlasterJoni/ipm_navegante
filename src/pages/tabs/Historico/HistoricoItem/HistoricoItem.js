import styles from './HistoricoItem.module.css';

const HistoricoItem = (props) => {
  return (
      <div className={styles.item}>
          <div className={styles.colLeft}>
            <div className={styles.imagem}>
              <img src={"/assets/operators/"+props.history.operator+".png"}/>
            </div>
            <div className={styles.linhas}> {props.history.type} </div>
          </div>
          <div className={styles.colRight}>
            <div className={styles.data}>{props.history.date.toLocaleDateString()}</div>
            <div className={styles.hora}>{props.history.date.toTimeString().substr(0,5)}</div>
          </div>
              
      </div>
    
  );
};

export default HistoricoItem;
