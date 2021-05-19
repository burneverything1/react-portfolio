import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

const AboutPage = (props) => {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am an experienced startup Product Owner who successfully managed the development of API connections and products at Hopper. After a covid-related layoff, I decided to go back to school for a computer science degree. After taking core classes such as Data Structures, Web Development, and Assembly,  I have become comfortable as a developer. I am currently learning full-stack professional development with React and MERN through https://fullstackopen.com/ as well as taking Databases through school.</p>
                <p>I am now looking for a Intern/Jr position to continue learning in a professional setting and work full-time while continuing and completing my degree part-time. I understand technology, am quick to learn and understand, and would be a great asset to any team. Please let me know if there is anything I am missing that might prevent me from being a productive, contributing member of your team and I will work hard to fill those gaps before coming onboard. Looking forward to hearing back from you, feel free to reach out at (978) 806-6388 or timmy.y.lee95@gmail.com.</p>
                <p>Experience with React, NodeJs, ExpressJs, SQL, Python3, HTML+CSS</p>
                <a href="https://www.linkedin.com/in/timothy-yehan-lee-cspo-033755129/">LinkedIn</a>
                <br></br>
                <a href="https://github.com/burneverything1">Github</a>
            </Content>
        </div>
    )
}

export default AboutPage