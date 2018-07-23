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
    let temp = new Set(recent)
    temp = [...temp]
    this.setState({recent: temp, recommended: vids, curVid: vid.id})
  }

  handleClick(obj){
    let recent = this.state.recent.slice()
    recent.unshift(obj)
    let temp = new Set(recent)
    temp = [...temp]
    this.setState({curVid: obj.id, recent: temp})
  }

  render() {
    return (
      <div>
        <h1> miniTube </h1>
        <Player video_id={this.state.curVid} handler={this.handler.bind(this)}/>
        {this.state.recent.length !== 0 ? <List objs={this.state.recommended} handleClick={this.handleClick.bind(this)} type="Recommended videos"/> : null}
        {this.state.recommended.length !== 0 ? <List objs={this.state.recent} handleClick={this.handleClick.bind(this)} type="Recently watched videos"/> : null}
      </div>
    );
  }
}

export default App;
