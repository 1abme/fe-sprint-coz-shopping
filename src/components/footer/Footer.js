import React from "react";
import styled from "styled-components";
import {FooterText} from "../atoms/Typography"

const FooterContainer = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 58px; 
`;



const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>개인정보 처리방침 | 이용 약관</FooterText>
      <FooterText>All rights reserved @ Codestates</FooterText>
    </FooterContainer>
  );
};

export default Footer;