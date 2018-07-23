import React, {Component} from 'react'
import './Search.css'

const Search = ({handleSubmit, handleChange}) => {
 return <div>
    <form onSubmit={handleSubmit}>
     <input type="text" onChange={handleChange} className='input'/>
     <button type="submit" className='button'>GO</button>
    </form>
  </div>
}


export default Search;
