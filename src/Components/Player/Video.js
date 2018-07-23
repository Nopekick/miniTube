import React, {Component} from 'react'

const styles = {
  'border' : '1px solid black',
  'backgroundColor' : 'lightGray',
  'marginTop' : '20px'
}

const Video = ({videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <iframe width="560" height="315" src={url} style={styles}></iframe>
  )
}

export default Video;
