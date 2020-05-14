import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '../router/router';

const Wrapper = () =>{
    return(
        <BrowserRouter>
        <Router></Router>
        </BrowserRouter>
    )
}

export default Wrapper;