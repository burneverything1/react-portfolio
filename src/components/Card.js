import React from 'react'
import '../index.css'

import CardInfo from '../components/CardInfo'

const Card = ({ item, click }) => {
    return (
        <div className='d-inline-block t-card' onClick={(e) => click(item)}>
            <img className='t-card-image' src={item.imgSrc} alt={item.imgSrc} />
            {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} code={item.code}/> }
        </div>
    )
}

export default Card