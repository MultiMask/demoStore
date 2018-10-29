import { faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const Footer = () => (
  <Container>
    <Inner>
      <Copyrigth>
        @ 2018 Copyrights by MultiMask. All Rights Reserved.
      </Copyrigth>
      <SocialInfo>
        <Legend>Stay connect with us</Legend>
        <Socials>
          <li style={{ marginRight: 18 }}>
            <StyledLink to="#">
              <FontAwesomeIcon color="white" icon={faVial} />
            </StyledLink>
          </li>
        </Socials>
      </SocialInfo>
    </Inner>
  </Container>
);

const Container = styled("footer")`
  background: #272a30;
  width: 100%;
  padding: 28.5px 0;
`;

const Inner = styled("div")`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  max-width: 1230px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const Copyrigth = styled("span")`
  font-size: 14px;
  font-weight: 500;
  color: #a8b0b5;
  display: inline-block;
  @media (max-width: 500px) {
    display: block;
    text-align: center;
  }
`;

const SocialInfo = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    margin-bottom: 15px;
  }
`;

const Legend = styled(Copyrigth)`
  margin-right: 15px;

  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 15px;
  }
`;

const Socials = styled("ul")`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: rgba(53, 57, 63, 0.5);
`;
export default Footer;
