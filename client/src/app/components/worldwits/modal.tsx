import { useRef } from "react";
import Button from "../Button";

interface ModalProps {
  header: string;
  text: string;
  color: string;
  onClose: () => void;
}
const Modal = ({ header, text, color, onClose }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center backdrop-blur-sm items-center"
    onClick={onClose}>
      <div
        className={`p-6 flex flex-col justify-center items-center text-center rounded-lg shadow-lg ${color}`}
      >
        <p className="text-2xl font-semibold">{header}</p>
        <p className="text-secondary">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
