import { IonPage } from '@ionic/react';
import styles from './TrajetoTab.module.css';
import { locationOutline } from 'ionicons/icons';
import DefaultPageLayout from '../DefaultPageLayout';
import {Loader, LoaderOptions} from 'google-maps';
import { useRef, useEffect } from 'react';
// or const {Loader} = require('google-maps'); without typescript
 
// const options = {
//   version: "3.47",
//   language: "PT",
//   region: "PT",
// };
// const loader = new Loader('AIzaSyByPNN2_2BpK2CWCH5WqdOWU84BqbhXBl4', options);
 
const TrajetoTab = () => {

  // const kek = useRef(null);

  // useEffect(()=>{
  //   const lul = async()=>{
  //     const google = await loader.load();
  //     const map = new google.maps.Map(kek.current, {
  //         center: {lat: 38.9954378, lng: -9.1411938},
  //         zoom: 8,
  //     });
      
  //   }
  //   lul();
  // }, [kek]);
  

  return (
    <IonPage>
      <DefaultPageLayout title="Trajeto" icon={locationOutline}>
        {/* <div ref={kek} style={{height:"100%", width:"100%"}}></div> */}
      </DefaultPageLayout>
    </IonPage>
  );
};

export default TrajetoTab;
