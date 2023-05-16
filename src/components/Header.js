import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 30px;
  width: 55px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-weight: bold;
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
`;

const DropDownContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  z-index: 1;
`;

const DropDownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

function Header() {
  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(!view);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <LogoImage src="../logo.svg" alt="logo" />
        </Link>
        <LogoText>COZ Shopping</LogoText>
      </Logo>
      <Hamburger onClick={handleClick}>
        <img src="../hamberger.svg" alt="menu" />
        {view && (
          <DropDownContainer>
            <span>김혜주님, 안녕하세요!</span>
            <Link to="/products/list">
              <DropDownItem>
                <img src="../product_icon.svg" alt="producticon" />
                상품 리스트 페이지
              </DropDownItem>
            </Link>
            <Link to="/bookmark">
              <DropDownItem>
                <img src="../bookmark_icon.svg" alt="bookmark_icon" />
                북마크 페이지
              </DropDownItem>
            </Link>
          </DropDownContainer>
        )}
      </Hamburger>
    </HeaderContainer>
  );
}

export default Header;