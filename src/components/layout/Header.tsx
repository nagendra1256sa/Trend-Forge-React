// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Badge,
//     Avatar,
//     Box,
// } from '@mui/material';
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Sidebar from './Sidebar';

// const drawerWidth = 240;

// export default function Header() {

//     return (
//         <>
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: `calc(100% - ${drawerWidth}px)`,
//                     ml: `${drawerWidth}px`,
//                     backgroundColor: 'white',
//                     color: '#333',
//                     boxShadow: 'none',
//                     zIndex: (theme) => theme.zIndex.drawer + 1,
//                 }}
//             >
//                 <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>


//                     <IconButton
//                         size="large"
//                         sx={{ mr: 1 }}
//                     >
//                         <Badge badgeContent={1} color="error">
//                             <NotificationsIcon />
//                         </Badge>
//                     </IconButton>

//                     <Box
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             cursor: 'pointer',
//                             px: 1,
//                             py: 0.5,
//                             borderRadius: 1,
//                             '&:hover': {
//                                 backgroundColor: '#f5f5f5',
//                             },
//                         }}
//                     >
//                         <Avatar
//                             sx={{
//                                 width: 32,
//                                 height: 32,
//                                 mr: 1,
//                                 backgroundColor: 'white',
//                                 color: 'black',
//                                 fontSize: '14px',
//                             }}
//                         >

//                         </Avatar>
//                         <Typography variant="body2" sx={{ mr: 0.5 }}>
//                             John Doe
//                         </Typography>
//                         <ArrowDownIcon fontSize="small" />
//                     </Box>

//                 </Toolbar>
//             </AppBar>
//             <Sidebar />
//         </>
//     );
// };

import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Avatar,
    Typography,
    Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FC } from "react";

// interface HeaderProps {
//     drawerWidth: number;
// }

const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                // width: `calc(100% - ${drawerWidth}px)`,
                // ml: `${drawerWidth}px`,
                backgroundColor: "white",
                color: "#333",
                boxShadow: "none",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                transition: "all 0.3s",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton size="large" sx={{ mr: 1 }}>
                    <Badge badgeContent={1} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                >
                    <Avatar
                        sx={{
                            width: 32,
                            height: 32,
                            mr: 1,
                            backgroundColor: "white",
                            color: "black",
                            fontSize: "14px",
                        }}
                    />
                    <Typography variant="body2" sx={{ mr: 0.5 }}>
                        John Doe
                    </Typography>
                    <ArrowDownIcon fontSize="small" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
  