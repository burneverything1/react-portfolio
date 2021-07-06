import React, { useState } from 'react'
import BlogEntry from './BlogEntry'
import { Container, Row, Col } from 'react-bootstrap'

const Blog = (props) => {
    const [ entries, setEntries ] = useState([
        {
            id: 0,
            date: "7/6/2021",
            title: "MERN Backend Template Structure",
        }
    ])

    const makeBlogs = (blogs) => {
        return entries.map(entry => {
            return <BlogEntry entry={entry}/>
        })
    }

    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col md={8}>
                    {makeBlogs(entries)}
                </Col>
            </Row>
        </Container>
    )
}

export default Blog