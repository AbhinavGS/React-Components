import "./Toast.css";

interface ToastProps {
  type: string;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({ type, setShowToast }: ToastProps) => {
  return (
    <div className={`toast_container ${type.toLowerCase()}`}>
      <div>{type}</div>
      <span
        onClick={() => {
          setShowToast(false);
        }}
        className="closeToastBtn"
      >
        X
      </span>
    </div>
  );
};

export default Toast;
