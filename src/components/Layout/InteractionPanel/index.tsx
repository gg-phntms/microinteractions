"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
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
  const [isClosed, setIsClosed] = useState(false);

  const paramValue = Array.from(searchParams.values())[0]?.toLowerCase();
  const labelReduced = label.toLowerCase().replace(/[^a-z0-9]/g, "");

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsClosed(false);
  };

  const closeDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    dialogRef.current?.close();
    setIsClosed(true);
  };

  useEffect(() => {
    const isInParams = paramValue === labelReduced;

    if (dialogRef.current && isInParams) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <Suspense>
      <InteractionPanelRoot>
        {info && <OpenModal onClick={openDialog}>i</OpenModal>}
        {animation}
        <h4>{label}</h4>
        <Modal ref={dialogRef} closeDialog={closeDialog}>
          <AnimationModalContent
            label={label}
            param={labelReduced}
            info={info}
            close={isClosed}
          >
            {animation}
          </AnimationModalContent>
        </Modal>
      </InteractionPanelRoot>
    </Suspense>
  );
};

export default InteractionPanel;
