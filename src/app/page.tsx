"use client";

import { listReducer } from "./reducers/listReducer";
import { useReducer } from "react";

function Home() {
  const [list, dispatch] = useReducer(listReducer, []);
  return (
    <div className="hero flex-col">
      {list.map((item, key) => {
        return (
          <div key={key} className="flex justify-center items-center">
            <p className={`${item.done ? "line-through" : ""}`}>
              {item.text} {item.id} {item.done ? "Feito" : "Nao Feito"}
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
              onClick={() =>
                dispatch({
                  type: "done",
                  payload: { id: item.id },
                })
              }
            >
              Completar
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
}

export default Home;
