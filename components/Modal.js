import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>{open && <p>THE MODAL IS OPEN</p>}</h1>
    </div>
  );
};

export default Modal;
