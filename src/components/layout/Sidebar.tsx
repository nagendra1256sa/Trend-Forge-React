import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Box,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    Settings as SettingsIcon,
    Assessment as AssessmentIcon,
} from "@mui/icons-material";
import { FC } from "react";
import { useLocation, Link } from "react-router-dom"; 

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

const expandedWidth = 250;
const collapsedWidth = 70;

const Sidebar: FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
    const location = useLocation();
    const navigationItems = [
        { id: "dashboard", text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
        { id: "client-engagement", text: "Client Engagement", icon: <BusinessIcon />, path: "/client-engagement" },
        { id: "user-management", text: "User Management", icon: <PeopleIcon />, path: "/user-management" },
        { id: "employee-management", text: "Employee Management", icon: <PersonIcon />, path: "/employee-management" },
        { id: "settings", text: "Settings", icon: <SettingsIcon />, path: "/settings" },
        { id: "rbac", text: "RBAC", icon: <AssessmentIcon />, path: "/rbac" },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isCollapsed ? collapsedWidth : expandedWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: isCollapsed ? collapsedWidth : expandedWidth,
                    transition: "width 0.3s",
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    border: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isCollapsed ? "center" : "flex-end",
                    p: 1,
                    marginBottom: "70px",
                }}
            >
                <IconButton
                    sx={{
                        position: "fixed",
                        left: isCollapsed ? "9px" : "205px",
                        top: "58px",
                        width: "35px",
                        height: "35px",
                        transition: "left 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                    onClick={toggleSidebar}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <List>
                {navigationItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <ListItem
                            key={item.id}
                            component={Link}
                            to={item.path}
                            sx={{
                                px: 1.5,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                color: isActive ? "primary.main" : "inherit",
                                "&:hover": { color: "primary.main" },
                            }}
                        >
                            <Tooltip title={isCollapsed ? item.text : ""} placement="right">
                                <ListItemIcon
                                    sx={{
                                        minWidth: 40,
                                        color: isActive ? "primary.main" : "inherit",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                            </Tooltip>
                            {!isCollapsed && <ListItemText primary={item.text} />}
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default Sidebar;
