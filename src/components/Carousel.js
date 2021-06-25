import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import Card from '../components/Card'

import MERN from '../assets/images/MERN.jpg'
import API from '../assets/images/API.svg'

const Carousel = (props) => {
    const [ items, setItems ] = useState([
        {
            id: 0,
            title: 'MERN Stack',
            subTitle: 'MongoDB, Express, React, Node based Web App',
            imgSrc: MERN,
            link: 'https://ancient-bayou-65086.herokuapp.com/',
            code: 'https://github.com/burneverything1/FSO-Note-nodebackend',
            selected: false
        },
        {
            id: 1,
            title: 'JS + API',
            subTitle: 'async Js, API requests Web App',
            imgSrc: API,
            link: 'https://50emawebsite.burneverything1.repl.co/',
            code: 'https://github.com/burneverything1/50EMAWebsite',
            selected: false
        }
    ])

    const handleCardClick = (id, card) => {
        let c_items = [...items]

        // toggle selected for clicked item
        c_items[id].selected = c_items[id].selected ? false : true

        // make sure rest aren't selected
        c_items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        setItems(c_items)
    }

    const makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={e => handleCardClick(item.id, e)} key={item.id} />
        })
    }

    return (
        <Container fluid={true}>
            <Row className='justify-content-around'>
                {makeItems(items)}
            </Row>
        </Container>
    )
}

export default Carousel