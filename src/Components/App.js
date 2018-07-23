import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'
import List from './List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recommended: [],
      recent: [],
      curVid: ''
    }
  }

  handler(vid, vids){
    let recent = this.state.recent.slice()
    recent.unshift(vid)
    this.setState({recent: recent, recommended: vids, curVid: vid.id})
  }

  // handleClick(){
  //
  // }

  render() {
    return (
      <div>
        <h1> miniTube </h1>
        <Player video_id={this.state.curVid} handler={this.handler.bind(this)}/>
        {this.state.recent.length != 0 ? <List objs={this.state.recommended} type="Recommended videos"/> : null}
        {this.state.recommended.length != 0 ? <List objs={this.state.recent} type="Recently watched videos"/> : null}
      </div>
    );
  }
}

export default App;
