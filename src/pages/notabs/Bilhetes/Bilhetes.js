import { IonPage, IonButton, IonIcon, IonFab, IonFabButton, IonContent, IonLabel } from '@ionic/react';
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
      <DefaultPageLayout title="Os Meus Bilhetes" backFunc={()=>{history.push("/tabs/titulos")}}>
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

        <div className={styles.buyButton}>
          <IonButton mode="ios" href="/notabs/bilhetes/comprar">
            <IonIcon icon={cartOutline} />
            <IonLabel className={styles.comprarBilhete}>Comprar Bilhete</IonLabel>
          </IonButton>
        </div>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Bilhetes;
