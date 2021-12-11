import { IonPage, IonButton } from '@ionic/react';
import styles from './Passe.module.css';
import TicketShapeBasePage from '../../../components/TicketShapeBasePage/TicketShapeBasePage';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Passe = () => {

  const history = useHistory();

  const transitPass = useSelector(state => state.data.activeUser.transitPass);

  const profile = transitPass.profile.includes("4_18") || transitPass.profile.includes("Sub23") ? transitPass.profile : "normal";

  const isExpired = Date.now() > new Date(transitPass.validity).getTime();
  const canRenew = new Date(transitPass.validity).getTime() - Date.now()  < 259200000;

  return (
    <IonPage>
      <TicketShapeBasePage title="Passe" id={transitPass.id} backFunc={() => { history.push("/tabs/titulos") }}>
        <div className={styles.content}>
          <div className={styles.card}>
            <img src={"/assets/passTypes/" + profile + (isExpired?"_caducado":"") + ".png"} alt="Imagem do Cartão do Passe"></img>
          </div>
          <div className={styles.info}>
            <div className={styles.modalidade}>
              <div className={styles.bold}>Modalidade</div>
              <div>{transitPass.type}</div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.perfil}>
                <div className={styles.bold}>Perfil</div>
                <div>{transitPass.profile}</div>
              </div>
              <div className={styles.validade}>
                <div className={styles.bold}>Validade</div>
                <div>
                  {
                    !isExpired ?
                      new Date(transitPass.validity).toLocaleDateString() :
                      null
                  }
                  {
                    isExpired || canRenew ?
                    <IonButton className={styles.renewButton} href="/notabs/passe/renovar">Renovar</IonButton> :
                    null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </TicketShapeBasePage>
    </IonPage>
  );
};

export default Passe;
