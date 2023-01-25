import React, { FC } from "react";
import { Meta } from "@storybook/react";
import { Grid, GridProps } from "./Grid";

export default {
    title: "Grid",
    component: Grid,
} as Meta<GridProps>;

export const Default: FC = () => {
    return (
        <Grid direction="horizontal" paddingInline>
            <Grid direction="vertical">
                <div style={{ minHeight: "100vh" }}>Helo world</div>
            </Grid>
        </Grid>
    );
};
