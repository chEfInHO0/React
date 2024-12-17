type Props = {
  labelText: string;
  labelFor: string;
  inputType: string;
  inputId: string;
  isRequired: boolean;
};

export const Input = ({
  isRequired,
  labelText,
  labelFor,
  inputType,
  inputId,
}: Props) => {
  return (
    <>
      <label className="block py-2 font-bold" htmlFor={labelFor}>
        {labelText}
      </label>
      <input
        className="w-full p-1 bg-slate-800 rounded-md outline-none"
        type={inputType}
        id={inputId}
        name={labelFor}
        autoComplete="off"
        required={isRequired}
      />
    </>
  );
};
