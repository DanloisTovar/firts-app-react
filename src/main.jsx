import React from 'react';
import ReactDOM from 'react-dom/client';

// !css:
import './css/styles.css';

// !Componentes:
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
