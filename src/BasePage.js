import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { ticketOutline, timeOutline, locationOutline, calendarOutline, personOutline } from 'ionicons/icons';
import TitulosTab from './pages/tabs/Titulos/TitulosTab';
import HorarioTab from './pages/tabs/Horario/HorarioTab';
import TrajetoTab from './pages/tabs/Trajeto/TrajetoTab';
import HistoricoTab from './pages/tabs/Historico/HistoricoTab'
import UserTab from './pages/tabs/User/UserTab'
import Alertas from './pages/notabs/Alertas/Alertas';
import Passe from './pages/notabs/Passe/Passe';
import Bilhetes from './pages/notabs/Bilhetes/Bilhetes'
import Bilhete from './pages/notabs/Bilhete/Bilhete'
import Conta from './pages/notabs/Conta/Conta';
import Zapping from './pages/notabs/Zapping/Zapping';
import Estatuto from './pages/notabs/Estatuto/Estatuto';
import MetodosPagamento from './pages/notabs/MetodosPagamento/MetodosPagamento';
import AdicionarMetodo from './pages/notabs/AdicionarMetodo/AdicionarMetodo';

const BasePage = () => {
    return (
        <IonRouterOutlet>

            <Route path="/notabs" render={() => {
                return (
                    <IonRouterOutlet>
                        <Route exact path="/notabs/alertas">
                            <Alertas />
                        </Route>
                        <Route exact path="/notabs/passe">
                            <Passe />
                        </Route>
                        <Route exact path="/notabs/bilhetes">
                            <Bilhetes />
                        </Route>
                        <Route exact path="/notabs/bilhetes/:index">
                            <Bilhete />
                        </Route>
                        <Route exact path="/notabs/zapping">
                            <Zapping />
                        </Route>
                        <Route exact path="/notabs/conta">
                            <Conta />
                        </Route>
                        <Route exact path="/notabs/estatuto">
                            <Estatuto />
                        </Route>
                        <Route exact path="/notabs/metodospagamento">
                            <MetodosPagamento />
                        </Route>
                        <Route exact path="/notabs/adicionarmetodo">
                            <AdicionarMetodo />
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
            <Route exact path="/" render={() => <Redirect to="/tabs/titulos" />} />
        </IonRouterOutlet>

    );
};

export default BasePage;
