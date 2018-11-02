import * as React from "react";
import styled from "react-emotion";
import { Link, RouteComponentProps } from "react-router-dom";
import Product from "./Product";

export interface IOrder {
  firstName: string;
  lastName: string;
  streetAddress: string;
  zipCode: number;
  city: string;
  country: string;
  email: string;
  phone: string;
}
export interface IProductsPageState {
  order: IOrder;
  amount: number;
}

class ProductsPage extends React.Component<
  RouteComponentProps<{}>,
  IProductsPageState
> {
  public state = {
    amount: 1,
    order: {
      city: "",
      country: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      streetAddress: "",
      zipCode: 0
    }
  };

  public handleChangeAmount = (value: number) => {
    const { amount } = this.state;
    if (amount + value > 0) {
      this.setState({ amount: amount + value });
    }
  };

  public render() {
    const { order, amount } = this.state;
    return (
      <Container>
        <Header>
          <HeaderTitle>Product detail page</HeaderTitle>
          <StyledLink to="#">FAQ</StyledLink>
        </Header>
        <Product
          order={order}
          onChangeAmount={this.handleChangeAmount}
          amount={amount}
        />
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
