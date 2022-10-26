import { createContext, ReactNode, useContext, useState, useEffect } from 'react'

interface TestABProviderPros {
  children: ReactNode;
}

interface TestABContextData {
  variant: any;
}

const TestABContext = createContext<TestABContextData>({} as TestABContextData);

export function TestABProvider({ children }: TestABProviderPros) {
  const [variant, setVariant] = useState();

  useEffect(() => {
    (async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: 'optimize.activate' })
      }
      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          setVariant(
            window.google_optimize.get(import.meta.env.VITE_OPTIMIZE_EXPERIMENT_ID)
          );
          clearInterval(intervalId);
        }
      }, 100);
    })();
  })

  return (
    <TestABContext.Provider value={{ variant }}>
      {children}
    </TestABContext.Provider>
  )
}

export function useTestAB() {
  const context = useContext(TestABContext);

  return context;
}