import {
  IonPage,
  IonButton,
  IonIcon,
  IonContent,
  useIonPicker,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdicionarCartao.module.css";
import { cardOutline } from "ionicons/icons";
import DefaultPageLayout from "../DefaulPageLayout";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { countries } from "./countryNames";
import { useHistory } from "react-router";
import { actions } from "../../../redux/reducers/reducer";

const AdicionarCartao = (props) => { //props.type to get type of card
  const cards = useSelector((state) => state.data.activeUser.user.payment);
  const [card, setCard] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [validityMonth, setValidityMonth] = useState(0);
  const [validityYear, setValidityYear] = useState(0);

  const [country, setCountry] = useState({ text: "Portugal", value: "PT" });

  const [present] = useIonPicker();

  const history = useHistory();

  const dispatch = useDispatch();

  const countryOptions = () => {

    const options = [];
    const countriesArray = Object.entries(countries); //[["PT", "Portugal"], ["US", "United States"]]

    for (let country of countriesArray) {
      let entry = {
        text: country[1],
        value: country[0],
      };
      options.push(entry);
    }

    options.sort((a, b)=>a.text.localeCompare(b.text))

    return options;
  };

  const formFilled =
    card.toString().length === 16 &&
    cvv !== 0 &&
    validityMonth !== 0 &&
    validityYear !== 0;

  return (
    <IonPage>
      <DefaultPageLayout title="Adicionar Cartão">
        <IonContent>

          <div className={styles.title}> Número do cartão</div>
          <div className={styles.cardNumber}>
            <IonIcon icon={cardOutline} />
            <div className={styles.cardInfo}>
              <input
                placeholder={"0000 0000 0000 0000"}
                type="number"
                onChange={(e) => {
                  e.target.value = e.target.value.slice(0, 16);
                  setCard(() => e.target.value.slice(0, 16));
                }}
              ></input>
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputColumn}>
              <div className={styles.title}> Data de Validade</div>
              <div className={styles.inputRow}>
                <div className={styles.twoDigitInput}>
                  <input
                    placeholder={"MM"}
                    max={12}
                    type="number"
                    onChange={(e) => {
                      if (e.target.value > 12) {
                        e.target.value = 12;
                      }
                      e.target.value = e.target.value.slice(0, 2);
                      setValidityMonth(() => e.target.value.slice(0, 2));
                    }}
                    onBlur={(e) => {
                      if (e.target.value < 1) {
                        e.target.value = 1;
                      }
                      if (e.target.value.length === 1)
                        e.target.value = ("0" + e.target.value).slice(-2);
                    }}
                  ></input>
                </div>{" "}
                /
                <div className={styles.twoDigitInput}>
                  <input
                    placeholder={"YY"}
                    type="number"
                    onChange={(e) => {
                      if (e.target.value.length === 2 && e.target.value < 21) {
                        e.target.value = 21;
                      }
                      e.target.value = e.target.value.slice(0, 2);
                      setValidityYear(() => e.target.value.slice(0, 2));
                    }}
                    onBlur={(e) => {
                      if (e.target.value.length === 1) e.target.value = 21;
                    }}
                  ></input>
                </div>
              </div>
            </div>
            
            <div className={styles.inputColumn}>
              <div className={styles.title}>CVV</div>
              <div className={styles.threeDigitInput}>
                <input
                  placeholder={"123"}
                  type="number"
                  onChange={(e) => {
                    e.target.value = e.target.value.slice(0, 3);
                    setCvv(() => e.target.value.slice(0, 3));
                  }}
                ></input>
              </div>
            </div>
          </div>

          <div className={styles.inputColumn}>
            <div className={styles.title}>País</div>
            <div className={styles.cardInfo}>
              <ReactCountryFlag countryCode={country.value} svg />
              <button
                className={styles.countryButton}
                expand="block"
                onClick={() =>
                  present({
                    buttons: [
                      {
                        text: "Confirmar",
                        handler: (selected) => {
                          setCountry(selected.country);
                        },
                      },
                    ],
                    columns: [
                      {
                        name: "country",
                        options: countryOptions(),
                      },
                    ],
                  })
                }
              >
                {country.text}
              </button>
            </div>
          </div>

          <IonButton
            className={formFilled ? styles.button : styles.buttonDisabled}
            disabled={!formFilled}
            onClick={()=>{
              dispatch(actions.addCard(props.type, card, cvv, new Date("20"+validityYear, validityMonth, 0), country));
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

export default AdicionarCartao;
