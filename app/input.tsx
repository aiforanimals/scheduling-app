/* eslint-disable react/display-name */
import clsx from "clsx";
import { Ref, forwardRef } from "react";

export const Input = forwardRef(
  (
    props: {
      error?: boolean;
      errorMessage?: string;
    } & JSX.IntrinsicElements["input"],
    ref: Ref<HTMLInputElement>
  ) => {
    const { error, errorMessage, className, ...rest } = props;
    return (
      <>
        <input
          ref={ref}
          className={clsx(
            "h-12 rounded-md border bg-white px-4 shadow-sm transition-colors invalid:border-rose-500 invalid:text-rose-900 invalid:placeholder-rose-300 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500",
            error
              ? "border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500" // matches invalid: styles
              : "border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 ",
            className
          )}
          {...rest}
        />
        {error && errorMessage && (
          <span className="text-xs text-rose-500">{errorMessage}</span>
        )}
      </>
    );
  }
);