import { IonButton, IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import styles from './OperadoraItem.module.css';

const OperadoraItem = (props) => {

  return (
    <div className={styles.border}>
      <IonButton className={styles.item} fill="clear" color="dark" href={"/notabs/bilhetes/comprar/"+props.operator}>
        <div className={styles.imageAndType}>
          <div className={styles.imageContainer}>
            <img src={"/assets/operators/" + props.operator + ".png"} alt="Logo de transporte" className={styles.image} />
          </div>
          <div className={styles.title}>{ props.operator }</div>
        </div>

        <div className={styles.arrowContainer}>
          <IonIcon icon={chevronForwardOutline} />
        </div>
      </IonButton>
    </div>
  );
};

export default OperadoraItem;