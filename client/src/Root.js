import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import ErrorHandler from './ErrorHandler';

const Root = () => (
    <BrowserRouter>
        <ErrorHandler>
            <App />
        </ErrorHandler>
    </BrowserRouter>
);

export default Root;