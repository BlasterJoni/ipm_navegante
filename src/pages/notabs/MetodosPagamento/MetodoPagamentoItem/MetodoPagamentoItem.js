import styles from "./MetodoPagamentoItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../../redux/reducers/reducer";

const MetodoPagamentoItem = (props) => {

  const user = useSelector((state) => state.data.activeUser.user);
  const dispatch = useDispatch();

  const isActivePayment = props.index === user.activePayment;
    
  return (
    <div className={isActivePayment ? styles.activeItem : styles.item} onClick={()=>{
      dispatch(actions.setActivePayment(props.index));
    }}>
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
      )}    
      
      { isActivePayment ? <div className={styles.stampFrame}><div className={styles.defaultStamp}>Predefinido</div></div> : <div className={styles.stampFrame} />}

      </div>
  );
};

export default MetodoPagamentoItem;
