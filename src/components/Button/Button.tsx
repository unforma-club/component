import "./Button.scss";
import React from "react";

export interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export function Button(props: ButtonProps) {
    const { children, ...rest } = props;

    return (
        <button {...rest} data-testid="button-comp">
            {children}
        </button>
    );
}
