import { Photo } from "@/types/photo";
import { photos } from "@/data/photos";
import { Pic } from "./photo";
import { useState } from "react";
import { ImageModal } from "./modal";

export const Gallery = () => {
  const [showImage, setShowImage] = useState<Photo>({
    id: 0,
    src: "",
    alt: "",
  });
  const [visible, setVisible] = useState(false);

  function modalImage(id: number) {
    const img = photos.filter((p) => p.id === id)[0];
    setShowImage(img);
    setVisible(true);
  }
  return (
    <div className="grid grid-cols-1  gap-5 w-3/4 md:grid-cols-2 lg:grid-cols-3">
      {photos.map((p) => (
        <Pic key={p.id} photo={p} onClick={() => modalImage(p.id)} />
      ))}
      {visible && (
        <ImageModal
          photo={showImage}
          onClick={() => setVisible(false)}
          key={showImage.id}
        />
      )}
    </div>
  );
};
