import clsx from "clsx";

function Button({ label, className, ...props }) {
  return (
    <button
      className={clsx([
        "rounded-full bg-gradient-to-r from-grad1 to-grad2 px-4 py-2 font-bold ",
        className,
      ])}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
