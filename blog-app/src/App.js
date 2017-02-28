import React from 'react';
import Post from './Post';
import Comments from './Comments'

const allComments =[
  'We love this site',
  'Can you make more stuff just for me',
  'Adventure Time is the best',
  'I\'m a brony',
];

class HelloWorld extends React.Component {
  render() {
    return (
      <article>
        <h1>Hello {this.props.name}</h1>
        <p>It looks like you are {this.props.age}</p>
        <Post data={this.props.post}/>
        <h2>Global Comments</h2>
        <Comments list={allComments} />
      </article>
    );
  }
};

export default HelloWorld;
