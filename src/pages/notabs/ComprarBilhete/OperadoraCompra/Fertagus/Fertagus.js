import { IonButton, IonContent, IonIcon, IonPage, IonFabButton } from '@ionic/react';
import { chevronForwardOutline, arrowBack, checkmarkCircleOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import DefaultPageLayout from '../../../DefaulPageLayout';
import styles from './Fertagus.module.css';
import { actions } from '../../../../../redux/reducers/reducer';

const Fertagus = (props) => {

    const history = useHistory();

    const user = useSelector(state => state.data.activeUser.user);

    const dispatch = useDispatch();

    const [origem, setOrigem] = useState(history.location.state?history.location.state.origem:"");
    const [destino, setDestino] = useState(history.location.state?history.location.state.destino:"");
    const [step, setStep] = useState(history.location.state?2:0);

    const estacoes = ["Roma-Areeiro", "Entrecampos", "Sete Rios", "Campolide", "Pragal", "Corroios", "Foros de Amora", "Fogueteiro", "Coina", "Penalva", "Pinhal Novo", "Vendas do Alcaida", "Palmela", "Setúbal"];

    const origemDivs = estacoes.map((value, index) => {
        return (
            <div onClick={() => { setOrigem(value) }} className={styles.estacao + " " + (origem === value ? styles.selectedEstacao : null)} key={index}>
                {value}
            </div>
        );
    })

    const calcularPreco = () => {
        const nEstacoes = Math.abs(estacoes.indexOf(origem)-estacoes.indexOf(destino));
        const preco = 1.5 + (nEstacoes)*0.25;
        
        return preco.toFixed(2);
    }

    const destinoDivs = estacoes.map((value, index) => {
        return (
            <div onClick={() => {
                if (origem !== value) {
                    setDestino(value)
                }
            }} className={styles.estacao + " " + (origem === value ? styles.selected : null) + " " + (destino === value ? styles.selectedEstacao : null)} key={index}>
                {value}
            </div>
        );
    })

    let stepHTML = null;

    switch (step) {
        case 0:
            stepHTML = (
                <DefaultPageLayout title={"Selecione Origem"} backFunc={() => { history.goBack() }} image="/assets/operators/Fertagus.png">
                    <div className={styles.content}>
                        <div className={styles.list}>
                            {origemDivs}
                        </div>
                        <div className={styles.bottomControls}>
                            <IonFabButton className={origem !== "" ? null : styles.displayNone} onClick={() => { setStep(1) }}>
                                <IonIcon icon={chevronForwardOutline} />
                            </IonFabButton>
                            <div className={styles.pageTicker}>
                                <div className={styles.dot + " " + styles.selectedDot}></div>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 1:
            stepHTML = (
                <DefaultPageLayout title={"Selecione Destino"} backFunc={() => { setStep(0) }} image="/assets/operators/Fertagus.png">
                    <div className={styles.content}>
                        <div className={styles.list}>
                            {destinoDivs}
                        </div>
                        <div className={styles.bottomControls}>
                            <IonFabButton className={destino !== "" ? null : styles.displayNone} onClick={() => { 
                                setStep(2);
                                history.replace(history.location.pathname, {
                                    origem,
                                    destino
                                });
                            }}>
                                <IonIcon icon={chevronForwardOutline} />
                            </IonFabButton>
                            <div className={styles.pageTicker}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot + " " + styles.selectedDot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 2:
            stepHTML = (
                <DefaultPageLayout title={"Confirme Pagamento"} backFunc={() => { 
                    setStep(1); 
                    history.replace(history.location.pathname, null);
                }}>
                    <div className={styles.content}>
                        <div> 


                            <div>
                                <div className={styles.information}>
                                    <div className={styles.title}>Transporte</div>
                                    <div className={styles.field}>{"Fertagus"}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Bilhete</div>
                                    <div className={styles.field}>{origem +" -> "+ destino}</div>
                                </div>

                                <div className={styles.information}>
                                    <div className={styles.title}>Total</div>
                                    <div className={styles.field}>{calcularPreco() + "€"}</div>
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
                                dispatch(actions.addTicket("Fertagus", origem+" -> "+destino));
                                setStep(3);
                            }}>Confirmar</IonButton>
                            <div className={styles.pageTicker}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                                <div className={styles.dot + " " + styles.selectedDot}></div>
                            </div>
                        </div>
                    </div>
                </DefaultPageLayout>
            )
            break;
        case 3:
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

export default Fertagus;