import { pencilOutline } from 'ionicons/icons';
import { IonPage, IonIcon, IonButton, IonInput, IonContent } from '@ionic/react';
import styles from './Conta.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DefaultPageLayout from '../DefaulPageLayout';
import { actions } from '../../../redux/reducers/reducer';

const Conta = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.data.activeUser.user);

  const [editMode, setEditMode] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editNIF, setEditNIF] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [nif, setNIF] = useState(user.nif);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [repeatPassword, setRepeatPassword] = useState("");

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
            <IonInput value={nif} type="number" class="ion-text-right" onIonChange={(e)=>{ setNIF(e.detail.value); }} onIonInput={(e) => { setEditNIF(true);  }} readonly={!editMode} ></IonInput>
          </div>

          <div className={styles.subcategory}> Informação de Conta </div>

          <div className={styles.fieldTitle} position="fixed">E-mail</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={email} class="ion-text-right" onIonChange={(e)=>{ setEmail(e.detail.value); }} onIonInput={(e) => { setEditEmail(true); }} readonly={!editMode} ></IonInput>
          </div>

          <div className={styles.fieldTitle} position="fixed">Password</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={password} type="password" class="ion-text-right" onIonChange={(e)=>{ setPassword(e.detail.value); }} onIonInput={(e) => { setEditPassword(true); }} readonly={!editMode} ></IonInput>
          </div>

          {editPassword ? <div>
          <div className={styles.fieldTitle} position="fixed">Reescrever Password</div>
          <div className={styles.userInfo}>
            {editMode ? <IonIcon icon={pencilOutline} /> : null}
            <IonInput value={repeatPassword} type="password" class="ion-text-right" readonly={!editMode} onIonChange={(e) => { setRepeatPassword(e.detail.value) }}></IonInput>
          </div></div>
          :null}

          {passwordError ? <div className={styles.error}>As password não são iguais.</div> : null}
          {editMode ? <IonButton className={styles.button} onClick={()=>{
            if(!(editPassword && password!==repeatPassword)){
              dispatch(actions.updateUserInfo(nif, email, password));
              setEditMode(false);
              setPasswordError(false);
              setEditMode(false);
            }else
              setPasswordError(true);
          }}><div>Guardar Alterações</div></IonButton> : <IonButton className={styles.button} onClick={() => { setEditMode(true) }}><div>Editar</div></IonButton>}
        </IonContent>
      </DefaultPageLayout>
    </IonPage>
  );
};

export default Conta;
