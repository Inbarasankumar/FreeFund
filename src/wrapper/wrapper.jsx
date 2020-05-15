import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '../router/router';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Wrapper = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    )
}

export default Wrapper;