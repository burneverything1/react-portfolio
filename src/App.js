import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

const App = (props) => {
  const [ title, setTitle ] = useState('Tim Yehan Lee')
  const [ headerLinks, setHeaderLinks ] = useState([
    {htitle: 'Home', path: '/'},
    {htitle: 'About', path:'/about'}, 
  ])
  const [ home, setHome ] = useState({
    title: 'Always Learning',
    subTitle: 'Solving problems with Technology'
  })
  const [ about, setAbout ] = useState('About Me')

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

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' exact render={() => <HomePage
          title={home.title}
          subTitle={home.subTitle}
          text={home.text}
        />}/>

        <Route path='/about' render={() => <AboutPage
          title={about}
        />}/>

        <Footer />


      </Container>
    </Router>
  );
}

export default App;
