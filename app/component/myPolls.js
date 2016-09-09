const React = require('react');


const MyPolls = React.createClass({
	render() {
		return (
			<div>
				<div className="visualResults">
					<ul>
						<li> My Poll I created #1 </li>
						<li> My Poll I created #2 </li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = MyPolls; 