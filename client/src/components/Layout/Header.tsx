import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const Header = () => (
  <Container>
    <Inner>
      <div>
        <StyledLink to="#">
          <Image src="./logo.png" />
          MultiMask
        </StyledLink>
      </div>
      <StatusBar>
        `
        <Currency>
          Currency: <b>ETH</b>
        </Currency>
        <Status>Online</Status>
      </StatusBar>
    </Inner>
  </Container>
);

const Container = styled("header")`
  background: #3b51b0;
  width: 100%;
  padding: 30px 0;

  @media (max-width: 500px) {
    padding: 15px 0;
  }
`;

const Inner = styled("div")`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1230px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`;

const Image = styled("img")`
  display: block;
  margin-right: 17px;
  max-width: 100%;
  border-style: none;
`;

const StatusBar = styled("div")`
  display: inline-flex;
  align-items: center;

  @media (max-width: 500px) {
    margin-top: 15px;
  }
`;

const Currency = styled("div")`
  margin-right: 15px;
  color: #fff;
  font-size: 18px;
`;

const Status = styled("div")`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  position: relative;
  padding-left: 20px;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 5px;
    background: #0cf0c8;
  }
`;

export default Header;
