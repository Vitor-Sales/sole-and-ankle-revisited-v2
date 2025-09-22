import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import { set } from 'date-fns/fp';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLinkMobile href="#"><Icon id='shopping-bag' strokeWidth={2}/></NavLinkMobile>
          <NavLinkMobile href="#"><Icon id='search' strokeWidth={2}/></NavLinkMobile>
          <NavBTNMobile onClick={ () => setShowMobileMenu(true) }><Icon id='menu' strokeWidth={2}/></NavBTNMobile>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(24px, 4vw,48px);
  margin: 0px 48px;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    margin: 0;
  }
`;

const Side = styled.div`
  flex: 1;
  
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {

    &:nth-of-type(2) {
      display: none;
    }

  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  
  &:first-of-type {
    color: ${COLORS.secondary};
  }
  
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
  `;

const NavLinkMobile = styled.a`
  display: none;
  
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    color: black;

  }

`;

const NavBTNMobile = styled.a`
  display: none;
  
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    color: black;

  }

`;

export default Header;
