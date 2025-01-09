"use client";

import { useRef } from "react";
import Modal from "../Modal";
import { InteractionPanelRoot, OpenModal } from "./styles";

interface Props {
  children: React.ReactNode;
}

const InteractionPanel = ({ children }: Props) => {
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
      <OpenModal onClick={openDialog}>ℹ️</OpenModal>
      {children}
      <Modal ref={dialogRef} closeDialog={closeDialog}>
        <p>Dialog content</p>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
