interface ModalProps {
  header: string;
  text: string;
  color: string;
  onClose: () => void;
  score?: number;
}
const Modal = ({ header, text, color, onClose, score }: ModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center backdrop-blur-sm items-center z-20 text-foreground"
      onClick={onClose}
    >
      <div
        className={`p-6 flex flex-col justify-center items-center text-center rounded-lg shadow-lg ${color}`}
      >
        <p className="text-2xl font-semibold">{header}</p>
        <p className="text-secondary_foreground">{text}</p>
        {score && <div>
          Score: {score}</div>}
      </div>
    </div>
  );
};

export default Modal;
