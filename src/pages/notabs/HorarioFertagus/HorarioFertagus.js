import {
  IonPage,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonContent,
  useIonPicker,
  IonIcon
} from "@ionic/react";
import styles from "./HorarioFertagus.module.css";
import DefaultPageLayout from "../DefaulPageLayout";
import { useSelector } from "react-redux";
import { useState } from "react";
import LisboaSetubal from "./Table";
import { chevronDownOutline, checkmarkCircleOutline } from "ionicons/icons";
import Table from "./Table";
import {cols as RScols, data as RS} from "./RomaAreeiroSetubal";
import {cols as SRcols, data as SR} from "./SetubalRomaAreeiro";
import {cols as RSfdscols, data as RSfds} from "./RomaAreeiroSetubalFDS";
import {cols as SRfdscols, data as SRfds} from "./SetubalRomaAreeiroFDS";

const HorarioFertagus = () => {
  const [day, setDay] = useState("Dias Úteis");
  const [direction, setDirection] = useState("Roma-Areeiro -> Setúbal");

  const [present] = useIonPicker();

  return (
    <IonPage>
      <DefaultPageLayout title="Horário - Fertagus">
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}
        >
          <IonSegment value={day}
            onIonChange={(e) => setDay(e.detail.value)}
          >
            <IonSegmentButton value="Dias Úteis">
              <IonLabel>Dias Úteis</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="Fim de semana / Feriados">
              <IonLabel>Fim de semana / Feriados</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <div className={styles.inputRow}>
            <div className={styles.direction}>
              <button placeholder={"Sentido"} className={styles.directionSelect} expand="block"
                onClick={() =>
                  present({
                    buttons: [
                      {
                        text: "Confirmar",
                        handler: (selected) => {
                          setDirection(selected.direction.value);
                        },
                      },
                    ],
                    columns: [
                      {
                        name: "direction",
                        options: [
                          { text: "Setúbal -> Roma-Areeiro", value: "Setúbal -> Roma-Areeiro" },
                          { text: "Roma-Areeiro -> Setúbal", value: "Roma-Areeiro -> Setúbal" }
                        ],
                      },
                    ],
                  })
                }
              >
                {direction}

              </button>
              <IonIcon icon={chevronDownOutline} className={styles.arrowIcon} />
            </div>

          </div>

        { direction === "Setúbal -> Roma-Areeiro" && day === "Dias Úteis" ?
          <div className={styles.tableHorario}>
            <Table data={SR} cols={SRcols}/>
          </div>
        : direction === "Setúbal -> Roma-Areeiro" && day === "Fim de semana / Feriados" ?
          <div className={styles.tableHorario}>
            <Table data={SRfds} cols={SRfdscols}/>
          </div>
        : direction === "Roma-Areeiro -> Setúbal" && day === "Dias Úteis" ?
          <div className={styles.tableHorario}>
            <Table data={RS} cols={RScols}/>
          </div>
        : 
          <div className={styles.tableHorario}>
            <Table data={RSfds} cols={RSfdscols}/>
          </div>
        }
        

        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default HorarioFertagus;
