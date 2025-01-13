"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import AnimationModalContent from "../AnimationModalContent";
import Modal from "../Modal";
import { InteractionPanelRoot, OpenModal } from "./styles";

interface Props {
  animation: React.ReactNode;
  label: string;
  info?: React.ReactNode;
}

const InteractionPanel = ({ animation, label, info }: Props) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    dialogRef.current?.close();
  };

  useEffect(() => {
    const paramValue = Array.from(searchParams.values())[0].toLowerCase();
    const labelValue = label.toLowerCase().replace(/[^a-z0-9]/g, "");

    const isInParams = paramValue === labelValue;

    if (dialogRef.current && isInParams) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <InteractionPanelRoot>
      {info && <OpenModal onClick={openDialog}>i</OpenModal>}
      {animation}
      <h4>{label}</h4>
      <Modal ref={dialogRef} closeDialog={closeDialog}>
        <AnimationModalContent label={label} info={info}>
          {animation}
        </AnimationModalContent>
      </Modal>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
