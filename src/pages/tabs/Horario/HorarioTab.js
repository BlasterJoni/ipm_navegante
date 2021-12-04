import { IonPage } from '@ionic/react';
import './HorarioTab.css';
import DefaultPageLayout from '../DefaultPageLayout';
import { timeOutline, } from 'ionicons/icons';

const HorarioTab = () => {
  return (
    <IonPage>
      <DefaultPageLayout title="Horários" icon={timeOutline}>
        HorarioTab
      </DefaultPageLayout>
    </IonPage>
  );
};

export default HorarioTab;
