import { IonPage, IonButton, IonIcon, IonFab, IonFabButton, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './Bilhetes.module.css';
import { arrowBack, cartOutline, ticketOutline } from 'ionicons/icons';
import BilheteItem from './BilheteItem/BilheteItem';
import DefaultPageLayout from '../DefaulPageLayout';


const Bilhetes = () => {

  const history = useHistory();
  const tickets = useSelector(state => state.data.activeUser.tickets);

  const ticketItems = tickets.map((value, index) => {
    return <BilheteItem ticket={value} key={index} index={index} />
  });

  return (
    <IonPage>
      <DefaultPageLayout title="Os Meus Bilhetes" icon={ticketOutline}>
        <div className={styles.content}>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}
        >
          <div className={styles.ticketsList}>
            {ticketItems}
          </div>
        </IonContent>
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed" className={styles.buyButton}>
          <IonFabButton>
            <IonIcon icon={cartOutline} />
          </IonFabButton>
        </IonFab>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Bilhetes;
