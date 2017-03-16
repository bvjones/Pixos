import React from 'react'

import io from 'socket.io-client';
const socket = io.connect(`${window.location.origin}`);

export default class MatchMaking extends React.Component {

  componentDidMount() {
    socket.emit('request:matchmaking');
  }

  render() {
    return (
      <div>
        <h2>Matchmaking</h2>
        <img src="/icons/loading.svg" alt="loading icon"></img>
      </div>
    );
  }
}
