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


const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `100%`,
                // ml: `${drawerWidth}px`,
                backgroundColor: "white",
                color: "#333",
                boxShadow: "none",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                transition: "all 0.3s",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ p: 2, width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" sx={{ maxwidth: '100%', fontWeight: 600, color: '#333' }}>
                        MARKET EDGE
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <IconButton size="large" sx={{ mr: 1 }}>
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer", px: 1, py: 0.5, borderRadius: 1, "&:hover": { backgroundColor: "#f5f5f5" }, whiteSpace: "nowrap" }}>
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
                        <Typography variant="body2" sx={{ mr: 0.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            John Doe
                        </Typography>
                        <ArrowDownIcon fontSize="small" />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;