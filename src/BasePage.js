import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ticketOutline, timeOutline, locationOutline, calendarOutline, personOutline } from 'ionicons/icons';
import TitulosTab from './pages/tabs/Titulos/TitulosTab';
import HorarioTab from './pages/tabs/Horario/HorarioTab';
import TrajetoTab from './pages/tabs/Trajeto/TrajetoTab';
import HistoricoTab from './pages/tabs/Historico/HistoricoTab'
import UserTab from './pages/tabs/User/UserTab'
import Alertas from './pages/notabs/Alertas/Alertas';
import Passe from './pages/notabs/Alertas/Passe/Passe';


const BasePage = () => {
    return (
        <IonReactRouter>
            <Route path="/notabs" render={() => {
                return (
                    <IonRouterOutlet>
                        <Route exact path="/notabs/alertas">
                            <Alertas />
                        </Route>
                        <Route exact path="/notabs/passe">
                            <Passe/>
                        </Route>
                    </IonRouterOutlet>
                )
            }} />
            <Route
                path="/tabs"
                render={() => (
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route exact path="/tabs/titulos">
                                <TitulosTab />
                            </Route>
                            <Route exact path="/tabs/horario">
                                <HorarioTab />
                            </Route>
                            <Route exact path="/tabs/trajeto">
                                <TrajetoTab />
                            </Route>
                            <Route exact path="/tabs/historico">
                                <HistoricoTab />
                            </Route>
                            <Route exact path="/tabs/user">
                                <UserTab />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/tabs/titulos" />
                            </Route>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="titulos" href="/tabs/titulos">
                                <IonIcon icon={ticketOutline} />
                                <IonLabel>Titulos</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="horario" href="/tabs/horario">
                                <IonIcon icon={timeOutline} />
                                <IonLabel>Horário</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="trajeto" href="/tabs/trajeto">
                                <IonIcon icon={locationOutline} />
                                <IonLabel>Trajeto</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="historico" href="/tabs/historico">
                                <IonIcon icon={calendarOutline} />
                                <IonLabel>Histórico</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="user" href="/tabs/user">
                                <IonIcon icon={personOutline} />
                                <IonLabel>Utilizador</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                )} />

            <Route
                path="/"
                render={() => <Redirect to="/tabs/titulos" />}
                exact={true}
            />
        </IonReactRouter>


    );
};

export default BasePage;
