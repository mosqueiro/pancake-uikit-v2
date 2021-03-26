export declare const animation: {
    readonly WAVES: "waves";
    readonly PULSE: "pulse";
};
export declare const variant: {
    readonly RECT: "rect";
    readonly CIRCLE: "circle";
};
export declare type Animation = typeof animation[keyof typeof animation];
export declare type Variant = typeof variant[keyof typeof variant];
export interface SkeletonProps {
    animation?: Animation;
    variant?: Variant;
    width?: number;
    height?: number;
}
