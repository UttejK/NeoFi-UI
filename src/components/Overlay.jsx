import { BiSearchAlt2 } from "react-icons/bi";

let ar1 = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
];

const Overlay = () => {
  return (
    <div className="fixed h-screen w-screen bg-secondary/80 z-10 flex items-center justify-center flex-col ">
      <div className="absolute max-w-screen-md z-20 text-white p-10 bg-[#181627] rounded-xl ">
        <div>
          <input
            className="w-full bg-[#181627] text-[#D2D2D2] h-16 rounded-full border-none mb-4"
            type="text"
          />
          <BiSearchAlt2 className="text-[#D2D2D2] text-3xl -translate-y-16 translate-x-4" />
        </div>
        <button className="w-full bg-white rounded-sm py-4 mb-1 selected">
          selected
        </button>
        {ar1.map((n) => (
          <button
            className="w-full bg-inherit rounded-sm py-4 mb-1 "
            key={n.id}
          >
            {n.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Overlay;
