import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
height: 3.625rem;
`
const Text = styled.span`
display: flex;
font-family: Inter;
font-size: 0.875rem;
font-weight: 400;
color: #888888;
height: 1.5rem;
`
const Footer = () => {
  return (
    <FooterContainer>
      <Text>개인정보 처리방침 | 이용 약관</Text>
      <Text>All rights reserved @ Codestates</Text>
    </FooterContainer>
  )
}

export default Footer