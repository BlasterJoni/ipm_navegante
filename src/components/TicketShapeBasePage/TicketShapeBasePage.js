import { IonIcon, IonPage, IonButton } from '@ionic/react';
import styles from './TicketShapeBasePage.module.css';
import { arrowBack} from 'ionicons/icons';
import { AwesomeQRCode } from "@awesomeqr/react";
import { useHistory } from "react-router";
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const TicketShapeBasePage = (props) => {

    const history = useHistory();
    const handle = useFullScreenHandle();

    return (
        <IonPage>
            <div className={styles.base}>
                <div className={styles.arrowRow}>
                    <IonButton shape="round" fill="clear" color="dark" size="default" onClick={() => {
                        if (props.backFunc != null)
                            props.backFunc()
                        else
                            history.goBack()
                    }}>
                        <IonIcon icon={arrowBack} />
                    </IonButton>
                </div>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.subtitle}>Mostre o QR code ao leitor</div>
                    </div>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                    <div className={styles.qr}>
                        <div className={styles.circleLeft}></div>
                        <div className={styles.circleRight}></div>
                        <div onClick={handle.enter} className={styles.qrClickBox}>
                            <AwesomeQRCode
                                options={{
                                    text: props.id,
                                    colorDark: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary'),
                                    logoImage: "/assets/icon/favicon.png",
                                    dotScale: 0.75
                                }}
                            />
                        </div>
                        <FullScreen handle={handle} onClick={handle.enter}>
                            <div className={styles.fullscreenBG} onClick={handle.exit}>
                                <AwesomeQRCode
                                    options={{
                                        text: props.id,
                                        colorDark: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary'),
                                        logoImage: "/assets/icon/favicon.png",
                                        dotScale: 0.75
                                    }}
                                />
                            </div>
                        </FullScreen>
                    </div>
                </div>
            </div>
        </IonPage>
    );
};

export default TicketShapeBasePage;
