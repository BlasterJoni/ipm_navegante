import { IonButton } from '@ionic/react';
import styles from './Register.module.css';

const Register = (props) => {
    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <img src={"/assets/logo.png"} alt="Navegante's Logo" className={styles.logo} />
            </div>
            <div className={styles.contentArea}>
                <h1>Não implementado</h1>
                <IonButton color="medium" href="/login">Voltar</IonButton>
            </div>
        </div>
    );
};

export default Register;
