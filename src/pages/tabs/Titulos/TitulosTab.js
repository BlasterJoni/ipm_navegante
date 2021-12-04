import { IonContent, IonPage, IonButton} from '@ionic/react';
import DefaultPageLayout from '../DefaultPageLayout';
import styles from './TitulosTab.module.css';
import { ticketOutline } from 'ionicons/icons';
import Cartao from './Cartao/Cartao';

const TitulosTab = () => {

  return (
    <IonPage>
      <DefaultPageLayout title="Titulos" icon={ticketOutline}>
          <div className={styles.base}>
            <Cartao />
            <div className={styles.buttonList}>
              <IonButton href="/notabs/passe"><div>Passe</div></IonButton>
              <IonButton href="/notabs/bilhetes"><div>Bilhetes</div></IonButton>
              <IonButton href="/notabs/zapping"><div>Zapping</div></IonButton>
            </div>
          </div>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default TitulosTab;
