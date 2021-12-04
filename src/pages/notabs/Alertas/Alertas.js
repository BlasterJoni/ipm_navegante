import { IonIcon, IonContent, IonPage, IonButton} from '@ionic/react';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import styles from './Alertas.module.css';
import AlertaItem from './AlertaItem/AlertaItem'

const Alertas = () => {

  return (
    <IonPage>
      <div className={styles.base}>
        <div className={styles.backArrow}>
          <IonButton fill="clear" color="dark">
            <IonIcon icon={arrowBack}/>
          </IonButton>
        </div>
        
        <div>
          <p className={styles.title}>Alertas<IonIcon icon={notificationsOutline}/></p>
        </div>
      
      
      </div>
    </IonPage>
  );
};

export default Alertas;
