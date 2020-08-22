import React from 'react'
import { Router, Route, hashHistory } from '@spaced-out/react-router'

import Banner from './banner/Banner'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Sidebar from './common/sidebar/Sidebar'

export default props => (
    <Router history={ hashHistory }>
        <Route path='/' component={ Banner }/>
        <Route path='/projects' component={ Sidebar } />
        <Route path='/contact' component={ Contact } />
    </Router>
)