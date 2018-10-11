import * as React from "react";
import styled from "react-emotion";
import { Route, Switch } from "react-router-dom";
import { ProductsPage } from "./pages";

const Routes = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Switch>
          <Route path="/" component={ProductsPage} />
        </Switch>
      </Content>
      <Footer />
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
  height: 100px;
  background: white;
`;

const Content = styled("main")`
  flex: 1;
  background: blue;
`;

const Footer = styled("footer")`
  height: 100px;
  background: red;
`;

export default Routes;
