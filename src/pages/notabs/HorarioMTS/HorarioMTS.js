import {
    IonPage,
    IonButton,
    IonContent
  } from "@ionic/react";
  import styles from "./HorarioMTS.module.css";
  import DefaultPageLayout from "../DefaulPageLayout";
  
  const HorarioMTS = () => {
  
    return (
      <IonPage>
        <DefaultPageLayout title="Horário - MTS">
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
  
  export default HorarioMTS;
  