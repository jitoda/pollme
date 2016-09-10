import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
const React = require('react');

const App = React.createClass({
 render() {
   return (
     <div>
       <header className="head" >
         <h1>Poll Me</h1>
         <nav>
           <ul>
             <li><Link to="/home">Home</Link></li>
             <li><Link to="/create">Create Poll</Link></li>
             <li><Link to="/poll">poll</Link></li>
           </ul>
         </nav>
       </header>
       {this.props.children}
     </div>
   )
 }
})

module.exports = App; 