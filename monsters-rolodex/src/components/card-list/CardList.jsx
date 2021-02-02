import React from 'react'
import './CardList.css'
import Card from '../card/Card'

function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map(user => <Card key={user.id} name={user.name} /> )}
        </div>
    )
}

export default CardList
