import type { FC } from "react";

interface IconProps {
    name: string;
    width: number;
    height: number;
    className?: string;
    fill?: string;
}

export const Icon: FC<IconProps> = ({ name, width, height, className = "", fill = "currentColor" }) => {
    return (
        <svg width={width} height={height} className={className} fill={fill}>
            <use xlinkHref={`/sprite.svg#${name}`} />
        </svg>
    );
};