import React from 'react'
import ReactDOM from 'react-dom'
import Initial from './component/initial.js'
import CreatePoll from './component/createPoll.js'
import Poll from './component/poll.js'
import View from './component/viewResults.js'
import Todo from './component/todo.js'
import MyPolls from './component/myPolls.js'
import App from './component/app.js'
import Home from './component/home.js'
import Signup from './component/signup.js'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

ReactDOM.render((

 <Router history = {hashHistory}>
 	<Route path="/" component={Initial}/>
 	<Route path="/signup" component={Signup}/>
  <Route path="/app" component={App}>
    <Route path="/home" component={Home}/>
    <Route path="/create" component={CreatePoll}/>
    <Route path="/poll" component={Poll}>
     <Route path="/todoPoll" component={Todo}/>
     <Route path="/viewPoll" component={View}/>
    </Route>
    <Route path="/myPolls" component={MyPolls}/>
  </Route>
 </Router>
), document.getElementById('root'))