import React from 'react';
import { connect } from 'react-redux';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';

function mapStateToProps(/* state */) {
  return {
    // TODO: Add state to be mapped to props
  };
}

function mapDispatchToProps(/* dispatch */) {
  return {
    // TODO: Add actions to be mapped to props
  };
}

class App extends React.Component {
  state = {
    userID: Math.round(Math.random() * 1000000).toString(),
    history: [],
  };

  render() {
    const { sendMessage, state } = this;
    return (
      <div>
        <ChatHistory history={ state.history }/>
        <ChatInput userID={ state.userID } sendMessage={ sendMessage }/>
      </div>
    );
  }

  sendMessage = (message) => {
    console.log('sendMessage', message);
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
