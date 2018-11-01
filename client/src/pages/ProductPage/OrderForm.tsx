import * as React from 'react';
import styled from 'react-emotion';
import {Link} from 'react-router-dom';
import Modal from 'src/components/Modal/Modal';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const OrderForm = () => (
  <Modal buttonName="Order">
    <div style={{textAlign: 'center'}}>
      <StyledLink to="#">
        <Image src="./modal-logo.png" />
        MultiMask
      </StyledLink>
    </div>
    <StepDescription>Order #23409232 submitted. Wait for confirmation.</StepDescription>
    <ProgressBar/>
    <Footer>
      <Button>Ok</Button>
    </Footer>
  </Modal>
);

const Footer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

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

const StepDescription = styled('p')`
  font-size: 24px;
  text-align: center;
  padding: 35px 0;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

export default OrderForm;