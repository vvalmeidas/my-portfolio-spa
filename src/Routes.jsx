import React from 'react'
import { Router, Route, hashHistory } from '@spaced-out/react-router'

import Banner from './banner/Banner'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

export default props => (
    <Router history={ hashHistory }>
        <Route path='/' component={ Banner }/>
        <Route path='/projects' component={ Projects } />
        <Route path='/contact' component={ Contact } />
    </Router>
)