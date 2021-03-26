import { ElementType, ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare const sizes: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly DANGER: "danger";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
};
export declare type Sizes = typeof sizes[keyof typeof sizes];
export declare type Variants = typeof variants[keyof typeof variants];
declare type MergeElementProps<T extends React.ElementType, P extends object = {}> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;
export interface ButtonBaseProps extends SpaceProps {
    variant?: Variants;
    size?: Sizes;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    href?: string;
    external?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}
export declare type ButtonProps<P extends ElementType = "button"> = {
    as?: P;
} & MergeElementProps<P, ButtonBaseProps>;
export declare type ButtonThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
};
export declare type ButtonTheme = {
    [key in Variants]: ButtonThemeVariant;
};
export {};
