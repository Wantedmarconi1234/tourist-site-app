import React from 'react'

export default function Card(props) {
console.log()
  return (
    <div className='card'> 
        <img src={props.imageUrl} alt="" />
        <div className='sub-card'>
          <h5>{props.location} <span><a href={props.googleMapsUrl} target='blankadd'>View on Google Maps</a></span></h5>
          <h1>{props.title}</h1>
          <h6>{props.startDate}-{props.endDate}</h6>
          <p>{props.description}</p>
        </div>
    </div>
  )
}
