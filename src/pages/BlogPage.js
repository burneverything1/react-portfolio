import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

const BlogPage = (props) => {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>

            <Content>
                
            </Content>
        </div>
    )
}

export default BlogPage