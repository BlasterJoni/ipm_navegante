import { IonButton, IonIcon, IonPage} from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DefaultPageLayout from '../../DefaulPageLayout';
import styles from './RenovarPasse.module.css';
import { actions } from '../../../../redux/reducers/reducer';

const RenovarPasse = (props) => {

    const user = useSelector(state => state.data.activeUser.user);
    const pass = useSelector(state => state.data.activeUser.transitPass);

    const dispatch = useDispatch();

    const [step, setStep] = useState(0);

    const precos = () => {
        switch(pass.profile) {
            case "Normal":
                return 40;
            case "Sub23":
            case "4_18":
            case "Social+":
                return 30;
            case "Social+ 50%":
            case "+65":
                return 20;
            case "4_18 60%":
            case "Sub23 60%":
                return 16;
            case "12":
                return 0;
            default:
                return 40;
        }
    }

    let stepHTML = null;

    switch (step) {
        case 0:
            stepHTML = (
                <DefaultPageLayout title={"Confirme Pagamento"}>
                    <div className={styles.content}>
                        <div> 
                            <div>
                                <div className={styles.information}>
                                    <div className={styles.title}>Passe</div>
                                    <div className={styles.field}>{pass.type}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Perfil</div>
                                    <div className={styles.field}>{pass.profile}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Total</div>
                                    <div className={styles.field}>{precos()+"€"}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>NIF</div>
                                    <div className={styles.field}>{user.nif}</div>
                                </div>
                                
                            </div> 
                            <div className={styles.metodoItem}>
                                Método de Pagamento
                                <div className={styles.metodoRow}>
                                    <div className={styles.metodoImage}>
                                        <img src={"/assets/banks/" + user.payment[user.activePayment].type + ".png"} alt="Logo" className={styles.imageContainerMetodo} />
                                    </div>
                                    <div className={styles.metodoCard}>
                                        { user.payment[user.activePayment].type === "MBWay" ?
                                            user.payment[user.activePayment].type + " " +  user.payment[user.activePayment].number.substring(6) : 
                                            user.payment[user.activePayment].type + " " + user.payment[user.activePayment].number.substring(12)}
                                    </div>
                                    <div className={styles.metodoButon}>
                                    <IonButton className={styles.altButon} href="/notabs/metodospagamento">Alterar</IonButton>
                                    </div>
                                </div>
                            </div> 
                        
                        </div>  
                        <div className={styles.bottomControls}>
                            <IonButton className={styles.lastStepButton} onClick={()=>{
                                dispatch(actions.renewPass());
                                setStep(1);
                            }}>Confirmar</IonButton>
                            <div className={styles.pageTicker}>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 1:
            stepHTML = (
                <div className={styles.lastStep}>
                    <div className={styles.lastStepContent}>
                        <IonIcon icon={checkmarkCircleOutline} className={styles.checkIcon}/>
                        <h1>Pagamento aceite</h1>
                        <h3>Compra efetuada com sucesso!</h3>
                    </div>
                    <IonButton className={styles.lastStepButton} href="/notabs/passe">Continuar</IonButton>
                </div>
            )
            break;
        default:
            break;
    }


    return (
        <IonPage>
            {stepHTML}
        </IonPage>
    );
};

export default RenovarPasse;