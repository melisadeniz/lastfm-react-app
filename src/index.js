import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistor } from './reduxStore';
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import store from "./reduxStore"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <PersistGate loading={null} persistor={persistor}>
        <ReduxProvider store={store}>
     <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </ReduxProvider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
