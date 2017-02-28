import React from 'react';

function makeListItems(collection) {
  return collection.map((item, index) => <li key={index}>{item}</li>)
};

class Comments extends React.Component {
  render() {
    return (
        <section>
          <h3>Comments:</h3>
          <ol>
            {makeListItems(this.props.list)}
          </ol>
        </section>
    );
  }
};

export default Comments;
