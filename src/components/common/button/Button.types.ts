import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from "react";
import { SpinnerSize } from "../ui/spinner/Spinner.types";

export type BtnColor = {
  [x in BtnColorType]: string;
};
export type BtnVariant = {
  [x in BtnVariantType]: string;
};
export type BtnSize = {
  [x in BtnSizeType]: string;
};
export type BtnRoundedSize = {
  [x in BtnSizeType | "none"]: string;
};

export type BtnColorType =
  | "default"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "dark";

export type BtnSizeType = "sm" | "md" | "lg" | "xl";
export type BtnVariantType = "contained" | "outlined" | "text";
export type BtnTypeHTML = "button" | "submit" | "reset" | undefined;

// interface to declare all our prop types
export interface IButtonProps {
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: BtnColorType;
  variant?: BtnVariantType;
  rounded?: BtnSizeType | "none";
  size?: BtnSizeType;
  disabled?: boolean;
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  loading?: boolean;
  fullWidth?: boolean;
  type?: BtnTypeHTML;
  className?: string | undefined;
}
export const ButtonColor: BtnColor = {
    danger: "bg-red-500 dark:bg-red-700 text-white hover:bg-red-600 dark:hover:bg-red-800",
    dark: "bg-gray-700 hover:bg-gray-900 dark:bg-gray-600 hover:dark:bg-gray-800 text-white",
    default: "bg-gray-100 dark:bg-gray-200 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-300 ",
    info: "bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800",
    primary: "bg-blue-600 dark:bg-blue-800 text-white hover:bg-blue-700 dark:hover:bg-blue-700 ",
    success: "bg-green-500 dark:bg-green-700 text-white hover:bg-green-600 dark:hover:bg-green-800",
    warning: "bg-yellow-400 dark:bg-yellow-600 text-gray-800 dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-700",
  };
  export const ButtonTextColor: BtnColor = {
    danger: "!text-red-500 dark:!text-red-600 hover:dark:!text-red-500  hover:!text-red-600",
    dark: "!text-gray-800 dark:!text-gray-700 hover:dark:!text-gray-600  hover:!text-gray-900",
    default: "!text-gray-500 dark:!text-gray-400 hover:dark:!text-gray-100  hover:!text-gray-900 ",
    info: "!text-blue-500 dark:!text-blue-600 hover:dark:!text-blue-500  hover:!text-blue-600",
    primary: "!text-blue-600 dark:!text-blue-700 hover:dark:!text-blue-600  hover:!text-blue-700 ",
    success: "!text-green-500 dark:!text-green-600 hover:dark:!text-green-500  hover:!text-green-600",
    warning: "!text-yellow-400 dark:!text-yellow-500 hover:dark:!text-yellow-400  hover:!text-yellow-500",
  };

  export const ButtonSize: BtnSize = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-8",
    xl: "py-4 px-20",
  };
  export const SpinnerSizeConfig: SpinnerSize = {
    sm: "w-3 h-3",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5",
  };

  export const ButtonPill: BtnRoundedSize = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };


