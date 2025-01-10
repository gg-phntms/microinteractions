"use client";

import { useRef } from "react";
import AnimationModalContent from "../AnimationModalContent";
import Modal from "../Modal";
import { InteractionPanelRoot, OpenModal } from "./styles";

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
        <AnimationModalContent label={label}>{children}</AnimationModalContent>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
