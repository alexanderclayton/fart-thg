//import//
import { useState } from "react";
import { IGalleryCard } from "../data/galleryData";
import { GalleryCard4416 } from "../data/galleryData";

export const GalleryCards: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    GalleryCard4416.map(() => false)
  );

  const handleToggle = (index: number) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div>
      {GalleryCard4416.map((data: IGalleryCard, index: number) => (
        <div key={index} className="w-[30%]">
          {!toggleStates[index] ? (
            <div>
              <img src={data.beforeImage} alt={`${data.alt} before`} />
            </div>
          ) : (
            <div>
              <img src={data.afterImage} alt={`${data.alt} after`} />
            </div>
          )}
          <button onClick={() => handleToggle(index)}>Toggle</button>
        </div>
      ))}
    </div>
  );
};
