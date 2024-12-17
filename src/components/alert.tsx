type Props = {
  msg: string;
};

export const Alert = (props: Props) => {
  return (
    <div className="w-full h-20 text-center bg-amber-100 flex justify-center items-center ">
      <p className="text-amber-700 px-1 border-l-2 border-l-amber-700 rounded-sm">
        Aviso :
      </p>
      <p className="text-amber-700 underline font-bold">{props.msg}</p>
    </div>
  );
};
