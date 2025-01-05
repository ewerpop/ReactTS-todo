import { createContext } from "react";
import { CardType } from "./App";
import { ActionType } from "./App";

const initialState: CardType[] = [
    {
      id: '1',
      title: "title123456",
      text: "text12345",
      date: Date.now(),
      isEdit: false,
      isDone: false,
    },
];
const initialStateLocalStorage = JSON.parse(localStorage.getItem('cards') || '[]')
interface ContextType {
  state: CardType[];
  dispatch: (action: ActionType) => void;
}


export const StateContext = createContext<ContextType>({
    state: initialStateLocalStorage || initialState,
    dispatch: () => {}
});