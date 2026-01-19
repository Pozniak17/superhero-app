import { useEffect } from "react";
import { Backdrop, ModalContent } from "./Modal.styled";

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Backdrop onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <button
          onClick={onClose}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          X
        </button>
        {children}
      </ModalContent>
    </Backdrop>
  );
};
