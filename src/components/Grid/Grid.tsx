import "./Grid.scss";
import React from "react";

export interface GridProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction: "vertical" | "horizontal";
    paddingInline?: boolean;
}

export function Grid(props: GridProps) {
    const { children, direction, paddingInline = false, ...rest } = props;
    delete rest.style?.backgroundImage;
    delete rest.style?.backgroundSize;
    delete rest.style?.backgroundRepeat;
    if (direction === "vertical") {
        delete rest.style?.backgroundColor;
    }
    return (
        <div className="container" {...rest} data-direction={direction} data-padding-inline={paddingInline}>
            {children}
        </div>
    );
}
