import { SpinnerSizeType } from "../ui/spinner/Spinner.types";
import Spinner from "../ui/spinner/Spinner";
import { BtnVariant, ButtonColor, ButtonPill, ButtonSize, ButtonTextColor, IButtonProps, SpinnerSizeConfig } from "./Button.types";

export default function Button({
    title,
    onClick,
    color = "default",
    size = "md",
    variant = "contained",
    disabled,
    buttonProps,
    rounded = "sm",
    loading,
    fullWidth,
    className,
    type="button",
}: IButtonProps): JSX.Element {

    const ButtonVariant: BtnVariant = {
        contained: `outline-transparent ${ButtonColor[color]}`,
        outlined: `!bg-transparent !hover:bg-current border-2 border-current ${ButtonTextColor[color]}`,
        text: `${ButtonTextColor[color]} outline-transparent`,
    };

    return (
        <button
            className={`${className} py-2 ${fullWidth ? "w-full" : "w-max"} ${ButtonPill[rounded]} disabled:text-opacity-70 disabled:cursor-not-allowed ${ButtonVariant[variant]} ${ButtonSize[size]} flex items-center justify-center gap-2 transition-all duration-150 ease-in-out`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            aria-label={title}
            {...buttonProps}
        >
            {title}
            {loading ? (
                <Spinner
                    color={ButtonTextColor[color]}
                    size={SpinnerSizeConfig[size] as SpinnerSizeType}
                />
            ) : null}
        </button>
    );
}