import { Typography } from "@mui/material";
import type * as React from "react";

export interface TitleProps {
    title: string;
    subtitle: string;
}

export function HeaderTile({ title, subtitle }: TitleProps): React.JSX.Element {
    return (
        <>
            <Typography variant="h4" align="left" sx={{ fontWeight:'600'}}>{title}</Typography>
            <Typography variant="body2" align="left" sx={{color:'grey'}}>{subtitle}</Typography>
        </>
    );
}
