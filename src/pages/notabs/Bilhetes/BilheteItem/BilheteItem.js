import { IonButton, IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import styles from './BilheteItem.module.css';

const BilheteItem = (props) => {

  return (
    <div className={styles.border}>
      <IonButton className={styles.item} fill="clear" color="dark" href={"/notabs/bilhetes/"+props.index}>
        <div className={styles.imageAndType}>
          <div className={styles.imageContainer}>
            <img src={"/assets/operators/" + props.ticket.operator + ".png"} alt="Logo de transporte" className={styles.image} />
          </div>
          <div className={styles.title}>{props.ticket.type}</div>
        </div>

        <div className={styles.arrowContainer}>
          <IonIcon icon={chevronForwardOutline} />
        </div>
      </IonButton>
    </div>
  );
};

export default BilheteItem;