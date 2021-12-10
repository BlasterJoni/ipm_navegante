import { IonIcon, IonContent, IonPage, IonButton } from "@ionic/react";
import styles from "./ZappingCarregar.module.css";
import { arrowBack, notificationsOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import DefaultPageLayout from "../DefaulPageLayout";
import { useState } from "react";

const ZappingCarregar = (props) => {
  const history = useHistory();
  const [buttonpressed, setButtonPressed] = useState(-1);
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(-1);

  let stepHTML = null;

  switch (step) {
    case 0:
      stepHTML = (
        <DefaultPageLayout title="Carregar Zapping">
          <div className={styles.content}>
            <div className={styles.row}>
              {buttonpressed !== 3 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(3);
                    setPrice(3);
                  }}
                >
                  3 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  3 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 5 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(5);
                    setPrice(5);
                  }}
                >
                  5 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  5 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 10 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(10);
                    setPrice(10);
                  }}
                >
                  10 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  10 <div className={styles.euro}>€</div>
                </div>
              )}
            </div>
            <div className={styles.row}>
              {buttonpressed !== 15 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(15);
                    setPrice(15);
                  }}
                >
                  15 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  15 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 20 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(20);
                    setPrice(20);
                  }}
                >
                  20 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  20 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 25 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(25);
                    setPrice(25);
                  }}
                >
                  25 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  25 <div className={styles.euro}>€</div>
                </div>
              )}
            </div>
            <div className={styles.row}>
              {buttonpressed !== 30 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(30);
                    setPrice(30);
                  }}
                >
                  30 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  30 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 35 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(35);
                    setPrice(35);
                  }}
                >
                  35 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  35 <div className={styles.euro}>€</div>
                </div>
              )}

              {buttonpressed !== 40 ? (
                <div
                  className={styles.col}
                  onClick={() => {
                    setButtonPressed(40);
                    setPrice(40);
                  }}
                >
                  40 <div className={styles.euro}>€</div>
                </div>
              ) : (
                <div
                  className={styles.colSelected}
                  onClick={() => {
                    setButtonPressed(-1);
                    setPrice(-1);
                  }}
                >
                  40 <div className={styles.euro}>€</div>
                </div>
              )}
            </div>
          </div>
          {buttonpressed > 0 ? 
          ( <IonButton
            className={styles.button}
            disabled={buttonpressed <= 0}
            onClick={() => setStep(1)}
          >
            <div>Recarregar</div>
          </IonButton>)
          :
          ( <IonButton
            className={styles.buttonDisabled}
            disabled={buttonpressed <= 0}
            onClick={() => setStep(1)}
          >
            <div>Recarregar</div>
          </IonButton>)
          }
        </DefaultPageLayout>
      );
      break;
    case 1:
      stepHTML = (
        <DefaultPageLayout title="confirmar pagamento" backFunc={() => setStep(0)}>
          <div className={styles.faturaitem}>{price} uwu</div>
          );
        </DefaultPageLayout>
      );
      break;
    default:
      break;
  }

  return <IonPage>{stepHTML}</IonPage>;
};

export default ZappingCarregar;
