"use client";

import { useRef } from "react";
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
      <dialog ref={dialogRef}>
        <p>This is the dialog content!</p>
        <button onClick={(e) => closeDialog(e)}>Close</button>
      </dialog>
    </InteractionPanelRoot>
  );
};

export default InteractionPanel;
