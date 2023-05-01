import clsx from "clsx";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="">
        <ul
          className={clsx([
            "fixed h-full w-3/4 flex flex-col pt-16 bg-background2 items-center z-50 gap-[40px] list-none md:hidden",
            "transition-transform, duration-500 ease-in-out",
            show ? "translate-x-0" : "-translate-x-[300vw]",
          ])}
        >
          <button onClick={() => setShow(false)} className="block md:hidden ">
            <IoMdClose className="w-6 h-6 fill-primary fixed top-8 left-8" />
          </button>
          <label htmlFor="">
            <img
              src="/NeoFi.svg"
              className="min-h-[32px] min-w-[25px] h-[50px] w-[50px]"
              alt="NeoFi_Logo"
            />
          </label>
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
      </div>
      <nav className="flex justify-between items-center bg-secondary py-4 fixed top-0 w-full px-7">
        <button onClick={() => setShow(true)} className="block md:hidden ">
          <GiHamburgerMenu className="w-6 h-6 fill-primary" />
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
