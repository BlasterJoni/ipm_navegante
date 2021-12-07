import { IonPage, IonIcon, IonButton, IonInput, IonContent } from '@ionic/react';
import styles from './Estatuto.module.css';
import { useSelector } from 'react-redux';
import DefaultPageLayout from '../DefaulPageLayout';
import React, {useState} from 'react';

const Estatuto = () => {

  const status = useSelector(state => state.data.user.status);
  const [fileUploaded, setFileUploaded] = useState("Selecionar documento");

  const hiddenFileInput = React.useRef();

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    setFileUploaded(event.target.files[0].name);
  };

  return (
    <IonPage>
      <DefaultPageLayout title="Estatuto Especial">
        <IonContent>

          <div className={styles.information}>
            <div className={styles.title}>Perfil</div>
            <div className={styles.field}>{status.profile}</div>
          </div>

          <div className={styles.information}>
            <div className={styles.title}>Estado</div>
            <div className={styles.field}>{status.status}</div>
          </div>

          <div className={styles.information}>
            <div className={styles.title}>Validade</div>
            <div className={styles.field}>{status.validity.toLocaleDateString()}</div>
          </div>

          <div className={styles.submitProfile}>
            <div className={styles.title}>Adicionar/Renovar perfil</div>
            <input className={styles.file} value={""} type="file" ref={hiddenFileInput} onChange={handleChange} />
            <IonButton className={styles.button} fill="clear" color="dark" onClick={handleClick} >{fileUploaded}</IonButton>
            <IonButton className={styles.submitFile}>Submeter</IonButton>
          </div>

        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Estatuto;
