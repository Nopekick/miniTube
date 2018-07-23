import React, {Component} from 'react'
import './Search.css'
import PropTypes from 'prop-types';

const Search = ({handleSubmit, handleChange}) => {
 return <div>
    <form onSubmit={handleSubmit}>
     <input type="text" onChange={handleChange} className='input'/>
     <button type="submit" className='button'>GO</button>
    </form>
  </div>
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}


export default Search;
