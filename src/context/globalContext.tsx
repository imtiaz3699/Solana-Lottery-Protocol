import  { createContext,  } from 'react';
interface GlobalState {
  someValue: string;
}
const initialState: GlobalState = {
  someValue: 'initialValue',
};
export const GlobalContext = createContext<{
  globalState: GlobalState;
  updateGlobalState: (newState: Partial<GlobalState>) => void;
}>({
  globalState: initialState,
  updateGlobalState: () => {},
});
