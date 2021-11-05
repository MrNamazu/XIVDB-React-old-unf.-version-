import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import XIVDatabase from './XIVDatabase';
import reportWebVitals from './config/reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

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
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
