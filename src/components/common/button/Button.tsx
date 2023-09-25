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
    type = "button",
}: IButtonProps): JSX.Element {

    const ButtonVariant: BtnVariant = {
        contained: `outline-transparent ${ButtonColor[color]}`,
        outlined: `!bg-transparent !hover:bg-current border-2 border-current ${ButtonTextColor[color]}`,
        text: `${ButtonTextColor[color]} outline-transparent`,
    };

    return (
        <button
            className={`${className} py-2 ${fullWidth ? "w-full" : "w-max !min-w-[10rem]"} ${ButtonPill[rounded]} disabled:text-opacity-70 disabled:cursor-not-allowed ${ButtonVariant[variant]} ${ButtonSize[size]} flex flex-col items-center  justify-center transition-all ease-in-out max-h-10 overflow-clip`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            aria-label={title}
            {...buttonProps}
        >
            <span className={`${loading ? "-translate-y-5" : "translate-y-0"} transition-transform`}>{title}</span>
            {loading ? (
                <div className={`${loading ? "-translate-y-3 delay-500" : "translate-y-10 opacity-0"} transition-transform`}>
                    <Spinner
                        color={ButtonTextColor[color]}
                        size={SpinnerSizeConfig[size] as SpinnerSizeType}
                    />
                </div>
            ) : null}
        </button>
    );
}