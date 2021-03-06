import { IonIcon, IonContent, IonPage } from '@ionic/react';
import styles from './Bilhete.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import TicketShapeBasePage from '../../../components/TicketShapeBasePage/TicketShapeBasePage';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Passe = () => {

  const { index } = useParams();
  const ticket = useSelector(state => state.data.activeUser.tickets[index]);

  return (
    <IonPage>
      <TicketShapeBasePage title="Bilhete" id={ticket.id}>
        <div className={styles.content}>
          <div className={styles.card}>
            <img src={"/assets/operators/" + ticket.operator + ".png"}></img>
          </div>
          <div className={styles.info}>
            <div className={styles.tipo}>
              <div className={styles.bold}>Tipo</div>
              <div>{ticket.type}</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.transporte}>
                <div className={styles.bold}>Transporte</div>
                <div>{ticket.operator}</div>
              </div>
              <div className={styles.validade}>
                <div className={styles.bold}>Validade</div>
                <div>{new Date(ticket.validity).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      </TicketShapeBasePage>
    </IonPage>
  );
};

export default Passe;
