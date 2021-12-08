import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import BasePage from "./BasePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";

const Root = () => {

    const activeUser = useSelector(state => state.data.activeUser);

    return (
        <IonReactRouter>
            {activeUser == null ?
                <IonRouterOutlet>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/forgot">
                        <Forgot />
                    </Route>
                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                </IonRouterOutlet>
                : <BasePage />}
        </IonReactRouter>
    );
};

export default Root;