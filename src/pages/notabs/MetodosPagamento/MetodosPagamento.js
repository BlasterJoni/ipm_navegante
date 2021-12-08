import { IonPage, IonIcon, IonButton, IonLoading, IonContent } from "@ionic/react";
import styles from "./MetodosPagamento.module.css";
import { useSelector } from "react-redux";
import DefaultPageLayout from "../DefaulPageLayout";
import React, { useState } from "react";
import { arrowUp, checkmarkCircleOutline } from "ionicons/icons";
import MetodoPagamentoItem from "./MetodoPagamentoItem/MetodoPagamentoItem"

const MetodosPagamento = () => {

  const methods = useSelector(state => state.data.activeUser.user.payment);

  const methodItems = methods.map((value, index) => {
    return <MetodoPagamentoItem method={value} key={index} />
  });

  return (
    <IonPage>
      <DefaultPageLayout title="Métodos Pagamento">
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}>
          <div className={styles.content}>
            {methodItems}
            <IonButton className={styles.button} href="/notabs/adicionarmetodo"><div>+</div></IonButton>
          </div>
        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default MetodosPagamento;