import {
    IonPage,
    IonButton,
    IonContent
  } from "@ionic/react";
  import styles from "./HorarioTTSL.module.css";
  import DefaultPageLayout from "../DefaulPageLayout";
  
  const HorarioTTSL = () => {
  
    return (
      <IonPage>
        <DefaultPageLayout title="Histórico - TTSL">
          <IonContent
            scrollEvents={true}
            onIonScrollStart={() => { }}
            onIonScroll={() => { }}
            onIonScrollEnd={() => { }}
          >

        <div className={styles.background}>
            <div className={styles.contentArea}>
                <h1>Não implementado</h1>
                <IonButton color="medium" href="/tabs/horario">Voltar</IonButton>
            </div>
        </div>

          </IonContent>
        </DefaultPageLayout>
      </IonPage>
    );
  };
  
  export default HorarioTTSL;
  