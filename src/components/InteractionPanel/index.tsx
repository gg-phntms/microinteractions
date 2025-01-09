"use client";

import { useRef } from "react";
import Modal from "../Modal";
import { InteractionPanelRoot } from "./styles";

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
    <InteractionPanelRoot onClick={openDialog}>
      {children}
      <Modal open={isModalOpen} closeDialog={closeDialog}>
        <p>Dialog content</p>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
