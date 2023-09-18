export interface ISpinnerProps {
  color?: string;
  size?: string
}
export type SpinnerSizeType = "sm" | "md" | "lg" | "xl";
export type SpinnerSize = {
    [x in SpinnerSizeType]: string;
  };