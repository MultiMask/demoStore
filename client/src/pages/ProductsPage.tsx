import * as React from "react";
import styled from "react-emotion";

const Container = styled("div")`
  text-align: center;
`;

class ProductsPage extends React.Component {
  public render() {
    return (
      <Container>
        <h1>Store is coming</h1>
      </Container>
    );
  }
}

export default ProductsPage;
