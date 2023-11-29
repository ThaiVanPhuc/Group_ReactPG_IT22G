import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-o4hhdnltskba3wev.us.auth0.com"
    clientId="axYX6kzLoplHEagfeLb4tR9br43BkQME"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
