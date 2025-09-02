import { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };


    return (
        <Box sx={{ display: "flex" }}>
            <Header  />
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: "margin 0.3s",
                }}
            >
                <Box sx={{ mt: 8 }}>
                {children}
                </Box>
            </Box>
        </Box>
    );
}
