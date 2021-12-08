import styles from "./MetodoPagamentoItem.module.css";

const MetodoPagamentoItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <img
          src={"/assets/banks/" + props.method.type + ".png"}
          alt="Logo de cartoes de pagamento"
          className={styles.image}
        />
      </div>
      {props.method.type !== "MBWay" ? (
        <div className={styles.number}>
          **** {props.method.number.substring(props.method.number.length - 4)}
        </div>
      ) : (
        <div className={styles.number}>
          *** {props.method.number.substring(props.method.number.length - 3)}
        </div>
      )}    </div>
  );
};

export default MetodoPagamentoItem;
