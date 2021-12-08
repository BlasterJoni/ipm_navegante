import { IonButton, IonInput, IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actions } from '../../redux/reducers/reducer';
import styles from './Login.module.css';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submited, setSubmited] = useState(false);

    const users = useSelector(state => state.data.users);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <img src={"/assets/logo.png"} alt="Navegante's Logo" className={styles.logo} />
            </div>
            <div className={styles.contentArea}>
                <form className={styles.loginArea} onSubmit={(event)=>{
                        event.preventDefault()
                        setSubmited(true);
                        if(email!=="" && password!=="" && users[email]!=null && users[email].user.password===password){
                            dispatch(actions.setLoggedIn(email));
                            history.push("/");
                        }
                    }}>
                    <div className={styles.login}>Login</div>
                    {submited?<div className={styles.error}>Email ou password invalida.</div>:null}
                    <div className={styles.bar}>
                        <IonInput
                            type="email"
                            placeholder="Email"
                            onIonChange={(e) => {setEmail(e.detail.value)}}
                        ></IonInput>
                    </div>
                    <div className={styles.bar}>
                        <IonInput
                            type="password"
                            placeholder="Password"
                            onIonChange={(e) => {setPassword(e.detail.value)}}
                        ></IonInput>
                    </div>
                    <IonButton color="dark" className={styles.logButton} type="submit">Login</IonButton>
                    <IonRouterLink href="/forgot"><div className={styles.esquecida}>Password esquecida?</div></IonRouterLink>
                </form>
                <div className={styles.register}>És novo aqui? <IonRouterLink href="/register">Regista-te!</IonRouterLink></div>
            </div>

        </div>
    );
};

export default Login;
