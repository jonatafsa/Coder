import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import CoderList from './pages/CoderList';
import CoderForm from './pages/CoderSignUp';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={CoderForm} />
            <Route path="/study" component={CoderList} />
        </BrowserRouter>
    );
}

export default Routes;