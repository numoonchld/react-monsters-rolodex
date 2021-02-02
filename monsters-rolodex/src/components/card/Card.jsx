import React from 'react'
import './Card.css'

function Card(props) {
    return <div className="card-container">
        <img src={`https://robohash.org/${props.user.id}?set=set1&size=180x180`} alt="monster"/>
        <h3> {props.user.name} </h3>
        <p> {props.user.email} </p>
    </div>
}

export default Card
