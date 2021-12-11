import { IonButton, IonIcon, IonPage} from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DefaultPageLayout from '../../../DefaulPageLayout';
import styles from './MTS.module.css';
import { actions } from '../../../../../redux/reducers/reducer';

const MTS = (props) => {

    const user = useSelector(state => state.data.activeUser.user);

    const dispatch = useDispatch();

    const [step, setStep] = useState(0);

    let stepHTML = null;

    switch (step) {
        case 0:
            stepHTML = (
                <DefaultPageLayout title={"Confirme Pagamento"}>
                    <div className={styles.content}>
                        <div> 
                            <div>
                                <div className={styles.information}>
                                    <div className={styles.title}>Transporte</div>
                                    <div className={styles.field}>{"MTS"}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Bilhete</div>
                                    <div className={styles.field}>{"Bilhete Simples"}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Total</div>
                                    <div className={styles.field}>{"0.85€"}</div>
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
                                dispatch(actions.addTicket("MTS", "Bilhete Simples"));
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
                    <IonButton className={styles.lastStepButton} href="/notabs/bilhetes">Continuar</IonButton>
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

export default MTS;