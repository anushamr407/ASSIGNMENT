import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import RequestLeave from './components/RequestLeave';
import Login from './components/Login';

const App = () => {
    const [isAuthenticated, setAuth] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/add-employee" component={AddEmployee} />
                <Route path="/request-leave" component={RequestLeave} />
                <Route path="/login" render={(props) => <Login {...props} setAuth={setAuth} />} />
                {/* Additional routes */}
            </Switch>
        </Router>
    );
};

export default App;
