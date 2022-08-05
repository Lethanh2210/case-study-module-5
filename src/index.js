import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpotifyApiContext } from 'react-spotify-api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SpotifyApiContext.Provider value="BQAsTzMEUBzl5XPNEwdxDrpJZUDMsoVozw-vP4EM_LX3RzvyZYS0OpGOx3I7JkQ6Zwq0A6_AS-SlCdy_Yhw6ZapFTIKVBuiGMi4BgI5g_iki9cHUbYYvWpyDg0IOy_s_r18BbuY25Zqrjepbl1Xi3W3sEXkkPyEWyZ_wCsuwK7orgFZf_wxoCfjKm0bJ9ZH1Yns">
        <App />
    </SpotifyApiContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
