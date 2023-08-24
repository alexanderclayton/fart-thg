//import//
import { useState } from "react";
import { IGalleryCard } from "../data/galleryData";
import { GalleryCard } from "../data/galleryData";

export const GalleryCards: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    GalleryCard.map(() => false)
  );

  const handleToggle = (index: number) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="pt-24 px-4 grid grid-cols-3">
      {GalleryCard.map((data: IGalleryCard, index: number) => (
        <div key={index} className="w-full flex flex-col p-4">
          {!toggleStates[index] ? (
            <div className="flex flex-col items-center">
              <img
                src={data.beforeImage}
                alt={`${data.alt} before`}
                className="rounded-xl"
              />
              <button
                onClick={() => handleToggle(index)}
                className="w-[20%] bg-black text-white py-1 mt-3 rounded-full flex justify-between"
              >
                <div className="bg-white h-full w-[25%] rounded-full ml-1" />
                <p className="pr-5 text-xl">Before</p>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={data.afterImage}
                alt={`${data.alt} after`}
                className="rounded-xl"
              />
              <button
                onClick={() => handleToggle(index)}
                className="w-[20%] bg-black text-white py-1 mt-3 rounded-full flex justify-between"
              >
                <p className="pl-5 text-xl">After</p>
                <div className="bg-white h-full w-[25%] rounded-full mr-1" />
                
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
