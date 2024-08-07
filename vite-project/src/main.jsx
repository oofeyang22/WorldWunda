import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
//import client from './Graphql/Queries.jsx'; // Import the client
import { ContextProvider } from './context/Store.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(


<React.StrictMode>
    <BrowserRouter>
     <ContextProvider>
        <App />
     </ContextProvider>

    </BrowserRouter>

</React.StrictMode>,
)
