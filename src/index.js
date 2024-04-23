// Basic reload
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {AuthProvider} from './Context/AuthProvider';
// Bootstrap CSS, js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// 放我們的css
import './asset/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthProvider>
        <App />
     </AuthProvider>     
    )