import React from "react";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className="relative rounded-lg border-4 border-text-primary bg-primary-400
        px-6 py-2.5 font-quicksand text-sm font-bold uppercase text-text-primary
        before:absolute before:top-0.5 before:left-0.5 before:-z-10
        before:h-[calc(100%+0.25rem)] before:w-[calc(100%+0.25rem)]
        before:rounded-lg before:bg-text-primary before:transition-all
        before:content-[''] hover:before:h-[calc(102%+0.25rem)]
        hover:before:w-[calc(102%+0.25rem)] active:before:top-0 active:before:left-0"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
