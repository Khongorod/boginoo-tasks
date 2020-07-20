import React from 'react';
import { HomeDefault, LogIn } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import './style/main.scss';
import { ResetPass } from './pages/resetpass';
import { SignUp } from './pages/signUp';
import './firebase'
import { ContextProvider } from './context/userContext'

const App = () => {

    return (
        <Router>
            <ContextProvider>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <LogIn />
                    </Route>
                    <Route path="/resetpass" exact>
                        <ResetPass />
                    </Route>
                    <Route path="/signUp" exact>
                        <SignUp />
                    </Route>
                </Switch>
            </ContextProvider>
        </Router>
    )
}

export default App;