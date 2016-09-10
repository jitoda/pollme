const React = require('react');

const Home = React.createClass({
  render() {
    return (
      <div>
        <h3>Home</h3>
        <section className='poll-list'>
          <div className='poll-preview'>
            <h3 className='poll-question'>Where are we going out tonight</h3>
            <div className='choices'>
              <ul>
                <li><a href='#'>Option 1</a></li>
                <li><a href='#'>Option 2</a></li>
                <li><a href='#'>Option 3</a></li>
                <li><a href='#'>Option 4</a></li>
              </ul>
            </div>
            <div className='user'>Username</div>
          </div>
        </section>
      </div>  
   )
 }
})

module.exports = Home; 