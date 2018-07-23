import React, {Component} from 'react'
import './Player.css'
import Search from './Search'
import  Video from './Video'
import YTSearch from 'youtube-api-search'
import PropTypes from 'prop-types'

class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      active: false
    }
  }

  handleChange(e){
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.handleAPI(this.state.inputValue)
  }

  handleAPI(inputValue){
    const API_KEY = 'AIzaSyBUqrsJUembV-NdDtdL_iEwtsNTr88Xa-I';
    YTSearch({key: API_KEY, term: inputValue}, (data)=> {
      this.setState({active: true})
      let recommended = []
      for(let i = 0; i < data.length; i++){
        let temp = {
          thumbnail: data[i].snippet.thumbnails.medium.url,
          name: data[i].snippet.title,
          id: data[i].id.videoId
        }
        recommended.push(temp)
      }
      let recent = recommended.shift()
      this.props.handler(recent, recommended)
    })

  }

  render(){
    return (
      <div className="container">
        <Search handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
        {this.state.active ? <Video videoId={this.props.video_id}/> : null}
      </div>
    )
  }
}

Player.propTypes = {
  video_id: PropTypes.string,
  handler: PropTypes.func.isRequired
}

export default Player
