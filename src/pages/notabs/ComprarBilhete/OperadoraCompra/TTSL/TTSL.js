import { IonButton, IonContent, IonIcon, IonPage, IonFabButton } from '@ionic/react';
import { chevronForwardOutline, arrowBack, checkmarkCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import DefaultPageLayout from '../../../DefaulPageLayout';
import styles from './TTSL.module.css';
import { actions } from '../../../../../redux/reducers/reducer';

const TTSL = (props) => {

    const history = useHistory();

    const user = useSelector(state => state.data.activeUser.user);

    const dispatch = useDispatch();

    const [viagem, setViagem] = useState(history.location.state?history.location.state.viagem:"");
    const [preco, setPreco] = useState(history.location.state?history.location.state.preco:"");
    const [step, setStep] = useState(history.location.state?1:0);

    const viagens = ["Barreiro -> Terreiro do Paço", "Cacilhas - > Cais do Sodré", "Trafaria -> Porto Brandão -> Belém", "Montijo -> Cais do Sodré", "Seixal -> Cais do Sodré"];
    const precos = ["2.45€", "1.30€", "1.25€", "2.80€", "2.45€"];

    const origemDivs = viagens.map((value, index) => {
        return (
            <div onClick={() => { setViagem(value); setPreco(precos[viagens.indexOf(value)]); }} className={styles.viagem + " " + (viagem === value ? styles.selectedViagem : null)} key={index}>
                {value}
            </div>
        );
    })

    let stepHTML = null;

    switch (step) {
        case 0:
            stepHTML = (
                <DefaultPageLayout title={"Selecione Viagem"} backFunc={() => { history.goBack() }} image="/assets/operators/TTSL.png">
                    <div className={styles.content}>
                        <div className={styles.list}>
                            {origemDivs}
                        </div>
                        <div className={styles.bottomControls}>
                            <IonFabButton className={viagem !== "" ? null : styles.displayNone} onClick={() => { 
                                setStep(1) 
                                history.replace(history.location.pathname, {
                                    viagem,
                                    preco
                                });
                            }}>
                                <IonIcon icon={chevronForwardOutline} />
                            </IonFabButton>
                            <div className={styles.pageTicker}>
                                <div className={styles.dot + " " + styles.selectedDot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 1:
            stepHTML = (
                <DefaultPageLayout title={"Confirme Pagamento"} backFunc={() => { 
                    setStep(0); 
                    history.replace(history.location.pathname, null);
                }}>
                    <div className={styles.content}>
                        <div> 


                            <div>
                                <div className={styles.information}>
                                    <div className={styles.title}>Transporte</div>
                                    <div className={styles.field}>{"TTSL"}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Bilhete</div>
                                    <div className={styles.field}>{viagem}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Total</div>
                                    <div className={styles.field}>{preco}</div>
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
                                dispatch(actions.addTicket("TTSL", viagem));
                                setStep(2);
                            }}>Confirmar</IonButton>
                            <div className={styles.pageTicker}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot + " " + styles.selectedDot}></div>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 2:
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

export default TTSL;