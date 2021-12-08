import { IonIcon, IonContent, IonPage, IonButton } from '@ionic/react';
import styles from './Zapping.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import TicketShapeBasePage from '../../../components/TicketShapeBasePage/TicketShapeBasePage';
import { useSelector } from 'react-redux';

const Passe = () => {

  const transitPass = useSelector(state => state.data.activeUser.transitPass);

  return (
    <IonPage>
      <TicketShapeBasePage title="Zapping" id={transitPass.id}>
        <div className={styles.content}>
          <div className={styles.saldoArea}>
            <div className={styles.saldoDisponivel}>Saldo Disponivel</div>
            <div className={styles.saldo}>50.00€</div>
          </div>
          <div className={styles.button}><IonButton expand="block" color="medium" >Recarregar</IonButton></div>   
        </div>
      </TicketShapeBasePage>
    </IonPage>
  );
};

export default Passe;
