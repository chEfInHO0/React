import { useContext } from "react";
import { countContext } from "@/contexts/countContext";

export const DisplayInfo = () => {
  const ctx = useContext(countContext);

  return (
    <div>
      <p>Information : {ctx?.ctx}</p>
      <input
        className="text-black rounded-md p-2"
        defaultValue={0}
        type="number"
        placeholder="Novo valor"
        onChange={(t) => ctx?.setCtx(+t.currentTarget.value)}
      />
    </div>
  );
};
