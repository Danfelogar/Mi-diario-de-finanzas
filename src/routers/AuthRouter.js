import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        //<>
            <div className="wrap-main">
                <div className="auth_main">
                <div className="auth_box-container">
                    <Switch>
                        <Route
                        exact
                        path="/auth/login"
                        component={ LoginScreen  } />
                        <Route
                        exact
                        path="/auth/register"
                        component={ RegisterScreen } />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
            </div>
        //</>
    )
}
