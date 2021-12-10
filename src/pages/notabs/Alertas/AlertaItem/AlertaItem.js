import styles from './AlertaItem.module.css';

const AlertaItem = (props) => {

  return (
    <div className={styles.item}>
        <div className={styles.imageContainer}>
            <img src={"/assets/operators/"+props.alert.operator+".png"} alt="Logo de transporte" className={styles.image}/>
        </div>
        <div className={styles.information}>
            <div className={styles.title}>{props.alert.title}</div>
            <div className={styles.text}>{props.alert.text}</div>
            <div className={styles.date}>{new Date(props.alert.date).toLocaleDateString()} {new Date(props.alert.date).toTimeString().substr(0,5)}</div>
        </div>
    </div>
  );
};

export default AlertaItem;
