import { ModalRoot } from "./styles";

interface Props {
  children: React.ReactNode;
  closeDialog: (e: React.MouseEvent) => void;
}

const Modal = ({ children, closeDialog }: Props) => {
  return (
    <ModalRoot>
      {children}
      <button onClick={(e) => closeDialog(e)}>Close</button>
    </ModalRoot>
  );
};

export default Modal;
