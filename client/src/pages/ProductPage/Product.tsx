import * as React from "react";
import styled, { css } from "react-emotion";
import OrderModalView from "./OrderModalView";
import { IOrder } from "./ProductsPage";

export interface IProduct {
  order: IOrder;
  onChangeAmount: (value: number) => void;
  amount: number;
  onSubmitForm: (value: IOrder) => void;
  formStep: number;
  hashTx: string;
}

const handleOnClick = (
  onChange: (value: number) => void,
  value: number
) => () => {
  onChange(value);
};

const Product: React.SFC<IProduct> = ({
  order,
  onChangeAmount,
  amount,
  onSubmitForm,
  formStep,
  hashTx
}) => (
  <Container>
    <Image src="./product-detail-img.png" />
    <Info>
      <Name>Sushi T-Shirt</Name>
      <Price>0.05 ETH</Price>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Description>
      <OrderContainer>
        <Counter>
          <li className={styles.marginRight}>
            <CounterButton onClick={handleOnClick(onChangeAmount, -1)}>
              -
            </CounterButton>
          </li>
          <li className={styles.counter}>{amount}</li>
          <li>
            <CounterButton onClick={handleOnClick(onChangeAmount, 1)}>
              +
            </CounterButton>
          </li>
        </Counter>
        <OrderModalView
          initialValues={order}
          onSubmit={onSubmitForm}
          step={formStep}
          hashTx={hashTx}
        />
      </OrderContainer>
    </Info>
  </Container>
);

const styles = {
  counter: css`
    background-color: #eff2f4;
    border-radius: 5px;
    font-size: 26px;
    line-height: 50px;
    margin-right: 5px;
    min-height: 50px;
    padding: 0 20px;
    min-width: 30px;
    text-align: center;
  `,
  marginRight: css`
    margin-right: 5px;
  `
};

const Container = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Image = styled("img")`
  max-width: 570px;
  width: 100%;
  margin-right: 30px;
  background: #f5f5f5;
  box-shadow: 0px 10px 30px 0px rgba(50, 50, 98, 0.15);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1230px) {
    max-width: 40%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const Info = styled("div")`
  flex: 1;

  @media (max-width: 1230px) {
    max-width: 60%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const Name = styled("div")`
  margin: 0;
  margin-bottom: 5px;
  font-size: 48px;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 36px;
  }
`;

const Price = styled("span")`
  display: inline-block;
  font-size: 48px;
  background: url("./eth-ico-big.png");
  background-repeat: no-repeat;
  background-position: left center;
  padding: 0 0 0 45px;

  @media (max-width: 700px) {
    background: url("./eth-ico-small.png");
    background-repeat: no-repeat;
    background-position: left center;
    display: inline-block;
    font-size: 24px;
    padding: 0 0 0 25px;
  }
`;

const Description = styled("p")`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 980px) {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
const OrderContainer = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const Counter = styled("ul")`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  padding: 0;
  list-style-type: none;
  margin-right: 10px;
`;

const CounterButton = styled("button")`
  min-height: 50px;
  box-sizing: border-box;
  border: 2px solid #eff2f4;
  background: transparent;
  width: 37px;
  border-radius: 5px;
  color: #909090;
  font-size: 30px;
  cursor: pointer;
  transition: all ease 0.3s;
  line-height: 1.15;
  margin: 0;
  text-transform: none;
  font-family: inherit;
  &:hover,
  :active {
    outline: 0;
    outline-offset: 0;
    border-color: #3b51b0;
    color: #fff;
    background: #3b51b0;
  }
`;

export default Product;
