import React, {Component} from 'react'
import PropTypes from 'prop-types';

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

Video.propTypes = {
  videoId: PropTypes.string
}

export default Video;
