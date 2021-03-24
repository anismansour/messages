import React from 'react';
import './Style/Header.css';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <h1>hello</h1>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: 'red';
`;
