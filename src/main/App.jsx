import '../common/templates/dependencies'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../common/templates/header'
import SideBar from '../common/templates/sidebar'
import Footer from '../common/templates/footer'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className='content-wrapper'>
                <Routes />
            </div>
            <Footer />
        </div>
    </HashRouter>
)