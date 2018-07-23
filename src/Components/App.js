import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'
import List from './List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recommended: [],
      recent: []
    }
  }

  handler(id, ids){
    let recent = this.state.recent.slice()
    recent.unshift(id)
    this.setState({recent: recent, recommended: ids})
  }

  // handleClick(){
  //
  // }

  render() {
    return (
      <div>
        <h1> miniTube </h1>
        <Player handler={this.handler.bind(this)}/>
        <List objs={this.state.recommended} type="Recommended videos"/>
        <List objs={this.state.recent} type="Recently watched videos"/>
      </div>
    );
  }
}

export default App;
