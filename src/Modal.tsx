import { createPortal } from "react-dom";
import { useRef, useEffect, MutableRefObject, ReactElement } from "react";
const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot: HTMLElement | null = document.querySelector("#modal");
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);


    return () => {
      if (elRef.current)
        modalRoot.removeChild(elRef.current);
    }
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
