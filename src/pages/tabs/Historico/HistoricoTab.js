import { IonContent,IonPage} from '@ionic/react';
import styles from './HistoricoTab.module.css';
import { calendarOutline } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';

const HistoricoTab = () => {
  return (
    <IonPage>
      <DefaultPageLayout title="Histórico" icon={calendarOutline}>
        HistoricoTab
      </DefaultPageLayout>
    </IonPage>
  );
};

export default HistoricoTab;
