import { Box, Typography, Divider } from "@mui/material";
import Main from "../Main/main";

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
        ],
        upcoming_renewals: [
            { id: 2, organization_name: "StartupXYZ", renewal_date: "2025-09-15", days_remaining: 15 },
            { id: 5, organization_name: "Enterprise Corp", renewal_date: "2025-09-30", days_remaining: 30 },
        ],
    };

    const recentActivity = dashboardContent.recent_activity;
    const upcomingRenewals = dashboardContent.upcoming_renewals;

    return (
        <Main>
            <Box sx={{display:'flex',flexDirection:'row', p: 3 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Recent Activity
                    </Typography>
                    {recentActivity?.map((activity, index) => (
                        <Box key={index} sx={{ mb: 1 }}>
                            <Typography variant="subtitle1">{activity.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {activity.subtitle}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {new Date(activity.created_at).toLocaleString()}
                            </Typography>
                            {index < recentActivity.length - 1 && <Divider sx={{ my: 1 }} />}
                        </Box>
                    ))}
                </Box>

                {/* Upcoming Renewals */}
                <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Upcoming Renewals
                    </Typography>
                    {upcomingRenewals?.map((renewal) => (
                        <Box key={renewal.id} sx={{ mb: 1 }}>
                            <Typography variant="subtitle1">{renewal.organization_name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Renewal Date: {new Date(renewal.renewal_date).toLocaleDateString()} - Days Remaining: {renewal.days_remaining}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Main>
    );
}
