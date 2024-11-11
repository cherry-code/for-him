import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.js';
import Opened from './open/Opened.js';
import Secret from './secret/Secret';
import Blog from './blog/Blog';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} /> {/* Main App Page */}
            <Route path="/open/Opened" element={<Opened />} /> {/* Opened Page */}
            <Route path="/secret/Secret" element={<Secret />} /> {/* Main App Page */}
            <Route path="/blog/Blog" element={<Blog />} /> {/* Main App Page */}
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
