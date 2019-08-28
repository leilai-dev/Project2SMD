import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'App';

const Root = () => (
    <BrowserRouter>
        <Route exact path="/" component={App}></Route>
    </BrowserRouter>
);

export default Root;