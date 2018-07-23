import React, {Component} from 'react'
import './List.css'
import PropTypes from 'prop-types';

const List = ({objs, type, handleClick}) => {

  const clickables = objs.map((obj)=> {
    return <div key={obj.id} className="card" onClick={()=>{handleClick(obj)}}>
      <img className="img" src={obj.thumbnail}/>
      <h5 style={{"marginTop": "0"}}> {obj.name.substring(0,55)}... </h5>
    </div>
  })

 return (
    <div className="box">
      <h4> {type} </h4>
      <div className="list">
        {clickables}
      </div>
    </div>
 )

}

List.propTypes = {
  objs: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default List;
