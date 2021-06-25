import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

const AboutPage = (props) => {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am an experienced startup Product Owner who successfully managed the development of API connections and products at Hopper. After a covid-related layoff, I decided to go back to school for a computer science degree. After taking core classes such as Data Structures, Web Development, Databases, and Assembly,  I have become comfortable as a developer. I am currently learning full-stack professional development with React and MERN through https://fullstackopen.com/.</p>
                <p>I am currently an Associate Software Engineer Intern at Scholastic working with Angular and Java Spring Boot. I am interested in gardening/farmtech, cycling, health, and finance. Feel free to reach out at (978) 806-6388 or timmy.y.lee95@gmail.com.</p>
                <p>Experience with React, NodeJs, ExpressJs, SQL, Python3, MongoDB, HTML+CSS</p>
                <a href="https://www.linkedin.com/in/timothy-yehan-lee-cspo-033755129/">LinkedIn</a>
                <br></br>
                <a href="https://github.com/burneverything1">Github</a>
            </Content>
        </div>
    )
}

export default AboutPage