import clsx from "clsx";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";
import NavElements from "./NavElements";

function Navbar() {
  const [show, setShow] = useState(false);
  const overalRef = useRef(null);

  return (
    <>
      <div>
        <ul
          className={clsx([
            "fixed h-full w-3/4 flex flex-col pl-16 pt-16 bg-background2 items-start z-50 gap-[50px] list-none md:hidden text-2xl ",
            "transition-transform, duration-500 ease-in-out",
            show ? "translate-x-0" : "-translate-x-[300vw]",
          ])}
        >
          <button onClick={() => setShow(false)} className="block md:hidden ">
            <IoMdClose className="w-6 h-6 fill-primary fixed top-8 left-8" />
          </button>
          <NavElements sidebar selected>
            Trade
          </NavElements>
          <NavElements sidebar>Earn</NavElements>
          <NavElements sidebar>Support</NavElements>
          <NavElements sidebar>About</NavElements>
        </ul>
      </div>
      <nav className="flex justify-between items-center bg-secondary py-4 fixed top-0 w-full px-7">
        <button onClick={() => setShow(true)} className="block md:hidden ">
          <GiHamburgerMenu className="w-6 h-6 fill-primary" />
        </button>
        <div className="hidden w-[250px] md:flex justify-start shrink-0 items-center gap-x-4 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-grad1 to-grad2">
          <img
            src="/NeoFi.svg"
            className="h-[32px] w-[25px] ml-4"
            alt="NeoFi_Logo"
          />
          <p className="hidden md:inline-block">NeoFi</p>
        </div>

        <ul className="nav-items md:flex justify-center items-center  list-none hidden ">
          <NavElements selected>Trade</NavElements>
          <NavElements>Earn</NavElements>
          <NavElements>Support</NavElements>
          <NavElements>About</NavElements>
        </ul>

        <div className="tdgrad  lg:mr-[90px]">
          <Button label="Connect wallet" className="z-[1] relative w-[160px]" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
