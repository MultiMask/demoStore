import {css} from 'emotion'
import * as React from "react";
import Button from '../Button'
import ModalContent from "./ModalContent";
import ModalContentButton from "./ModalContentButton";

export interface IModalProps {
  buttonName: string;
  role?: string;
  children: React.ReactNode;
}

export interface IModalState {
  isOpen: boolean;
}

class Modal extends React.Component<IModalProps, IModalState> {
  public state = { isOpen: false };
  private closeButtonNode = React.createRef<HTMLButtonElement>();
  private openButtonNode = React.createRef<HTMLButtonElement>();
  private modalNode = React.createRef<HTMLDivElement>();

  public onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.current!.focus();
    });
    this.toggleScrollLock();
  };

  public onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.current!.focus();
    this.toggleScrollLock();
  };

  public onClickAway = (event: React.MouseEvent<HTMLElement>) => {
    if (
      this.modalNode &&
      this.modalNode.current!.contains(event.target as Node)
    ) {
      return;
    }
    this.onClose();
  };

  public toggleScrollLock = (): boolean =>
    document.querySelector("html")!.classList.toggle(css`overflow: hidden !important;`);

  public render(): React.ReactNode {
    const { isOpen } = this.state;
    const { children, buttonName, role } = this.props;
    return (
      <React.Fragment>
          <Button onClick={this.onOpen} innerRef={this.openButtonNode}>
            {buttonName}
          </Button>
        {isOpen && (
          <ModalContent
            ref={this.modalNode}
            content={children}
            onClickAway={this.onClickAway}
            role={role}
          >
            <ModalContentButton
              onClose={this.onClose}
              ref={this.closeButtonNode}
            />
          </ModalContent>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
