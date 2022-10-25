import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProviderPros {
  children: ReactNode;
}

interface ModalContextData {
  isOpen: boolean;
  data: { id: string };
  setData: (data: { id: string }) => void;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderPros) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, data, setData }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}