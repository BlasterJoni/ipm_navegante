import { IonContent, IonPage } from '@ionic/react';
import styles from './UserTab.module.css';
import { personOutline } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';

const UserTab = () => {
  return (
    <IonPage>
      <DefaultPageLayout title="Utilizador" icon={personOutline}>
        UserTab
      </DefaultPageLayout>
    </IonPage>
  );
};

export default UserTab;
