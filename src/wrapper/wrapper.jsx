import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '../router/router';
import Header from '../components/common/Header';

const Wrapper = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    )
}

export default Wrapper;