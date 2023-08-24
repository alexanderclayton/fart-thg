//import//
import { useState } from "react";
import BackBefore from '../assets/4416 Back Before.jpg'
import BackAfter from '../assets/4416 Back After.jpg'

export const House4416: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="w-[30%]">
      {!toggle ? (
        <div>
          <img src={BackBefore} alt="4416 back before" />
          <button onClick={handleToggle}>Before</button>
        </div>
      ) : (
        <div>
          <img src={BackAfter} alt="4416 back after" />
          <button onClick={handleToggle}>After</button>
        </div>
      )}
    </div>
  );
};
