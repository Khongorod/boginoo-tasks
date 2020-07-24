import React from 'react';
import { HomeDefault, LogIn, Shortener } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import './style/main.scss';
import { ResetPass } from './pages/resetpass';
import { SignUp } from './pages/signUp';
import { ContextProvider } from './context/userContext'
import { History } from './pages/history'

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
                    <Route path="/history" exact>
                        <History />
                    </Route>
                    <Route path="*">
                        <Shortener />
                    </Route>
                </Switch>
            </ContextProvider>
        </Router>
    )
}

export default App;