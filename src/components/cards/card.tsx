type Props = {
  avatar: string;
  name: string;
  bio: string;
  birthplace: string;
  profession: string;
};

export const Card = ({ avatar, name, bio, birthplace, profession }: Props) => {
  return (
    <div className="container flex justify-center mt-4">
      <div className="w-3/4  bg-slate-800 p-5 rounded-lg flex flex-col justify-center items-center md:flex-row md:justify-start md:p-0">
        <img
          className="w-20 h-20 rounded-full bg-gray-300  md:rounded-sm md:h-auto md:w-40 "
          src={avatar}
          alt=""
        />
        <div className="flex flex-col text-center w-full md:px-8 md:text-left">
          <p className="italic p-5">" {bio} "</p>
          <h2 className="text-xl text-bold text-indigo-300">{name}</h2>
          <p className="text-gray-400 text-xs py-1">{profession}</p>
          <p className="text-gray-400 text-sm">{birthplace}</p>
        </div>
      </div>
    </div>
  );
};
