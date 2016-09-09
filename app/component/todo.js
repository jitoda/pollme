const React = require('react');


const Todo = React.createClass({
	render() {
		return (
			<div>
				<div className="listOfPolls">
					<ul>
						<li> Public Poll1 </li>
						<li> Public Poll2 </li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = Todo; 