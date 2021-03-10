import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './NoMatch/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/explore/:leagueID'>
                    <LeagueDetails />
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
