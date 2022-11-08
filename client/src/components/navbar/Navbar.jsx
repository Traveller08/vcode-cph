import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom';

const Navbar = (props) => {
  async function handleLogout(event){
    event.preventDefault();

    window.localStorage.removeItem('user');
    console.log( window.localStorage.getItem('user'))
    props.setLogged(false);
  
  } 
  return (
    <>
    <Nav  className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/home" >
        vCode
      </NavLink>
      <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
            </Button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/problems">
                    Problems
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contests">
                    Contests
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/visualiser">
                    Visualiser
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
              </ul>
             
              <Link
                className="btn btn-outline-info my-2 my-sm-0 ml-3"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </Nav>
    </>
  )
}

export default Navbar