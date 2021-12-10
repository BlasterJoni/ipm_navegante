import { IonIcon, IonContent, IonPage, IonButton } from '@ionic/react';
import styles from './ComprarBilhete.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DefaultPageLayout from '../DefaulPageLayout';
import OperadoraItem from './OperadoraItem/OperadoraItem';

const ComprarBilhete = (props) => {

    const history = useHistory();

    return (
        <IonPage>
            <DefaultPageLayout title="Comprar Bilhete">
                <div className={styles.content}>
                    <IonContent scrollEvents={true}
                        onIonScrollStart={() => { }}
                        onIonScroll={() => { }}
                        onIonScrollEnd={() => { }}>

                        <div className={styles.list}>
                            <OperadoraItem operator="Fertagus" />
                            <OperadoraItem operator="MTS" />
                            <OperadoraItem operator="TTSL" />
                        </div>
                    </IonContent>
                </div>
            </DefaultPageLayout>
        </IonPage>
    );
};

export default ComprarBilhete;
