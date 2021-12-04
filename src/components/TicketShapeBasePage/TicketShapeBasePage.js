import { IonIcon, IonContent, IonPage, IonButton} from '@ionic/react';
import styles from './TicketShapeBasePage.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';

const TicketShapeBasePage = () => {

  return (
    <IonPage>
        <div className={styles.base}>
            <div className={styles.arrowRow}>
                <IonButton fill="clear" color="dark" size="default">
                    <IonIcon icon={arrowBack}/>
                </IonButton>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    dsfa
                </div>
                <div className={styles.content}>
                    fasdf
                </div>
                <div className={styles.qr}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    asdfasd
                </div>
            </div>
        </div>
    </IonPage>
  );
};

export default TicketShapeBasePage;
