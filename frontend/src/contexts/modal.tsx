import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProviderPros {
  children: ReactNode;
}

interface ModalContextData {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderPros) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}