import React from "react";
import styled from "styled-components";

const S = {
  Footer: styled.footer`
    width: 100%;
    margin: 32px auto;

    p {
      text-align: center;
      font-size: 0.8rem;
      color: #999;
    }

    i {
      font-style: normal;
      color: #1cbaba;
    }
  `
};

const Footer = () => (
  <S.Footer>
    <p>
      &copy; {new Date().getFullYear()} <i>eunha0ne</i> All rights reserved.{" "}
      <br />
      Built With React, Redux and FireBase.
    </p>
  </S.Footer>
);

export default Footer;
