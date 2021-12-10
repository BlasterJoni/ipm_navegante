import { IonPage, IonIcon, IonDatetime, IonButton, IonContent } from '@ionic/react';
import styles from './HistoricoTab.module.css';
import { calendarOutline, searchOutline, closeCircleOutline } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';
import { useSelector } from 'react-redux';
import HistoricoItem from './HistoricoItem/HistoricoItem';
import { useState } from 'react';

const HistoricoTab = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  const months = "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro";

  const history = useSelector(state => state.data.activeUser.history);

  const allItems = history.map((value, index) => {
    return <HistoricoItem history={value} key={index} />
  });

  const filteredItems = history.filter((value, index, arr) => {
    return new Date(value.date.split("T")[0]).toLocaleDateString('pt-PT') === new Date(selectedDate).toLocaleDateString('pt-PT');
  });

  const filteredItemsComponents = filteredItems.map((value, index) => {
    return <HistoricoItem history={value} key={index} />
  });

  const historyItems = () => {
    return selectedDate == null ? allItems : filteredItemsComponents;
  }

  return (
    <IonPage>

      <DefaultPageLayout title="Histórico" icon={calendarOutline}>
        <div className={styles.content}>
          <div className={styles.searchBar}>
            <IonDatetime value={selectedDate} displayFormat="D de MMMM, YYYY" placeholder="Selecionar Data" className={styles.search} monthNames={months} cancelText="Cancelar" doneText="Concluído" onIonChange={e => setSelectedDate(e.detail.value)}></IonDatetime>

            {selectedDate == null ? <IonIcon icon={searchOutline} className={styles.searchIcon} /> :
              <IonIcon icon={closeCircleOutline} className={styles.deletedate} onClick={() => { setSelectedDate(null) }} />}
          </div >

          <IonContent
            scrollEvents={true}
            onIonScrollStart={() => { }}
            onIonScroll={() => { }}
            onIonScrollEnd={() => { }}>
            {historyItems()}
          </IonContent>

        </div>

      </DefaultPageLayout>
    </IonPage>
  );
};

export default HistoricoTab;
