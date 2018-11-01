import * as React from 'react';
import styled from 'react-emotion';

const ProgressBar = () => {
  return (
    <Container>
      <Bar>
        <Line/>
        <Indicator/>
      </Bar>
      <DescriptionsLine>
        <Item>Order received</Item>
        <Item>Wait confirmation</Item>
        <Item>Complete</Item>
      </DescriptionsLine>
    </Container>
  );
}

const Container = styled('div')`
  margin-bottom: 45px;
  margin-top: 25px;
`

const Bar = styled('div')`
  max-width: 630px;
  position: relative;
  height: 8px;
  background: #171c2a;
  margin: 0 auto 35px auto;
  &::before {
    content: "";
    width: 30px;
    height: 30px;
    left: -15px;
    background: linear-gradient(to right, #ff7e1f, #ff5e48);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
  }
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #171c2a;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
    right: -15px;
  }
`

const Line = styled('div')`
  background: linear-gradient(to right, #ff7e1f, #ff5e48);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
`

const Indicator = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff7e1f, #ff5e48);
  z-index: 2;
  &::before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
`

const DescriptionsLine =  styled('ul')`
  max-width: 730px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
`

const Item = styled('li')`
  font-size: 18px;
  font-weight: 500;
  &:nth-child(3) {
    max-width: 140px;
    width: 100%;
    text-align: left;
  }
  &:nth-child(2) {
    flex: 1;
    text-align: center;
  }
  &:nth-child(3) {
    text-align: right;
    max-width: 140px;
    width: 100%;
  }
    
`
export default ProgressBar;