import * as React from "react";
import styled from "react-emotion";
import { Link, RouteComponentProps } from "react-router-dom";
import { PAYMENT_DATA } from "../../config/payment";
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
  id: string;
}

export interface IProductsPageState {
  order: IOrder;
  amount: number;
  formStep: number;
  hashTx: string;
}

class ProductsPage extends React.Component<
  RouteComponentProps<{}>,
  IProductsPageState
> {
  public state = {
    amount: 1,
    formStep: 0,
    hashTx: "",
    order: {
      city: "",
      country: "",
      email: "",
      firstName: "",
      id: '_' + Math.random().toString(36).substr(2, 9),
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
    try {
      this.setState({ formStep: 1 });
      const payParams = await window.crypto3.getIdentity(PAYMENT_DATA);

      const result = await window.crypto3.pay(payParams);
      if (result.error) {
        throw result.error;
      }
      this.setState({ hashTx: result.txHash, formStep: 2 });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }

    // TODO: save data to back end
  };

  public render() {
    const { order, amount, formStep, hashTx } = this.state;
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
          hashTx={hashTx}
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
