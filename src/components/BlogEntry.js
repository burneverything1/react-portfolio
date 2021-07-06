import React from 'react'
import BlogText from './BlogText'

const BlogEntry = ({ entry }) => {
    return (
        <div>
            <p>{entry.date}</p>
            <h2>{entry.title}</h2>
            <BlogText/>
        </div>
    )
}

export default BlogEntry