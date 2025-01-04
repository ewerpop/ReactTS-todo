import { createContext } from "react";
import { CardType } from "./App";
import { ActionType } from "./App";

const initialState: CardType[] = [
    {
      id: '1',
      title: "title",
      text: "text",
      date: Date.now(),
      isEdit: false,
      isDone: false,
    },
];
interface ContextType {
  state: CardType[];
  dispatch: (action: ActionType) => void;
}


export const StateContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => {}
});