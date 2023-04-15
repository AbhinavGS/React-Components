import { useEffect, useState } from "react";
import "./App.css";
import Toast from "./components/Toast";

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");

  const toastHandler = (e: any) => {
    setShowToast(true);
    setToastType(e.target.textContent.toLowerCase());
  };

  useEffect(() => {
    setTimeout(() => setShowToast(false), 5000);
  });

  return (
    <>
      <button onClick={toastHandler}>Success</button>
      <button onClick={toastHandler}>Warning</button>
      <button onClick={toastHandler}>Error</button>
      {showToast && <Toast type={toastType} setShowToast={setShowToast} />}
    </>
  );
};

export default App;
