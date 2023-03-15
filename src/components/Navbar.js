
import { HashLink as Link } from 'react-router-hash-link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function Navigation() {
    // https://stackoverflow.com/a/71356027
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setShow(false); 
          } else { // if scroll up show the navbar
            setShow(true);  
          }
    
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    return (
      <div>
        <Navbar bg="light" expand="lg" id="navbar" className={`justify-content-end ${!show && 'hidden'}`}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/#intro"}>
                  Introduction
                </Nav.Link>
                <Nav.Link as={Link} to={"/#skills"}>
                  Skills
                </Nav.Link>
                <Nav.Link as={Link} to={"/#experience"}>
                  Experience
                </Nav.Link>
                <Nav.Link as={Link} to={"/#portfolio"}>
                  Portfolio
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

export default Navigation;