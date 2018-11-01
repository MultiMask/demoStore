import styled from 'react-emotion';

const Button = styled("button")`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  background: linear-gradient(to right, #ff7e1f, #ff5c4a);
  border-radius: 5px;
  padding: 9.5px 32px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button