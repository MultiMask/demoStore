import * as React from "react";
import styled from "react-emotion";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
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
  width: 100%;
  flex: 1 0 auto;
  padding: 40px 0;
  box-sizing: border-box;
  min-height: 700px;
`;

export default Layout;
