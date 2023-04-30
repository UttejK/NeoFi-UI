import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-secondary px-12 py-4 fixed top-0 w-full">
        <div>NeoFi</div>

        <ul className="flex justify-center items-center gap-[50px] list-none ">
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

        <Button label="Connect wallet" />
      </nav>
    </>
  );
}

export default Navbar;
