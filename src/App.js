
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import MainForm from './MainForm'


export default function App() {
return(
    <Router>
        <Routes>
            <Route path="/form" element={<MainForm/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>
    );
}

       


