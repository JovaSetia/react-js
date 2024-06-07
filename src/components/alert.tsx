import { ReactNode } from "react";

interface Props {
  children: any;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="Alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
