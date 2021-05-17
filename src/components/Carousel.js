import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'

import MERN from '../assets/images/MERN.jpg'

const Carousel = (props) => {
    const [ items, setItems ] = useState([
        {
            id: 0,
            title: 'MERN Stack',
            subTitle: 'MongoDB, Express, React, Node based Web App',
            imgSrc: MERN,
            link: '',
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