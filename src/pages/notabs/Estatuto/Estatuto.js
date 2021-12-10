import {IonPage, IonIcon, IonButton, IonLoading, IonContent} from "@ionic/react";
import styles from "./Estatuto.module.css";
import { useSelector } from "react-redux";
import DefaultPageLayout from "../DefaulPageLayout";
import React, { useState } from "react";
import { arrowUp, checkmarkCircleOutline } from "ionicons/icons";

const Estatuto = () => {
  const status = useSelector((state) => state.data.activeUser.user.status);
  const [fileName, setFileName] = useState("Selecionar documento");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileSubmitted, setFileSubmitted] = useState(false);
  const [fileAccepted, setFileAccepted] = useState(false);

  const hiddenFileInput = React.useRef();

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    setFileName(event.target.files[0].name);
    setFileUploaded(true);
  };

  const submitFile = () => {
      setFileSubmitted(true);
  };

  return (
    <IonPage>
      <DefaultPageLayout title="Estatuto Especial">
        <IonContent>
          <div className={styles.information}>
            <div className={styles.title}>Perfil</div>
            <div className={styles.field}>{status.profile}</div>
          </div>

          <div className={styles.information}>
            <div className={styles.title}>Estado</div>
            <div className={styles.field}>{status.status}</div>
          </div>

          <div className={styles.information}>
            <div className={styles.title}>Validade</div>
            <div className={styles.field}>
              {new Date(status.validity).getMonth()+1 + "/" + new Date(status.validity).getFullYear().toString().substring(2, 4)}
            </div>
          </div>

          <div className={styles.submitProfile}>
            <div className={styles.title}>Adicionar/Renovar perfil</div>
            {!fileAccepted ? 
              <>
                <input
                  className={styles.file}
                  value={""}
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                />
                <div className={styles.submitFile}>
                  <IonButton fill="clear" color="dark" onClick={handleClick}>
                    {fileName}
                  </IonButton>
                  <IonIcon icon={arrowUp} />
                </div>
                <IonButton className={fileUploaded ? styles.button : styles.buttonDisabled} disabled={!fileUploaded} onClick={submitFile}>
                  Submeter
                </IonButton>
              </>
            : 
              <div className={styles.success}>
              <IonIcon icon={checkmarkCircleOutline} className={styles.successIcon}/>
              <div className={styles.successTitle}> Pedido submetido! </div>
              <div> Após a validação do documento o seu perfil irá ser atualizado. </div>
              </div>}
          </div>

        <IonLoading
          isOpen={fileSubmitted}
          onDidDismiss={() => {setFileSubmitted(false); setFileAccepted(true);}}
          message={'A enviar documento...'}
          duration={3000}/>

        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Estatuto;
