import { pencilOutline } from 'ionicons/icons';
import { IonPage, IonIcon, IonButton, IonInput, IonContent } from '@ionic/react';
import styles from './Conta.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DefaultPageLayout from '../DefaulPageLayout';

const Conta = () => {

  const user = useSelector(state => state.data.activeUser.user);

  const [editMode, setEditMode] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [newNif, setNif] = useState(user.nif);
  const [newEmail, setEmail] = useState(user.email);
  const [newPassword, setPassword] = useState(user.password);

  return (
    <IonPage>
      <DefaultPageLayout title="A Minha Conta">
        <IonContent>
          <div className={styles.userPicture}>
            <img src={"data:image/jpeg;base64," + user.photo} alt="User Profile Picture" className={styles.photo} />
          </div>

          <div className={styles.subcategory}> Informação Pessoal</div>

          {editMode ? <div className={styles.information}> Se pretende alterar a sua informação pessoal por favor dirija-se a um balcão de atendimento.</div> : null}

          <div className={styles.fieldTitle} position="fixed">Nomes próprios</div>
          <div className={styles.userInfo}>
            <IonInput value={user.foreName} className={"ion-text-right"} readonly></IonInput>
          </div>

          <div className={styles.fieldTitle} position="fixed">Apelidos</div>
          <div className={styles.userInfo}>
            <IonInput value={user.surName} class="ion-text-right" readonly></IonInput>
          </div>

          <div className={styles.fieldTitle} position="fixed">Nº Cartão de Cidadão</div>
          <div className={styles.userInfo}>
            <IonInput value= {user.ncc} class="ion-text-right" readonly></IonInput>
          </div>

          <div className={styles.fieldTitle} position="fixed">Nº Identificação Fiscal</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={user.nif} type="number" class="ion-text-right" readonly={!editMode} ></IonInput>
          </div>

          <div className={styles.subcategory}> Informação de Conta </div>

          <div className={styles.fieldTitle} position="fixed">E-mail</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={user.email} class="ion-text-right" readonly={!editMode} ></IonInput>
          </div>

          <div className={styles.fieldTitle} position="fixed">Password</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={user.password} type="password" class="ion-text-right" onIonInput={() => { setEditPassword(true) }} readonly={!editMode} ></IonInput>
          </div>

          {editPassword ? <div>
          <div className={styles.fieldTitle} position="fixed">Reescrever Password</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={user.password} type="password" class="ion-text-right" readonly={!editMode} ></IonInput>
          </div></div>
          :null}

          {editMode ? <IonButton className={styles.button}><div>Guardar Alterações</div></IonButton> : <IonButton className={styles.button} onClick={() => { setEditMode(true) }}><div>Editar</div></IonButton>}
        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Conta;
