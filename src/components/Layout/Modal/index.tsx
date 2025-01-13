import { Close, ModalRoot } from "./styles";

interface Props {
  children: React.ReactNode;
  ref: React.Ref<HTMLDialogElement>;
  closeDialog: (e: React.MouseEvent) => void;
}

const Modal = ({ children, ref, closeDialog }: Props) => {
  return (
    <ModalRoot ref={ref}>
      {children}
      <Close onClick={(e) => closeDialog(e)}>x</Close>
    </ModalRoot>
  );
};

export default Modal;
