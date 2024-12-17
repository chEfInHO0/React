import { Photo } from "@/types/photo";

type Props = {
  photo: Photo;
  onClick: () => void;
};

export const ImageModal = ({ photo, onClick }: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 bg-slate-800/80">
      <img
        className="absolute w-2/4 h-1/4 md:w-3/4 md:h-2/4 lg:h-3/4"
        src={photo.src}
        alt={photo.alt}
      />
      <button
        className="w-14 h-14 rounded-full bg-white text-black absolute right-10 top-10"
        onClick={onClick}
      >
        X
      </button>
    </div>
  );
};
