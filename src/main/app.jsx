import React from 'react'
import '../common/templates/dependencies'

import Header from '../common/templates/header'
import SideBar from '../common/templates/sidebar'
import Footer from '../common/templates/footer'
import Routes from './routes'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
)