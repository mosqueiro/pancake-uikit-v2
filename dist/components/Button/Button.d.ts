import { ElementType } from "react";
import { ButtonProps } from "./types";
declare function Button<T extends ElementType = "button">({ startIcon, endIcon, children, external, isLoading, isDisabled, ...props }: ButtonProps<T>): JSX.Element;
declare namespace Button {
    var defaultProps: {
        as: string;
        variant: "primary";
        size: "md";
        external: boolean;
        isLoading: boolean;
        isDisabled: boolean;
    };
}
export default Button;
