import styles from "./Cartao.module.css"
import { useSelector } from 'react-redux'

const Cartao = (props) => {

    const user = useSelector((state) => state.data.user)

    return(
        <div className={styles.cartao}>
            <div className={styles.row}>
                <img src={"data:image/jpeg;base64,"+user.photo} alt="User Profile Picture" className={styles.photo}/>
                <div className={styles.infoCol}>
                    <div>
                        <div>Nº Cliente</div>
                        <div>{user.nclient}</div>
                    </div>
                    <div>
                        <div>Nº CC</div>
                        <div>{user.ncc}</div>
                    </div>
                    <div>
                        <div>Perfil</div>
                        <div>{user.status.profile}</div>
                    </div>
                </div>
            </div>
            <div className={styles.name}>{user.foreName + " " + user.surName}</div>
        </div>
    );
}

export default Cartao;
