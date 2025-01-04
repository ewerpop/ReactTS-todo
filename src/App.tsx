import "./App.css";
import { CardList } from "./components/card-list";
import { useReducer } from "react";
import { StateContext } from "./context";
export interface CardType {
  id: string;
  title: string;
  text: string;
  date: number;
  isEdit: boolean;
  isDone: boolean;
}
type ActionNameType = "ADD_CARD" | "DELETE_CARD" | "UPDATE_CARD" | "CHANGE_DONE_STATUS";

export interface ActionType {
  type: ActionNameType;
  payload: CardType;
}

const initialState = [
  {
    id: '1',
    title: "title",
    text: "text",
    date: Date.now(),
    isEdit: false,
    isDone: false,
  },
];

const reducer = (state: CardType[], action: ActionType) => {
  console.log(action);
  switch (action.type) {
    case "ADD_CARD":
      return [action.payload, ...state];
    case "DELETE_CARD":
      return state.filter((card: CardType) => card.id !== action.payload.id);
    case "UPDATE_CARD":
      return state.map((card: CardType) => {
        if (card.id === action.payload.id) {
          return { ...card, ...action.payload };
        }
        return card;
      });
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <main>
        <StateContext.Provider value={{state, dispatch}}>
          <CardList />
        </StateContext.Provider>
      </main>
    </>
  );
}


export default App;
