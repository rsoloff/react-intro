import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const post = {
  title:    'we',
  author:   'fjfdj',
  body:     'asdsas',
  comments: ['aaa', 'bbb', 'ccc', 'ddd'],
};

ReactDOM.render(
  <App
  name="Ross"
  age="25"
  post={post}/>,
  document.getElementById('root')
);
