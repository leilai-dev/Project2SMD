import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import ClientErrorHandler from 'ClientErrorHandler';

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;