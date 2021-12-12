import { IonButton, IonIcon, IonPage } from "@ionic/react";
import styles from "./ZappingCarregar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import DefaultPageLayout from "../DefaulPageLayout";
import { useState } from "react";
import { actions } from "../../../redux/reducers/reducer";
import { checkmarkCircleOutline } from "ionicons/icons";

const ZappingCarregar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [buttonpressed, setButtonPressed] = useState(
    history.location.state ? history.location.state.buttonpressed : -1
  );
  const [step, setStep] = useState(history.location.state ? 1 : 0);
  const [price, setPrice] = useState(
    history.location.state ? history.location.state.price : -1
  );

  const user = useSelector((state) => state.data.activeUser.user);
  const zapping = useSelector((state) => state.data.activeUser.zapping);

  const canCharge = (value) => {
    return zapping.balance + value <= 99.99;
  };

  let stepHTML = null;

  switch (step) {
    case 0:
      stepHTML = (
        <DefaultPageLayout title="Carregar Zapping">
          <div className={styles.content}>
            <div className={styles.row}>
              <div
                className={
                  !canCharge(3)
                    ? styles.colDisabled
                    : buttonpressed !== 3
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(3)) {
                    const value = buttonpressed !== 3 ? 3 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                3 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(5)
                    ? styles.colDisabled
                    : buttonpressed !== 5
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(5)) {
                    const value = buttonpressed !== 5 ? 5 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                5 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(10)
                    ? styles.colDisabled
                    : buttonpressed !== 10
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(10)) {
                    const value = buttonpressed !== 10 ? 10 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                10 <div className={styles.euro}>€</div>
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={
                  !canCharge(15)
                    ? styles.colDisabled
                    : buttonpressed !== 15
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(15)) {
                    const value = buttonpressed !== 15 ? 15 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                15 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(20)
                    ? styles.colDisabled
                    : buttonpressed !== 20
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(20)) {
                    const value = buttonpressed !== 20 ? 20 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                20 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(25)
                    ? styles.colDisabled
                    : buttonpressed !== 25
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(25)) {
                    const value = buttonpressed !== 25 ? 25 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                25 <div className={styles.euro}>€</div>
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={
                  !canCharge(30)
                    ? styles.colDisabled
                    : buttonpressed !== 30
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(30)) {
                    const value = buttonpressed !== 30 ? 30 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                30 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(35)
                    ? styles.colDisabled
                    : buttonpressed !== 35
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(35)) {
                    const value = buttonpressed !== 35 ? 35 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                35 <div className={styles.euro}>€</div>
              </div>

              <div
                className={
                  !canCharge(40)
                    ? styles.colDisabled
                    : buttonpressed !== 40
                    ? styles.col
                    : styles.colSelected
                }
                onClick={() => {
                  if (canCharge(40)) {
                    const value = buttonpressed !== 40 ? 40 : -1;
                    setButtonPressed(value);
                    setPrice(value);
                  }
                }}
              >
                40 <div className={styles.euro}>€</div>
              </div>
            </div>
          </div>

          {!canCharge(3) ? (
            <div className={styles.error}>Limite de zapping alcançado.</div>
          ) : null}

          {buttonpressed > 0 ? (
            <IonButton
              className={styles.button}
              disabled={buttonpressed <= 0}
              onClick={() => {
                setStep(1);
                history.replace(history.location.pathname, {
                  price,
                  buttonpressed,
                });
              }}
            >
              <div>Recarregar</div>
            </IonButton>
          ) : (
            <IonButton
              className={styles.buttonDisabled}
              disabled={buttonpressed <= 0}
              onClick={() => {
                setStep(1);
                history.replace(history.location.pathname, {
                  price,
                  buttonpressed,
                });
              }}
            >
              <div>Recarregar</div>
            </IonButton>
          )}
        </DefaultPageLayout>
      );
      break;
    case 1:
      stepHTML = (
        <DefaultPageLayout
          title={"Confirme Pagamento"}
          backFunc={() => {
            setStep(0);
            history.replace(history.location.pathname, null);
          }}
        >
          <div className={styles.content2}>
            <div>
              <div>
                <div className={styles.information}>
                  <div className={styles.title}>Modalidade</div>
                  <div className={styles.field}>Zapping</div>
                </div>

                <div className={styles.information}>
                  <div className={styles.title}>Total</div>
                  <div className={styles.field}>{price + "€"}</div>
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
                    <img
                      src={
                        "/assets/banks/" +
                        user.payment[user.activePayment].type +
                        ".png"
                      }
                      alt="Logo"
                      className={styles.imageContainerMetodo}
                    />
                  </div>
                  <div className={styles.metodoCard}>
                    {user.payment[user.activePayment].type === "MBWay"
                      ? user.payment[user.activePayment].type +
                        " " +
                        user.payment[user.activePayment].number.substring(6)
                      : user.payment[user.activePayment].type +
                        " " +
                        user.payment[user.activePayment].number.substring(12)}
                  </div>
                  <div className={styles.metodoButon}>
                    <IonButton
                      className={styles.altButon}
                      href="/notabs/metodospagamento"
                    >
                      Alterar
                    </IonButton>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottomControls}>
              <IonButton
                className={styles.lastStepButton}
                onClick={() => {
                  dispatch(actions.addZapping(price));
                  setStep(2);
                }}
              >
                Confirmar
              </IonButton>
              <div className={styles.pageTicker}></div>
            </div>
          </div>
        </DefaultPageLayout>
      );
      break;
    case 2:
      stepHTML = (
        <div className={styles.lastStep}>
          <div className={styles.lastStepContent}>
            <IonIcon
              icon={checkmarkCircleOutline}
              className={styles.checkIcon}
            />
            <h1>Pagamento aceite</h1>
            <h3>Zapping carregado com sucesso!</h3>
          </div>
          <IonButton className={styles.lastStepButton} href="/notabs/zapping">
            Continuar
          </IonButton>
        </div>
      );
      break;
    default:
      break;
  }

  return <IonPage>{stepHTML}</IonPage>;
};

export default ZappingCarregar;
