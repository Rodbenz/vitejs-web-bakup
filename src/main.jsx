import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonticon/fonticon.css'
import './assets/keenicons/duotone/style.css'
import './assets/keenicons/outline/style.css'
import './assets/keenicons/solid/style.css'
import './assets/sass/style.scss'
import './assets/sass/plugins.scss'
import './assets/sass/style.react.scss'
import AppRoutes from './routing/AppRoutes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppRoutes/>
  </React.StrictMode>,
)
