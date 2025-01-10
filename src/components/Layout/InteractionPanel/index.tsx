"use client";

import { useRef } from "react";
import Modal from "../Modal";
import {
  Animation,
  Column,
  Controls,
  InteractionPanelRoot,
  OpenModal,
} from "./styles";

interface Props {
  children: React.ReactNode;
  label: string;
  modal?: boolean;
}

const InteractionPanel = ({ children, label, modal }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    dialogRef.current?.close();
  };

  return (
    <InteractionPanelRoot>
      {modal && <OpenModal onClick={openDialog}>ℹ️</OpenModal>}
      {children}
      <p>{label}</p>
      <Modal ref={dialogRef} closeDialog={closeDialog}>
        <Column>
          <h2>{label}</h2>
          <Animation>{children}</Animation>
          <Controls />
        </Column>
        <Column>
          <p>Lorem ipsum</p>
        </Column>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
