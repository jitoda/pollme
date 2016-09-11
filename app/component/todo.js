const React = require('react');

const Todo = React.createClass({
    getInitialState: function() {
        return {poll_id:1, title: 'Mock Data Title', choices:[{c1: 'choice1', v1: 0, c2: 'choice2', v2:0}]}
    },
    componentDidMount: function(e) {
        window.addEventListener('click', this.updatePost);
    },
    updatePost: function(e) {
        let choice_id = e.target.getAttribute('id');
        let poll_id = this.state.poll_id;
        let postObj = {};
        postObj.poll_id = poll_id;
        postObj.choice_id = choice_id;
        console.log(postObj);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/poll',
            data: postObj
        });
    },
    render: function() {
        return (
            <div>

                <div className='pollTitle'>
                    <p> Sample Title </p>
                </div>

                <div className='choices'>
                    <a><li id='1'> Option 1 </li></a>
                    <a><li id='2'> Option 1 </li></a>  
                </div>
            </div>
        )
    }
})
module.exports = Todo;