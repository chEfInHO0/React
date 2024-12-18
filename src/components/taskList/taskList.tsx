import { listReducer } from "@/app/reducers/listReducer";
import { useReducer } from "react";

export const TaskList = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  return (
    <div className="hero flex-col">
      {list.map((item, key) => {
        return (
          <div key={key} className="flex justify-center items-center">
            <input
              type="checkbox"
              name="done"
              id="done"
              className="btn mr-4 active-btn"
              onClick={() =>
                dispatch({
                  type: "done",
                  payload: { id: item.id },
                })
              }
            />
            <p className={`${item.done ? "line-through" : ""}`}>
              {item.text} {item.id}
            </p>

            <button
              className="btn ml-3 active-btn"
              onClick={() =>
                dispatch({
                  type: "edit",
                  payload: { text: "Outro Teste", id: item.id },
                })
              }
            >
              Editar
            </button>

            <button
              className="btn ml-3 active-btn"
              onClick={() => {
                dispatch({ type: "delete", payload: { id: item.id } });
              }}
            >
              Deletar {item.id}
            </button>
          </div>
        );
      })}
      <button
        className="btn active-btn"
        onClick={() => {
          dispatch({ type: "add", payload: { text: "Teste" } });
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
