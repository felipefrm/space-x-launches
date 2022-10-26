import { Routes } from "./routes"
import { Modal } from "./components/Modal";
import { ModalProvider } from "./contexts/modal";
import { ToastContainer } from "react-toastify";
import { TestABProvider } from "./contexts/testAB";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <TestABProvider>
      <ModalProvider>
        <Routes />
        <Modal />
        <ToastContainer />
      </ModalProvider>
    </TestABProvider>
  )
}

export default App
