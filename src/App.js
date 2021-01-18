import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Payments from './components/Payments';

const activeClassName = 'nav_item_active';

const Wrapper = styled.div`
max-width: 1350px;
width: 80%;
margin: 0 auto;
`;

const Header = styled.header`
background-color: #2499fd;
margin-bottom: 15px;

${Wrapper} {
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

const StyledLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
  border-color: #fff;
}
`;

const Nav = styled.nav`
ul {
  margin: auto 0;
  display: flex;
  list-style-type: none;
  text-transform: capitalize;

  li {
    margin: 0 5px;
  }
} 

a {
  padding: 6px 15px;
  border: 2.5px solid transparent;
  border-radius: 9999px; 
  color: #fff;
  text-decoration: none;

  :hover {
    border-color: #fff;
    color: #fff;
  }
}
`;


const SiteName = styled.h1`
margin: auto 0;

a {
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
}

a:active {
  color: #fff;
}
`;

const Footer = styled.footer`
  margin-top: auto;
  background-color: #2499fd;

  span {
    padding: 10px;
    display: block;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }
`;

function App() {
return (
  <>
    <BrowserRouter>
      <Header>
        <Wrapper>
          <SiteName><Link to="/">online store</Link></SiteName>
          <Nav>
            <ul>
              <li>
                <StyledLink exact to="/">products</StyledLink>
              </li>
              <li>
                <StyledLink exact to="/payments">payments</StyledLink>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </Header>
      <main>
        <Wrapper>
          <Route exact path='/' component={Home}/>
          <Route exact path='/payments' component={Payments}/>
        </Wrapper>
      </main>
      <Footer>
        <Wrapper>
          <span>Copyrights &copy; All rights reserved.</span>
        </Wrapper>
      </Footer>
    </BrowserRouter>
  </>
);
}

export default App;
