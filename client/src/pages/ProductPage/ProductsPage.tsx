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
  formStep: number;
}

class ProductsPage extends React.Component<
  RouteComponentProps<{}>,
  IProductsPageState
> {
  public state = {
    amount: 1,
    formStep: 0,
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

  public handleSubmitForm = async (values: IOrder) => {
    this.setState({ formStep: 1 });
    const accounts = await window.crypto3.getIdentity();

    // const hashTx = await window.crypto3.pay();

    // TODO: save data to back end

    // tslint:disable-next-line:no-console
    console.log("accounts:", accounts);
  };

  public render() {
    const { order, amount, formStep } = this.state;
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
          onSubmitForm={this.handleSubmitForm}
          formStep={formStep}
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
