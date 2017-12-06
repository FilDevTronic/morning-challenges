/*

  Loading Screen

  Run this React app. You'll notice there's a 2-3 second delay before the
  user's email is displayed. Seems like pretty bad UX.

  Challenge:
  - Display a loading message before showing the welcome message.
  (hint: add an isLoading boolean to your state)

  Beast mode:
  - There's no error handling in our axios call! Fix this.
    (you can simluate an error by changing the https request to http)
  - Display a message to the user if something goes wrong.
  - Refactor the axios GET to use async/await instead of .then

*/

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // Our initital state. An empty userEmail.
  state = {
    userEmail: '',
    isLoading: true,
    error: null
  }

  render() {
    return (
      <div className="App">
        {(() => {
          if (!this.state.error && this.state.isLoading ) {
            return <p className="App-intro">LOADING...</p>
          } else if (!this.state.error && !this.state.isLoading) {
            return <p className="App-intro">Welcome, {this.state.userEmail}</p>
          } else {
            return <p className="App-intro"> {this.state.error}</p>
          }
        })()}
      </div>
    );
  }
  componentDidMount() {
    // setTimeout added to simulate a slow network
    setTimeout(() => {
      // Get a random user from the randomuser api
      axios.get('https://randomuser.me/api/')
        .then((response) => {
          // Update the state with the random user's email
          this.setState({
            userEmail: response.data.results[0].email,
            isLoading: false
          });
        })
        .catch((error) => {
          console.log('An error has ocurred!', error);
          this.setState({
            error: 'Something went wrong',
            isLoading: false
          })
        })
    }, 2000)
  }
}

export default App;
