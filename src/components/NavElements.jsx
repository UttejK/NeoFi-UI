import clsx from "clsx";

export default function NavElement({ selected, children, sidebar }) {
  return (
    <li>
      <a
        className={clsx(
          "font-semibold hover:text-primary focus-visible:text-primary transition-colors duration-200 ease-out",
          !sidebar && "px-5",
          selected &&
            "text-primary focus:border-b-2 focus:border-solid focus:border-primary",
          !sidebar &&
            selected &&
            "h-full align-middle border-b-2 border-solid border-primary pt-[30px] pb-[20px]"
        )}
        href=""
      >
        {children}
      </a>
    </li>
  );
}
