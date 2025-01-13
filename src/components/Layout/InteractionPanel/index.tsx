"use client";

import { useRef } from "react";
import AnimationModalContent from "../AnimationModalContent";
import Modal from "../Modal";
import { InteractionPanelRoot, OpenModal } from "./styles";

interface Props {
  animation: React.ReactNode;
  label: string;
  info?: React.ReactNode;
}

const InteractionPanel = ({ animation, label, info }: Props) => {
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
      {info && <OpenModal onClick={openDialog}>i</OpenModal>}
      {animation}
      <p>{label}</p>
      <Modal ref={dialogRef} closeDialog={closeDialog}>
        <AnimationModalContent label={label} info={info}>
          {animation}
        </AnimationModalContent>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
