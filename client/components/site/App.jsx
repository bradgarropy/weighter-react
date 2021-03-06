// react
import React from 'react';
import { Route } from 'react-router-dom';

// components
import Login from '../../views/Login';
import Reset from '../../views/Reset';
import Banner from './Banner';
import Forgot from '../../views/Forgot';
import Weight from '../../views/Weight';
import Profile from '../../views/Profile';
import Welcome from '../../views/Welcome';
import Feedback from '../../views/Feedback';
import Password from '../../views/Password';
import Register from '../../views/Register';
import Navigation from './Navigation';
import EditWeight from '../../views/EditWeight';

// utils
import { isDevelopment } from '../../utils/environment';
import { isAuthenticated } from '../../utils/authentication';


const App = () => {

    const displayBanner = isDevelopment() && isAuthenticated();

    return (

        <div id="app">

            {displayBanner && <Banner />}

            <Route path="/" component={Navigation} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/weight" component={Weight} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/password" component={Password} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/edit/:id" component={EditWeight} />
            <Route exact path="/reset/:token" component={Reset} />

        </div>

    );

};


export default App;
