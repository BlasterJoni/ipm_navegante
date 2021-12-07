import { useSelector } from 'react-redux';
import { IonIcon, IonPage, IonButton, IonContent } from '@ionic/react';
import { useHistory } from "react-router-dom";
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import styles from './Alertas.module.css';
import AlertaItem from './AlertaItem/AlertaItem'
import DefaultPageLayout from '../DefaulPageLayout';

const Alertas = (props) => {

  const history = useHistory();
  const alerts = useSelector(state => state.data.alerts);

  const alertsItems = alerts.map((value, index) => {
    return <AlertaItem alert={value} key={index} />
  });

  return (
    <IonPage>
      <DefaultPageLayout title="Alertas" icon={notificationsOutline}>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}>
          {alertsItems}
        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Alertas;
