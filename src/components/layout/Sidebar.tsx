// import {
//     Drawer,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Box,
//     Typography,
// } from '@mui/material';
// import {
//     Dashboard as DashboardIcon,
//     People as PeopleIcon,
//     Person as PersonIcon,
//     Business as BusinessIcon,
//     Settings as SettingsIcon,
//     Assessment as AssessmentIcon,
// } from '@mui/icons-material';

// const drawerWidth = 250;

// export default function Sidebar() {
//     const navigationItems = [
//         { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
//         { id: 'client-engagement', text: 'Client Engagement', icon: <BusinessIcon /> },
//         { id: 'user-management', text: 'User Management', icon: <PeopleIcon /> },
//         { id: 'employee-management', text: 'Employee Management', icon: <PersonIcon /> },
//         { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
//         { id: 'rbac', text: 'RBAC', icon: <AssessmentIcon /> },
//     ];

//     return (
//         <Drawer
//             variant="permanent"
//             sx={{
//                 width: drawerWidth,
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': {
//                     width: drawerWidth,
//                     backgroundColor: 'white',
//                     border: 'none',
//                     boxShadow: 'none',
//                     overflowX: 'hidden'
//                 },
//             }}
//         >
//             <Box sx={{ p: 2, width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <Typography variant="h6" sx={{ maxwidth: '100%', fontWeight: 600, color: '#333' }}>
//                     MARKET EDGE
//                 </Typography>
//             </Box>
//             <Box
//                 sx={{
//                     width: '100%',
//                 }}
//             >
//                 <List sx={{ pt: 1, width: '100%', }}>
//                     {navigationItems.map((item) => (
//                         <ListItem
//                             key={item.id}
//                             sx={{
//                                 mx: 1,
//                                 borderRadius: 1,
//                                 mb: 0.5,
//                                 cursor: 'pointer',
//                                 border: 'none',
//                             }}
//                         >
//                             <ListItemIcon
//                                 sx={{
//                                     minWidth: 40,
//                                 }}
//                             >
//                                 {item.icon}
//                             </ListItemIcon>
//                             <ListItemText
//                                 primary={item.text}
//                                 sx={{
//                                     '& .MuiTypography-root': {
//                                         fontSize: '14px',
//                                     },
//                                 }}
//                             />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Box>
//         </Drawer>
//     );
// };
// Sidebar.tsx
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
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { List as ListIcon } from "@phosphor-icons/react/dist/ssr/List";
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    Settings as SettingsIcon,
    Assessment as AssessmentIcon,
} from '@mui/icons-material';
import { FC } from "react";

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void
}

const expandedWidth = 250;
const collapsedWidth = 70;

const Sidebar: FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
        const navigationItems = [
            { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
            { id: 'client-engagement', text: 'Client Engagement', icon: <BusinessIcon /> },
            { id: 'user-management', text: 'User Management', icon: <PeopleIcon /> },
            { id: 'employee-management', text: 'Employee Management', icon: <PersonIcon /> },
            { id: 'settings', text: 'Settings', icon: <SettingsIcon /> },
            { id: 'rbac', text: 'RBAC', icon: <AssessmentIcon /> },
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
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isCollapsed ? "center" : "flex-end",
                    p: 1,
                }}
            >
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
                </IconButton> */}
                <IconButton
                    sx={{
                        // position: "fixed",
                        // left: isCollapsed ? "15px" : "236px",
                        // top: "58px",
                        // zIndex: 1200,
                        // width: "35px",
                        // height: "35px",
                        // transition: "left 0.3s ease",
                        // '&:hover': {
                        //     backgroundColor: "#f5f5f5",
                        // },
                    }}
                    onClick={toggleSidebar}
                >
                    <ListIcon />
                </IconButton>
            </Box>
            <List>
                {navigationItems.map((item) => (
                    <ListItem key={item.id} sx={{ px: 1.5, cursor: "pointer" }}>
                        <Tooltip title={isCollapsed ? item.text : ""} placement="right">
                            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                        </Tooltip>
                        {!isCollapsed && <ListItemText primary={item.text} />}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
  
  