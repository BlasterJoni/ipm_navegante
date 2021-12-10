import { IonIcon, IonContent, IonPage, IonButton } from "@ionic/react";
import styles from "./HorarioTab.module.css";
import DefaultPageLayout from "../DefaultPageLayout";
import { timeOutline } from "ionicons/icons";
import OperadoraItem from "./OperadoraItem/OperadoraItem";

const HorarioTab = () => {
  return (
    <IonPage>
      <DefaultPageLayout title="Horários" icon={timeOutline}>
        <div className={styles.content}>
          <IonContent
            scrollEvents={true}
            onIonScrollStart={() => {}}
            onIonScroll={() => {}}
            onIonScrollEnd={() => {}}
          >
            <div className={styles.list}>
              <OperadoraItem operator="Fertagus" />
              <OperadoraItem operator="MTS" />
              <OperadoraItem operator="TTSL" />
            </div>
          </IonContent>
        </div>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default HorarioTab;
