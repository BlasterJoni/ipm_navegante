import {
    IonPage,
    IonButton,
    IonIcon,
    IonContent,
    useIonPicker,
  } from "@ionic/react";
  import { useDispatch, useSelector } from "react-redux";
  import styles from "./AdicionarMbway.module.css";
  import { cardOutline } from "ionicons/icons";
  import DefaultPageLayout from "../DefaulPageLayout";
  import React, { useState } from "react";
import { actions } from "../../../redux/reducers/reducer";
import { useHistory } from "react-router";
  
  const AdicionarMbway = () => { 
    const [phone, setPhone] = useState(0);

    const formFilled = phone.toString().length === 9;

    const dispatch = useDispatch();
    const history = useHistory();
  
    return (
      <IonPage>
        <DefaultPageLayout title="Adicionar MBWay">
          <IonContent>

          <div className={styles.inputRow}>
          <img src={"/assets/banks/MBWay.png"} alt="Logo MBWay" className={styles.imageContainer} />
           </div> 

            <div className={styles.inputRow}>
                <div className={styles.indicator}>+351</div>
                <input placeholder={"900 000 000"}className={styles.phoneNumber} type="tel" onChange={(e) => {
                      e.target.value = e.target.value.slice(0, 9);
                      setPhone(() => e.target.value.slice(0, 9));
                    }}/>
            </div>

            <IonButton
              className={formFilled ? styles.button : styles.buttonDisabled}
              disabled={!formFilled}
              onClick={()=>{
                dispatch(actions.addMBWay(phone));
                history.go(-2);
              }}
              >
              Adicionar
            </IonButton>
          </IonContent>
        </DefaultPageLayout>
      </IonPage>
    );
  };
  
  export default AdicionarMbway;
  