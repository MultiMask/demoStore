import * as React from "react";
import styled from "react-emotion";
import { Route, Switch } from "react-router-dom";
import { ProductsPage } from "./pages";

const Routes = () => {
  return (
    <Container>
      <Header>
        <Inner>
          <Title>MultiMask</Title>
          <CryptoList>Currency ETH online</CryptoList>
        </Inner>
      </Header>
      <Content>
        <Switch>
          <Route path="/" component={ProductsPage} />
        </Switch>
      </Content>
      <Footer>
        <Inner>
          <Copyrigths>
            @ 2018 Copyrights by MultiMask. All Rights Reserved.
          </Copyrigths>
          <CryptoList>Stay connect with us</CryptoList>
        </Inner>
      </Footer>
    </Container>
  );
};

// TODO: move to Layout
const Container = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Header = styled("header")`
  height: 80px;
  background-color: #3b51b0;
  box-sizing: border-box;
  padding: 20px 40px;
`;

const Inner = styled("div")`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled("h2")`
  color: white;
  float: left;
  line-height: 40px;
  margin: 0;
`;

const CryptoList = styled("div")`
  color: white;
  float: right;
  line-height: 40px;
  margin: 0;
`;

const Content = styled("main")`
  flex: 1;
  background: white;
`;

const Footer = styled("footer")`
  height: 80px;
  box-sizing: border-box;
  padding: 20px 40px;
  background: #272a30;
`;

const Copyrigths = Title.withComponent("h4");

export default Routes;
