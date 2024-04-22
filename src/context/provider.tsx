import React, { createContext, useState, ReactNode } from 'react';

interface GlobalState {
  someValue: string;
  isCreateBet: boolean;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const initialGlobalState: GlobalState = {
  someValue: "",
  isCreateBet: false
};

const GlobalContext = createContext<{
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
}>({
  globalState: initialGlobalState,
  setGlobalState: () => {}
});

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
//   const [globalState, setGlobalState] = useState<GlobalState>(initialGlobalState);
  const [isCreateBet,setIsCreateBet] = useState(false);

  return (
    <GlobalContext.Provider value={{ isCreateBet, setIsCreateBet }}>
      {children}
    </GlobalContext.Provider>
  );
};