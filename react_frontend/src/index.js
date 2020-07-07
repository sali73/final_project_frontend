import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles' ;
import theme from "./theme";
import App from './App';

const root = document.getElementById("root");
let hist = createBrowserHistory();

ReactDOM.render((
    <Router history={hist}>
        <ThemeProvider theme={theme}>
            <App />
       </ThemeProvider>
    </Router>
), root);