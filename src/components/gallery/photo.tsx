import { Photo } from "@/types/photo";

import { photos } from "@/data/photos";

type Props = {
  photo: Photo;
  onClick: () => void;
};

export const Pic = ({ photo, onClick }: Props) => {
  return (
    <img
      className="h-40 w-full border bg-cover border-gray-600 rounded-md cursor-pointer"
      src={photo.src}
      alt={photo.alt}
      onClick={onClick}
    />
  );
};
