import './app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// For later
// import {Provider} from 'react-redux'
// import store from './store'
import Routes from './routes'


ReactDOM.render(
//   <Provider store={store}>
//   </Provider>,
    <Routes />,
  document.getElementById('app')
)