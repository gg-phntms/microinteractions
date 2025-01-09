import { ModalRoot } from "./styles";

interface Props {
  children: React.ReactNode;
  ref: React.Ref<HTMLDialogElement>;
  closeDialog: (e: React.MouseEvent) => void;
}

const Modal = ({ children, ref, closeDialog }: Props) => {
  return (
    <ModalRoot ref={ref}>
      {children}
      <button onClick={(e) => closeDialog(e)}>Close</button>
    </ModalRoot>
  );
};

export default Modal;
