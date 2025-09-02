import { Box, Typography, Divider, Grid, Paper, Button } from "@mui/material";
import Main from "../Main/main";
import {
    Assessment as AssessmentIcon,
    People as PeopleIcon,
    PersonAdd as PersonAddIcon,
    PostAdd as PostAddIcon,
} from "@mui/icons-material";
import { ClientCards } from "../../global/cards";
import { HeaderTile } from "../../global/header-title";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import WarningIcon from "@mui/icons-material/Warning";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function Dashboard() {
    const dashboardContent = {
        recent_activity: [
            {
                id: null,
                event_type: "USER_CREATED",
                title: "New User Registration",
                subtitle: "Sarah Wilson",
                created_at: "2025-08-31T10:30:00Z",
                actor: { id: 45 },
                organization: null,
                meta: { source: "fallback", user_id: 45 },
            },
            {
                id: null,
                event_type: "ORG_RENEWED",
                title: "Client contract renewed",
                subtitle: "TechCorp Solutions renewed to 2026-12-31",
                created_at: "2025-08-30T16:20:00Z",
                actor: null,
                organization: { id: 1, name: "TechCorp Solutions" },
                meta: { source: "fallback", renewal_date: "2026-12-31" },
            },
            {
                id: null,
                event_type: "ORG_RENEWED",
                title: "Client contract renewed",
                subtitle: "TechCorp Solutions renewed to 2026-12-31",
                created_at: "2025-08-30T16:20:00Z",
                actor: null,
                organization: { id: 1, name: "TechCorp Solutions" },
                meta: { source: "fallback", renewal_date: "2026-12-31" },
            },
        ],
        upcoming_renewals: [
            { id: 2, organization_name: "StartupXYZ", subtitle: "TechCorp Solutions renewed to 2026-12-31", renewal_date: "2025-09-15", days_remaining: 15 },
            { id: 5, organization_name: "Enterprise Corp", subtitle: "TechCorp Solutions renewed to 2026-12-31", renewal_date: "2025-09-30", days_remaining: 30 },
        ],
    };
    const dashboardData = [
        { count: 5, text: "Active Employees", subheading: "+3% from last year", icon: <PersonIcon sx={{ color: "#1976d2" }} />},
        { count: 38, text: "Total Number of Clients", subheading: "+3% from last year", icon: <PersonIcon sx={{ color: "#1976d2" }} /> },
        { count: 5, text: "Active Client Users", subheading: "+3% from last year", icon: <PeopleIcon sx={{ color: "#5FC177" }} /> },
        { count: 2, text: "Renewal in 30 days", subheading: "5 urgent", icon: <CalendarTodayIcon sx = {{ color:"#FBA031"}} /> },
        { count: 3, text: "Renewal in 7 days", subheading: "3 critical", icon: <AccessTimeIcon sx={{ color: "#FC1904" }} /> },
    ]; 

    const recentActivity = dashboardContent.recent_activity;
    const upcomingRenewals = dashboardContent.upcoming_renewals;
    const heading = "Dashboard";
    const subHeading = "Welcome back! Here's what's happening with your organisation.";

    return (
        <Main>
            <HeaderTile title={heading} subtitle= {subHeading} />
            <Grid container spacing={2} mt={3}>
                {dashboardData?.map((data, index) => (
                    <Grid  key={index} size={{
                        xs : 12 / dashboardData?.length ,}
                    }>
                        <ClientCards count={data?.count} header={data?.text} subheading={data?.subheading} icon = {data?.icon}/>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, width: '100%' }}>
                {/* Recent Activity */}
                <Box sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    backgroundColor: 'white',
                    marginTop: 3
                    // flex: 1, border: '1px solid', borderRadius: '10px', p: 2,
                }} >
                    <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                        Recent Activity
                    </Typography>
                    <Box>
                        {recentActivity?.map((activity, index) => (
                            <Box
                                key={index}
                                sx={{
                                    m: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 1px 3px #E8ECF0',
                                    borderRadius: '8px',
                                    p: 1,
                                    bgcolor: '#E8ECF0'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <PeopleIcon />
                                    <Box ml={2}>
                                        <Typography variant="subtitle1" align="left">{activity?.title}</Typography>
                                        <Typography variant="body2" color="text.secondary" align="left">
                                            {activity?.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {new Date(activity?.created_at).toLocaleString()}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Upcoming Renewals */}
                <Box sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    backgroundColor: 'white',
                    marginTop: 3
                    // flex: 1, border: '1px solid', borderRadius: '10px', p: 2,
                }} >
                    <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                        Upcoming Renewals
                    </Typography>
                    {upcomingRenewals?.map((renewal, index) => (
                        <Box key={renewal.id} sx={{ mb: 1 }}>
                            <Box
                                key={index}
                                sx={{
                                    m: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 1px 3px #E8ECF0',
                                    border: '1px solid #CC3833',
                                    borderRadius: '8px',
                                    p: 1,
                                    // bgcolor: "#E6B7B5",
                                    bgcolor: "#FADBDB",
                                }}
                            >
                                <Box>
                                    <Typography variant="subtitle1" align="left">{renewal.organization_name}</Typography>
                                    <Typography variant="body2" color="text.secondary" align="left">
                                        {renewal.subtitle}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {renewal.days_remaining} days
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    backgroundColor: 'white',
                    marginTop: 3
                }}
            >
                <Typography
                    variant="h6"
                    align="left"
                    sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: '#1a1a1a',
                    }}
                >
                    Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, }}>
                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 11px)' },
                            minWidth: { xs: '100%', sm: '200px' },
                            p: 3,
                            textAlign: 'center',
                            cursor: 'pointer',
                            borderRadius: 2,
                            border: '1px solid #f0f0f0',
                            backgroundColor: 'rgb(210, 210, 210)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: ' #1976d2;',
                                color: '#f0f0f0',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(100, 76, 76, 0.1)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2,
                            }}
                        >
                            <PersonAddIcon  />
                        </Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                color: '#1a1a1a',
                            }}
                        >
                            Add New User
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 11px)' },
                            minWidth: { xs: '100%', sm: '200px' },
                            p: 3,
                            textAlign: 'center',
                            cursor: 'pointer',
                            borderRadius: 2,
                            border: '1px solid #f0f0f0',
                            backgroundColor: 'rgb(210, 210, 210)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: ' #1976d2;',
                                color: '#f0f0f0',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2,
                            }}
                        >
                            <PostAddIcon/>
                        </Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                color: '#1a1a1a',
                            }}
                        >
                            Create Client
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 11px)' },
                            minWidth: { xs: '100%', sm: '200px' },
                            p: 3,
                            textAlign: 'center',
                            cursor: 'pointer',
                            borderRadius: 2,
                            border: '1px solid #f0f0f0',
                            backgroundColor: 'rgb(210, 210, 210)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                // backgroundColor: '#f5f5f5',
                                backgroundColor:' #1976d2;',
                                color:'#f0f0f0',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2,
                            }}
                        >
                            <AssessmentIcon  />
                        </Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 600,
                                color: '#1a1a1a',
                            }}
                        >
                            View Reports
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Main>
    );
}