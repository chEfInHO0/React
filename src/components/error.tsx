type Props = {
  msg: string;
};

export const Error = (props: Props) => {
  return (
    <div className="w-full h-20 text-center bg-red-600 flex justify-center items-center ">
      <p className="uppercase text-red-900 border-2 border-red-600 border-l-red-900 rounded-sm px-1">
        Erro:
      </p>
      <p className="text-red-900 underline  ">{props.msg}</p>
    </div>
  );
};
