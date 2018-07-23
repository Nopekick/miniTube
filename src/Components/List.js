import React, {Component} from 'react'
import './List.css'
import YTSearch from 'youtube-api-search'

const List = ({objs, type}) => {

  const clickables = objs.map((obj)=> {
    return <div key={obj.id} className="card">
      <img className="img" src={obj.thumbnail}/>
      <h5 style={{"marginTop": "0"}}> {obj.name.substring(0,55)}... </h5>
    </div>
  })

 return <div className="box">
    <h4> {type} </h4>
    <div className="list">
      {clickables}
    </div>
  </div>
}

export default List;
