import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import './styles/main.scss'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {saveToLocalStorage} from "./services";
import {store} from './store';

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
