import { IonIcon, IonFabButton, IonRouterLink } from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import styles from './DefaultPageLayout.module.css';
import logo from "../../resources/logo.png";

const DefaultPageLayout = (props) => {
    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <img src={logo} alt="Navegante's Logo" className={styles.logo} />
                <IonFabButton size="small" color="light" href="/notabs/alertas">
                    <IonIcon icon={notificationsOutline}/>
                </IonFabButton>
            </div>
            <div className={styles.contentArea}>
                <p className={styles.title}>{props.title} <IonIcon icon={props.icon} /></p>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default DefaultPageLayout;
