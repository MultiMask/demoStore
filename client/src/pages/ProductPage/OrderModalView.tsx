import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import Modal from "src/components/Modal/Modal";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import OrderForm from "./OrderForm/OrderForm";
import { IOrder } from "./ProductsPage";

export interface IOrderModalView {
  initialValues: IOrder;
  onSubmit: (values: IOrder) => void;
  step: number;
  hashTx: string;
}

export interface IMyFormValues {
  firstName: string;
}

class OrderModalView extends React.Component<IOrderModalView> {
  public render() {
    const { step, initialValues, onSubmit, hashTx } = this.props;
    const steps = [
      <OrderForm
        key="order-form"
        initialValues={initialValues}
        onSubmit={onSubmit}
      />,
      <div key="processing"> Processing </div>,
      <a key="hash" href={`https://etherscan.io/tx/${hashTx}`} target="_blank">
        {hashTx}
      </a>
    ];
    return (
      <Modal buttonName="Order">
        <div style={{ textAlign: "center" }}>
          <StyledLink to="#">
            <Image src="./modal-logo.png" />
            MultiMask
          </StyledLink>
        </div>
        <StepDescription>
          Order #23409232 submitted. Wait for confirmation.
        </StepDescription>
        <ProgressBar step={step} />
        {steps[step]}
      </Modal>
    );
  }
}

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #3b51b0;
  font-weight: 500;
  font-size: 24px;
`;

const Image = styled("img")`
  display: block;
  margin-right: 17px;
  max-width: 100%;
  border-style: none;
`;

const StepDescription = styled("p")`
  font-size: 24px;
  text-align: center;
  padding: 35px 0;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export default OrderModalView;
