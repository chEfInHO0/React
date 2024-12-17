import { Task } from "@/types/task";

type Item = {
  id: number;
  text: string;
  done: boolean;
};

type AddAction = {
  type: "add";
  payload: { text: string };
};

type EditAction = {
  type: "edit";
  payload: { id: number; text: string };
};

type FinishAction = {
  type: "done";
  payload: { id: number };
};

type DeleteAction = {
  type: "delete";
  payload: { id: number };
};

type ListActions = AddAction | EditAction | FinishAction | DeleteAction;

export const listReducer = (list: Item[], action: ListActions) => {
  switch (action.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false,
        },
      ];
    case "edit":
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      });
    case "done":
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.done = true;
        }
        return item;
      });
    case "delete":
      return list.filter((item) => item.id !== action.payload.id);
  }
};
