import React from 'react';
import { HomeDefault, LogIn } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/login" exact>
                    <LogIn />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;