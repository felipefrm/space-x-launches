import { Routes } from "./routes"
import { Modal } from "./components/Modal";
import { ModalProvider } from "./contexts/modal";

function App() {
  return (
    <ModalProvider>
      <Routes />
      <Modal />
    </ModalProvider>
  )
}

export default App
