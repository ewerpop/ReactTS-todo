import "./App.css";
import { CardList } from "./components/card-list";
import { useReducer } from "react";
import { StateContext } from "./context";
export interface CardType {
  id: string;
  title?: string;
  text?: string;
  date?: number;
  isEdit?: boolean;
  isDone?: boolean;
}
type ActionNameType =
  | "ADD_CARD"
  | "DELETE_CARD"
  | "UPDATE_CARD"
  | "CHANGE_DONE_STATUS"
  | "SET_EDIT"
  | "SHOW_ALL"
  | "SHOW_DONE"
  | "SHOW_NOT_DONE"
  | 'SORT_BY_DATE';

export interface ActionType {
  type: ActionNameType;
  payload: CardType;
}

const initialState = [
  {
    id: "1",
    title: "title",
    text: "text",
    date: Date.now(),
    isEdit: false,
    isDone: false,
  },
];

const initialStateLocalStorage = JSON.parse(
  localStorage.getItem("cards") || "[]"
);
let newState: CardType[];
const reducer = (state: CardType[], action: ActionType) => {
  switch (action.type) {
    case "ADD_CARD":
      newState = [action.payload, ...state];
      localStorage.setItem("cards", JSON.stringify(newState));
      return newState;
    case "DELETE_CARD":
      newState = state.filter(
        (card: CardType) => card.id !== action.payload.id
      );
      console.log(newState)
      localStorage.setItem("cards", JSON.stringify(newState));
      return newState;
    case "UPDATE_CARD":
      newState = state.map((card: CardType) => {
        if (card.id === action.payload.id) {
          return { ...card, ...action.payload };
        }
        return card;
      });
      localStorage.setItem("cards", JSON.stringify(newState));
      return newState;
    case "CHANGE_DONE_STATUS":
      newState = state.map((card: CardType) => {
        if (card.id === action.payload.id) {
          return { ...card, isDone: !card.isDone };
        }
        return card;
      });
      localStorage.setItem("cards", JSON.stringify(newState));
      return newState;
    case "SET_EDIT":
      return state.map((card: CardType) => {
        if (card.id === action.payload.id) {
          return { ...card, isEdit: !card.isEdit };
        }
        return card;
      });   
    case 'SORT_BY_DATE':
      if (action.payload.title === '1') {
        newState = [...state].sort((a: CardType, b: CardType) => (b.date || 1) - (a.date || 1))
        console.log(newState)
        return [...state].sort((a: CardType, b: CardType) => (b.date || 1) - (a.date || 1));
      }
      newState = [...state].sort((a: CardType, b: CardType) => (a.date || 1) - (b.date || 1))
      console.log(newState)
      return [...state].sort((a: CardType, b: CardType) => (a.date || 1) - (b.date || 1));
    case 'SHOW_ALL':
      return JSON.parse(localStorage.getItem('cards') || '[]');
    case 'SHOW_DONE':
      return JSON.parse(localStorage.getItem('cards') || '[]').filter((card: CardType) => card.isDone);
    case 'SHOW_NOT_DONE':
      return JSON.parse(localStorage.getItem('cards') || '[]').filter((card: CardType) => !card.isDone);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialStateLocalStorage || initialState
  );
  return (
    <>
      <main>
        <StateContext.Provider value={{ state, dispatch }}>
          <CardList />
        </StateContext.Provider>
      </main>
    </>
  );
}

export default App;
