import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
text-align: center;
display: flex;
flex-direction: column;
font-family: Inter;
font-size: 12px;
font-weight: 400;
color: #888888;
`
const Footer = () => {
  return (
    <FooterContainer>
      <span>개인정보 처리방침 | 이용 약관</span>
      <span>All rights reserved @ Codestates</span>
    </FooterContainer>
  )
}

export default Footer