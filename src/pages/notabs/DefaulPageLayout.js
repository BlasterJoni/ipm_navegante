import { IonIcon, IonContent, IonPage, IonButton } from '@ionic/react';
import styles from './DefaultPageLayout.module.css';
import { arrowBack, notificationsOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const DefaultPageLayout = (props) => {

  const history = useHistory();

  return (
    <div className={styles.base}>
      <div className={styles.backArrow}>
        <IonButton shape="round" fill="clear" color="dark" onClick={() => { 
            if(props.backFunc != null)
              props.backFunc()
            else
              history.goBack() 
          }}>
          <IonIcon icon={arrowBack} />
        </IonButton>
        {props.image!=null?<img src={props.image} className={styles.cornerImage} alt="Corner"/>:null}
      </div>

      <div className={styles.title}>{props.title} <IonIcon icon={props.icon} /></div>

      <div className={styles.content}>
        {props.children}
      </div>

    </div>
  );
};

export default DefaultPageLayout;
