import React from 'react'
import Blog from '../components/Blog'
import Hero from '../components/Hero'

const BlogPage = (props) => {
    return(
        <div>
            <Hero title={props.title}/>

            <Blog/>
        </div>
    )
}

export default BlogPage