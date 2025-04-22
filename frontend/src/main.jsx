import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {SnackbarProvider} from 'notistack';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
    </HashRouter>
  </React.StrictMode>
  );
