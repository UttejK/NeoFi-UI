import clsx from "clsx";

import ID from "../utils/id";

function TextFields({
  label,
  value,
  onChange,
  disabled,
  rightLabel,
  className,
}) {
  const id = ID("input");

  return (
    <div className={clsx([className])}>
      <label
        htmlFor={id}
        className="md:text-md text-sm md:mb-3 mb-3 inline-block text-[#C5C5C5] font-normal "
      >
        {label}
      </label>
      <div
        className={clsx(
          "flex items-center",
          rightLabel ? "input-field-right-label" : ""
        )}
        data-content-right={rightLabel}
      >
        <input
          id={id}
          className={clsx(
            "w-full bg-background2 h-16 rounded-xl border-none font-semibold text-xl",
            disabled ? "select-none" : ""
          )}
          type="text"
          value={value}
          disabled={disabled}
          aria-disabled={disabled}
          placeholder="0.00"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}
export default TextFields;
