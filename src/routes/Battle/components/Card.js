import React from 'react'

export const Card = (props) => (

  <div className="card mx-2">
    <img className="card-img-top" src={props.imgUrl} alt="Card image cap"/>
    <div className="card-block">
      <h4 className="card-title">{ props.name }</h4>
      <p className="card-text">{ props.power }</p>
    </div>
  </div>
)

export default Card
