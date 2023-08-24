//import//
import Logo from "../assets/THG Small (1).png";

export const Hero: React.FC = () => {
  return (
    <div className="flex w-full h-screen items-center justify-between">
      <div className="w-[50%] p-8 flex justify-end">
        <img src={Logo} alt="THG" className="w-[50%]" />
      </div>
      <div className="w-[50%] flex flex-col items-start p-8">
        <h1 className="text-9xl font-bold">THG</h1>
        <h1 className="text-2xl">Quality Custom Exteriors</h1>
      </div>
    </div>
  );
};
