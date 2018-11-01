import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'react-emotion'

export interface IModalContent {
  content: React.ReactNode;
  role?: string;
  children: React.ReactNode;
  onClickAway: (event: React.MouseEvent<HTMLElement>) => void;
}

export type IModalContentRef = HTMLDivElement;

const ModalContent = React.forwardRef<IModalContentRef, IModalContent>(
  (
    { content, onClickAway, children, role = "dialog" },
    ref
  ) => {
    return ReactDOM.createPortal(
      <Container
        role={role}
        aria-modal="true"
        onClick={onClickAway}
      >
        <Modal innerRef={ref}>
          {children}
          {content}
        </Modal>
      </Container>,
      document.body
    );
  }
);

const Container =  styled('aside')`
  display: block;
  position: fixed;
  z-index: 10000;
  padding: 10px 10px 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  text-align: center;
  background: rgba(43, 46, 56, 0.9);
  backface-visibility: hidden;
`

const Modal = styled('div')`
  max-width: 860px;
  border-radius: 5px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  padding: 35px;
  color: #2b2e38;
  background: #fff;
  display: inline-block;
  position: relative;
  outline: none;
  text-size-adjust: 100%;

  @media (max-width: 641px) {
    max-width: 700px;
  }
}
`
export default ModalContent;
