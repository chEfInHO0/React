type Props = {
  user_avatar: string;
  user_name: string;
  message?: string;
};

export const Invite = ({ user_avatar, user_name, message }: Props) => {
  return (
    <div className="w-96 rounded-md border-gray-500 bg-white p-5">
      <div>
        <div className="inline-block">
          <div>
            <img className="rounded-full h-14 w-14" src={user_avatar} alt="" />
          </div>
        </div>
        <div className="inline-block ml-4">
          <p className="text-black pb-2">{user_name}</p>
          <p className="text-gray-400">
            {message && message.trim() !== ""
              ? message
              : "Te enviou um convite"}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button className="rounded-md px-5 py-2 bg-blue-800 text-white">
          Aceitar
        </button>
        <button className="rounded-md px-5 py-2 border border-gray-200 text-black ml-3">
          Recusar
        </button>
      </div>
    </div>
  );
};
