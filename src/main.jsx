import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import "swiper/css/bundle";
import { GlobalProvider } from '../components/GlobalProviderMenuIsOpen/MenuIsOpen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
