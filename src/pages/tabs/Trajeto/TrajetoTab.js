import { IonPage, IonInput, IonModal, IonButton, IonDatetime, IonSelect, IonSelectOption, IonContent, IonIcon } from '@ionic/react';
import styles from './TrajetoTab.module.css';
import { arrowBack, busOutline, chevronBack, chevronDownOutline, chevronForward, chevronUpOutline, locationOutline, settingsOutline, subway, train, trainOutline, trainSharp, walk } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';
import { useRef, useEffect, useState } from 'react';

const TrajetoTab = () => {

  const kek = useRef(null);
  const kek1 = useRef(null);

  const [de, setDe] = useState("");
  const [para, setPara] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [arrivingTrueLeavingFalse, setArrivingTrueLeavingFalse] = useState(true);
  const [mapView, setMapView] = useState(false);
  const [blinkState, setBlinkState] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const blink = () => {
    setBlinkState(true);
    setTimeout(() => {
      setBlinkState(false);
    }, 300);
  }

  return (
    <IonPage>
      {!mapView ?
        <DefaultPageLayout title="Trajeto" icon={locationOutline}>
          <div className={styles.content}>
            <div className={styles.controls}>
              <div className={styles.bar}>
                <IonInput
                  placeholder="Origem"
                  type="text"
                  value={de}
                  onIonChange={(e) => { setDe(e.detail.value) }}
                  className={styles.input}
                >De</IonInput>
              </div>
              <div className={styles.bar}>
                <IonInput
                  placeholder="Destino"
                  type="text"
                  value={para}
                  onIonChange={(e) => { setPara(e.detail.value) }}
                  className={styles.input}
                >Para</IonInput>
              </div>
              <div className={styles.bar}>
                <div className={styles.insideBar}>
                  <IonSelect className={styles.drop} value={arrivingTrueLeavingFalse} interface="popover" onIonChange={(e) => setArrivingTrueLeavingFalse(e.detail.value)}>
                    <IonSelectOption value={true}>Chegar às</IonSelectOption>
                    <IonSelectOption value={false}>Partir às</IonSelectOption>
                  </IonSelect>
                  <IonDatetime
                    className={styles.time}
                    placeholder="Horas"
                    displayFormat="HH:mm"
                    value={selectedDate}
                    onIonChange={(e) => setSelectedDate(e.detail.value)}
                  ></IonDatetime>
                </div>
              </div>
            </div>
            <div className={styles.split}></div>
            <div className={styles.options}>
              <IonContent>
                {de !== "" && para !== "" && selectedDate !== "" ?
                  de === "Cacilhas" && para === "Corroios" && (new Date(selectedDate).getHours() === 15 && new Date(selectedDate).getMinutes() === 0) && arrivingTrueLeavingFalse === true ?
                    <>
                      <div className={styles.item} onClick={() => { blink() }}>
                        <div className={styles.itemSides}><IonIcon className={styles.icon} icon={trainSharp} /></div>
                        <div className={styles.itemMiddle}>
                          <div>14:16 - 14:50</div>
                          <div><IonIcon icon={walk} /><IonIcon color="medium" icon={chevronForward} /><IonIcon icon={subway} /><span style={{ backgroundColor: "lightblue", paddingLeft: "5px", paddingRight: "5px", marginLeft: "3px" }}>1</span><IonIcon color="medium" icon={chevronForward} /><IonIcon icon={walk} /></div>
                        </div>
                        <div className={styles.itemSides}>34 min</div>
                      </div>
                      <div className={styles.item + " " + (blinkState ? styles.blink : "")} onClick={() => { setMapView(true) }}>
                        <div className={styles.itemSides}><IonIcon className={styles.icon} icon={trainSharp} /></div>
                        <div className={styles.itemMiddle}>
                          <div>14:13 - 14:57</div>
                          <div><IonIcon icon={walk} /><IonIcon color="medium" icon={chevronForward} /><IonIcon icon={subway} /><span style={{ backgroundColor: "lightgreen", paddingLeft: "5px", paddingRight: "5px", marginLeft: "3px" }}>3</span><IonIcon color="medium" icon={chevronForward} /><IonIcon icon={subway} /><span style={{ backgroundColor: "lightyellow", paddingLeft: "5px", paddingRight: "5px", marginLeft: "3px" }}>2</span><IonIcon color="medium" icon={chevronForward} /><IonIcon icon={walk} /></div>
                        </div>
                        <div className={styles.itemSides}>44 min</div>
                      </div>
                    </> :
                    <>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", textAlign: "center" }}>
                        <h1>Não implementado para os dados fornecidos.</h1>
                        <h4>Por favor insere os dados do cenário.</h4>
                      </div>
                    </> : null}
              </IonContent>
            </div>
          </div>
        </DefaultPageLayout>
        :
        <DefaultPageLayout clean>
          {showModal ?
            <div className={styles.trajeto}>
              <div className={styles.tabBoxTop} onClick={() => { setShowModal(false) }}>
                <div className={styles.maisDetalhes}>Esconder Detalhes</div>
                <IonIcon icon={chevronDownOutline}></IonIcon>
              </div>
              <img src="/assets/trajeto.png"></img>
            </div>
            :
            <div className={styles.mapa}>
              <IonButton className={styles.arrow} shape="round" fill="clear" color="dark" onClick={() => { 
                  setMapView(false);
                }}>
                <IonIcon icon={arrowBack} />
              </IonButton>
              <img src="/assets/mapa.png"></img>
              <div className={styles.tabBox} onClick={() => { setShowModal(true) }}>
                <IonIcon icon={chevronUpOutline}></IonIcon>
                <div className={styles.maisDetalhes}>Mais Detalhes</div>
              </div>
            </div>
          }

        </DefaultPageLayout>
      }
    </IonPage >
  );
};

export default TrajetoTab;
