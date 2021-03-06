import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../index.css'

const CardInfo = (props) => {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div className='t-card-info' style={style}>
            <p className='t-card-title'>{props.title}</p>
            <p className='t-card-subtitle'>{props.subTitle}</p>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>View</a>
            <br></br>
            <a href={props.code} target='_blank' rel='noopener noreferrer'>Code</a>
        </animated.div>
    )
}

export default CardInfo