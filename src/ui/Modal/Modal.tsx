import { type FC, type ReactElement, useLayoutEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  active: boolean;
  setActive: (value: boolean) => void;
  children: ReactElement;
}

export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {

  useLayoutEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [active]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onMouseDown={() => setActive(false)}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={active ? "modal__content active" : "modal__content"}
      >
        <div>
          <button className="modal__close" onMouseDown={() => setActive(false)}>
            <svg id="x" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99873 5.5865L11.9485 0.636719L13.3627 2.05093L8.41293 7.0007L13.3627 11.9504L11.9485 13.3646L6.99873 8.4149L2.04899 13.3646L0.634766 11.9504L5.58453 7.0007L0.634766 2.05093L2.04899 0.636719L6.99873 5.5865Z" />
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};
