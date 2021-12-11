import { IonPage, IonButton } from '@ionic/react';
import styles from './Zapping.module.css';
import TicketShapeBasePage from '../../../components/TicketShapeBasePage/TicketShapeBasePage';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Zapping = () => {

  const history = useHistory();

  const zapping = useSelector(state => state.data.activeUser.zapping);

  return (
    <IonPage>
      <TicketShapeBasePage title="Zapping" id={zapping.id} backFunc={()=>{history.push("/tabs/titulos")}}>
        <div className={styles.content}>
          <div className={styles.saldoArea}>
            <div className={styles.saldoDisponivel}>Saldo Disponivel</div>
            <div className={styles.saldo}>{zapping.balance.toFixed(2)}€</div>
          </div>
          <div className={styles.button}><IonButton expand="block" color="dark" href="/notabs/zapping/carregar">Recarregar</IonButton></div>   
        </div>
      </TicketShapeBasePage>
    </IonPage>
  );
};

export default Zapping;
