type Props = {
  inputId: string;
  inputValue: string;
};

export const Submit = ({ inputId, inputValue }: Props) => {
  return (
    <>
      <input
        className="w-full p-2 bg-amber-800 rounded-md outline-none font-bold mt-5 cursor-pointer"
        type="submit"
        id={inputId}
        value={inputValue}
      />
    </>
  );
};
