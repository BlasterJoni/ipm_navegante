import { IonPage, IonButton, IonIcon, IonInput,IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import styles from './AdicionarMetodo.module.css';
import { cardOutline} from 'ionicons/icons';
import DefaultPageLayout from '../DefaulPageLayout';
import React, { useRef, useState } from "react";


const AdicionarMetodo = () => {

  const cards = useSelector(state => state.data.activeUser.user.payment);
  const [card, setCard] = useState(0);

//   const handleChange = (object) => {
//     if (object.target.value.length > object.target.maxLength) {
//      object.target.value = object.target.value.slice(0, object.target.maxLength)
//       }
//     }



  return (
    <IonPage>
      <DefaultPageLayout title="Adicionar Cartão">
        <IonContent>

            <div >
                <div className={styles.title}> Número do cartão</div>
                <div className={styles.cardNumber}>
                    <IonIcon icon={cardOutline} />
                    <div className={styles.cardInfo}>
                        <input placeholder={"0000000000000000"} type="number" onChange={(e) => setCard(() => e.target.value.slice(0, 16))}></input>
                    </div>
                </div>
            </div>

            <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                    <div className={styles.title}> Data de Validade</div>
                    <div className={styles.cardInfo}>
                    <input placeholder={"MM/YY"} type="date"></input>
                </div>
                </div>
                <div className={styles.inputColumn}>
                    <div className={styles.title}> CVV</div>
                    <div className={styles.cardInfo}>
                    <input value={card} placeholder={"123"} type="number" onChange={(e) => (setCard(() => e.target.value.slice(0, 3)))}></input>
                </div>
                </div>
            </div>

            <div>
                <div className={styles.title}>País</div>
                <div className={styles.cardInfo}>
                    <IonInput value={""} placeholder={"Portugal"} ></IonInput>
                </div>
            </div>

            <IonButton className={styles.button}>Adicionar</IonButton>

        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default AdicionarMetodo;
