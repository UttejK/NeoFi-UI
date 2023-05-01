import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-secondary py-4 fixed top-0 w-full px-5">
        <button className="block md:hidden">
          <GiHamburgerMenu />
        </button>
        <div className="hidden md:flex items-center gap-x-4 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-grad1 to-grad2">
          <img
            src="/NeoFi.svg"
            className="min-h-[32px] min-w-[25px] h-[32px] w-[25px]"
            alt="NeoFi_Logo"
          />
          <p className="hidden md:inline-block">Neo Fi</p>
        </div>

        <ul className="md:flex justify-center items-center gap-[50px] list-none hidden ">
          <li>
            <a href="" className="text-primary font-semibold">
              Trade
            </a>
          </li>
          <li>
            <a href="">Earn</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>

        <div className="tdgrad">
          <Button label="Connect wallet" className="z-[1] relative" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
