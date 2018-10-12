import * as React from "react";
import styled from "react-emotion";
import Header from "./Header";

class Layout extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    );
  }
}

// TODO: move to Layout
const Container = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
`;

const Content = styled("main")`
  flex: 1;
  background: white;
`;

export default Layout;
