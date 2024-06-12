import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/UserContext.jsx'
import ItemsContextProvider from './context/ItemsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
        <ItemsContextProvider>
          <App />
        </ItemsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
