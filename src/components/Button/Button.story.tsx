import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
    title: "Button",
    component: Button,
} as Meta<ButtonProps>;

export const Default: FC = () => {
    return <Button onClick={() => console.log("click")}>Helo</Button>;
};
