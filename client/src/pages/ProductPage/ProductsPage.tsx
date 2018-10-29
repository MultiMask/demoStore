import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import Product from './Product'

class ProductsPage extends React.Component {
  public render() {
    return (
      <Container>
        <Header>
          <HeaderTitle>Product detail page</HeaderTitle>
          <StyledLink to="#">FAQ</StyledLink>
        </Header>
        <Product/>
      </Container>
    );
  }
}


const Container = styled("div")`
  max-width: 1230px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 30px;
  
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`;

const Header = styled("div")`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const HeaderTitle = styled("h5")`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: #3b51b0;
  font-size: 24px;
  background: url("./faq-ico.png");
  background-repeat: no-repeat;
  background-position: left center;
  padding: 3px 0 3px 50px;
`;

export default ProductsPage;
