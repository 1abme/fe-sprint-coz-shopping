import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 30px;
  width: 55px;
  margin-right: 10px;
`;
const LogoText = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;

const Hamburger = styled.button`
  cursor: pointer;
  position: relative;
  border: 0;
  background-color: transparent;
`;

const DropDownContainer = styled.ul`
  background-color: #fff;
  padding: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  z-index: 1;
  font-size: 16px;
  cursor: auto;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  border-radius: 12px;

  a{
    text-decoration: none;
    //border-top: 0.5px solid rgba(0, 0, 0, 0.1) 안됨ㅠ
  }
`;

const DropDownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #333;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
`;

function Header() {
  const [view, setView] = useState(false);
  const dropDownRef = useRef()

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setView(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setView(!view);
  };

  return (
    <HeaderContainer ref={dropDownRef}>
      <Logo>
        <Link to="/">
          <LogoImage src="../logo.svg" alt="logo" />
        </Link>
        <LogoText>COZ Shopping</LogoText>
      </Logo>
      <Hamburger onClick={handleClick}>
        <img src="../hamburger.svg" alt="menu" />
        {view && (
          <DropDownContainer>
            <DropDownItem>
                <span>OOO님, 안녕하세요!</span>
              </DropDownItem>
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