import React from 'react';
import Comments from './Comments'

class Post extends React.Component {
  render() {
    return (
      <article>
        <section>
          <h1>{this.props.data.title}</h1>
          <h4>by: {this.props.data.author}</h4>
          <p>{this.props.data.body}</p>
        </section>
        <Comments list={this.props.data.comments} />
      </article>
    );
  }
};

export default Post;
