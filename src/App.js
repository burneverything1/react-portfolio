import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage'

const App = (props) => {
  const [ title, setTitle ] = useState('Tim Yehan Lee')
  const [ headerLinks, setHeaderLinks ] = useState([
    {htitle: 'Home', path: '/'},
    {htitle: 'About', path:'/about'}, 
    {htitle: 'Blog', path:'/blog'}
  ])
  const [ home, setHome ] = useState({
    title: 'Always Learning',
    subTitle: 'Solving problems with Technology'
  })
  const [ about, setAbout ] = useState('About Me')
  const [ blog, setBlog ] = useState({
    title: 'Development Lessons'
  })

  return (
    <Router>
      <Container fluid={true}>

        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>{title}</Navbar.Brand>

          <Navbar.Toggle className='border-0' ario-controls='navbar-toggle'/>
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/blog'>Blog</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' exact render={() => <HomePage
          title={home.title}
          subTitle={home.subTitle}
        />}/>

        <Route path='/about' render={() => <AboutPage
          title={about}
        />}/>

        <Route path='/blog' render={() => <BlogPage
          title={blog.title}
      />}/>

        <Footer />


      </Container>
    </Router>
  );
}

export default App;
