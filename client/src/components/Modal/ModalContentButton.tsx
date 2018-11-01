import * as React from "react";
import styled from 'react-emotion'

export interface IModalContentButton {
  onClose: () => void;
}

export type ModalContentButtonRef = HTMLButtonElement;

const ModalContentButton = React.forwardRef<
  ModalContentButtonRef,
  IModalContentButton
>(({ onClose }, ref) => (
  <Button
    className="c-modal__close"
    aria-labelledby="close-modal"
    onClick={onClose}
    innerRef={ref}
  />
));

const Button = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  overflow: visible;
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;
  color: #95979c;
  border: 0;
  outline: 0;
  background: transparent;
  &::before {
    font-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif !important;
    font-size: 25px;
    line-height: 35px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 35px;
    content: "\00d7";
    text-align: center;
  }
  &:hover {
    color: #2b2e38;
  }
`
export default ModalContentButton;
