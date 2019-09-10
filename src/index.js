import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 444" 
                avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 333" 
                commentText="No this is my post" 
                avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 222" 
                commentText="Yeahhhhh this is my post" 
                avatar={faker.image.avatar()}/>
        </ApprovalCard>

    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

 