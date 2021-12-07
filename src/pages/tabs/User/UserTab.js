import { personOutline, logOutOutline, personCircleOutline, cardOutline, fileTrayFullOutline } from 'ionicons/icons';
import { IonContent, IonPage, IonIcon, IonButton, IonLabel, IonList } from '@ionic/react';
import DefaultPageLayout from '../DefaultPageLayout';
import styles from './UserTab.module.css';
import { useSelector } from 'react-redux';

const UserTab = () => {

  const user = useSelector(state => state.data.user);

  return (
    <IonPage>
      <DefaultPageLayout title="Utilizador" icon={personOutline}>
        <div className={styles.content}>
          <div className={styles.userProfile}>
            <img src={"data:image/jpeg;base64," + user.photo} alt="User Profile Picture" className={styles.photo} />
            <div>{user.foreName} {user.surName}</div>
          </div>

            <IonButton  expand="block" fill="clear" color="dark" href="/notabs/conta" >
              <div className={styles.option}><IonIcon icon={personCircleOutline} className={styles.icon}/>A Minha Conta</div>
            </IonButton>
            <IonButton  expand="block" fill="clear" color="dark" href="/notabs/estatuto">
              <div className={styles.option}><IonIcon icon={fileTrayFullOutline} className={styles.icon}/>Estatuto Especial</div>
            </IonButton>
            <IonButton  expand="block" fill="clear" color="dark">
              <div className={styles.option}><IonIcon icon={cardOutline} className={styles.icon}/>Métodos de Pagamento</div>
            </IonButton>
            <IonButton  expand="block" fill="clear" color="dark">
              <div className={styles.option}><IonIcon icon={logOutOutline} className={styles.icon}/>Disconectar</div>
            </IonButton>



        </div>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default UserTab;
