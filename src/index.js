import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import XIVDatabase from './XIVDatabase';
import reportWebVitals from './config/reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { ToastContainer } from 'react-toastify';

import './assets/css/css/toastify.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/css/xivdb.css';


i18n
  .use(initReactI18next) 
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'de'],
    fallbackLng: "en",
    detection: {
      order: [  'cookie', 'htmlTag', 'localStorage', 'path'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

const loadingMarkup = (
  <div className="LoadingScreen">
    <h2>Loading..</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <XIVDatabase />
      <ToastContainer position="bottom-right" hideProgressBar={false} autoClose={5000} pauseOnFocusLoss={false} />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
