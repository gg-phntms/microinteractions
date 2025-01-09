import { Close, Content, ModalRoot } from "./styles";

interface Props {
  children: React.ReactNode;
  ref: React.Ref<HTMLDialogElement>;
  closeDialog: (e: React.MouseEvent) => void;
}

const Modal = ({ children, ref, closeDialog }: Props) => {
  return (
    <ModalRoot ref={ref}>
      <Content>{children}</Content>
      <Close onClick={(e) => closeDialog(e)}>❌</Close>
    </ModalRoot>
  );
};

export default Modal;
