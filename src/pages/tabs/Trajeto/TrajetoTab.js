import { IonContent, IonPage } from '@ionic/react';
import styles from './TrajetoTab.module.css';
import { locationOutline } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';

const TrajetoTab = () => {
  return (
    <IonPage>
      <DefaultPageLayout title="Trajeto" icon={locationOutline}>
        
      </DefaultPageLayout>
    </IonPage>
  );
};

export default TrajetoTab;
