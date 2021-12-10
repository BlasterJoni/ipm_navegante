import {
  IonPage,
  IonIcon,
  IonButton,
  IonLoading,
  IonContent,
} from "@ionic/react";
import styles from "./AdicionarMetodo.module.css";
import { useSelector } from "react-redux";
import DefaultPageLayout from "../DefaulPageLayout";
import React, { useState } from "react";
import { chevronForwardOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const AdicionarMetodo = () => {

  const history = useHistory();

  return (
    <IonPage>
      <DefaultPageLayout title="Escolha o Método">
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => {}}
          onIonScroll={() => {}}
          onIonScrollEnd={() => {}}
        >
          <div className={styles.methodsList}>
            <div className={styles.border}>
              <IonButton
                className={styles.item}
                fill="clear"
                color="dark"
                href="/notabs/adicionarcartao/visa"
              >
                <div className={styles.imageAndType}>
                  <div className={styles.imageContainer}>
                    <img
                      src={"/assets/banks/Visa.png"}
                      alt="Logo Visa"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.title}>Visa</div>
                </div>

                <div className={styles.arrowContainer}>
                  <IonIcon icon={chevronForwardOutline} />
                </div>
              </IonButton>
            </div>

            <div className={styles.border}>
              <IonButton
                className={styles.item}
                fill="clear"
                color="dark"
                href="/notabs/adicionarcartao/mastercard"
              >
                <div className={styles.imageAndType}>
                  <div className={styles.imageContainer}>
                    <img
                      src={"/assets/banks/Mastercard.png"}
                      alt="Logo Mastercard"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.title}>Mastercard</div>
                </div>

                <div className={styles.arrowContainer}>
                  <IonIcon icon={chevronForwardOutline} />
                </div>
              </IonButton>
            </div>

            <div className={styles.border}>
              <IonButton
                className={styles.item}
                fill="clear"
                color="dark"
                href={"/notabs/adicionarmbway"}
              >
                <div className={styles.imageAndType}>
                  <div className={styles.imageContainer}>
                    <img
                      src={"/assets/banks/MBWay.png"}
                      alt="Logo MBWay"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.title}>MBWay</div>
                </div>

                <div className={styles.arrowContainer}>
                  <IonIcon icon={chevronForwardOutline} />
                </div>
              </IonButton>
            </div>
          </div>
        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default AdicionarMetodo;
