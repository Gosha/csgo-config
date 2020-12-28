import React, { Component } from 'react';
import { render } from 'react-dom';
import Editor from './Editor'
import './style.css';

// import {
//   base
// } from './firebase'

// interface AppProps { }
// interface AppState {
//   name: string;
// }

// console.log(base)

// class TestFirestore extends Component<{}, {
//   users: object
// }> {
//   state={}

//   componentDidMount() {
//     base.bindCollection('users', {
//       context: this,
//       state: 'users'
//     })
//   }

//   render() {
//     return <div>{JSON.stringify(this.state.users)}</div>
//   }
// }

class App extends Component {

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
