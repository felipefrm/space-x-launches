import { Routes } from "./routes"
import { Modal } from "./components/Modal";
import { ModalProvider } from "./contexts/modal";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ModalProvider>
      <Routes />
      <Modal />
      <ToastContainer />
    </ModalProvider>
  )
}

export default App
