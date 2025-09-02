'use client'

import React, { useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Card, Divider, Grid, TablePagination } from "@mui/material";
import { ClientCards } from "../../global/cards";
import { ClientEngagementListTable } from "./client-table";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";


import GlobalFilters from "../../global/filters";
import { getClientEngagements, getWidgetsList } from "../../services/client-engagement";
import { ClientStats, Organization } from "../../models/client-engagement";


// const applyFilters = (rows: MenuItem[], { name, sku }: MenuItemFilters): MenuItem[] => {
//     return rows.filter((item) => {
//         if (name && !item.label?.toLowerCase().includes(name.toLowerCase())) {
//             return false;
//         }
//         if (sku && !item.sku?.toLowerCase().includes(sku.toLowerCase())) {
//             return false;
//         }
//         return true;
//     });
// }

export function ClientList(): React.JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [search, setSearch] = useState("");
    const [organization, setOrganization] = useState("");
    const [status, setStatus] = useState("");
    const [exportType, setExportType] = useState("");
    const [organizations, setOrganizations] = useState<Organization[]>([])
    const [clientStats, setClientStats] = useState<ClientStats>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getClientStats();
        getOrgansations();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (search || organization || status) {
                getOrgansations();
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search, organization, status]);



    const getOrgansations = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await getClientEngagements(search, organization, status);
            if (response?.success) {
                setOrganizations(response?.organizations ? response?.organizations : []);
            }
            else {
                setOrganizations([]);
            }
        } catch (error) {
            setOrganizations([]);
            setError('Oops something went wrong...!');
        } finally {
            setLoading(false);
        }
    };

    const clientData = [
        {
            count: clientStats?.allTimeClients ?? 0, text: "TotalClients", subheading: 'All-time clients', icon: <PersonIcon sx={{ color: "#1976d2" }} />
        },
        { count: clientStats?.inactiveClients ?? 0, text: "Inactive Clients", subheading: 'Inactive clients', icon: <PersonIcon sx={{ color: "#FC1904" }} /> },
        {
            count: clientStats?.totalUsers ?? 0, text: "No of Users", subheading: 'Total users', icon: <PersonIcon sx={{ color: "#5FC177" }} />
        },
        { count: clientStats?.activeProjects ?? 0, text: "No ofProjects", subheading: 'Active projects', icon: <BusinessIcon sx={{ color: "#6138DC" }} /> },
    ];

    const getClientStats = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await getWidgetsList();
            if (response?.success) {
                setClientStats(response?.clientStats)
            }
            else {
                setOrganizations([]);
            }
        } catch (error) {
            setOrganizations([]);
            setError('Oops something went wrong...!');
        } finally {
            setLoading(false);
        }
    }

    const data = [
        {
            "clientId": "TC001",
            "initials": "TS",
            "organization": "Innovatech Dynamics",
            "contactPerson": "Alice Johnson",
            "assignedTo": "Alice Johnson",
            "status": "Active",
            "action": "Deactivate"
        },
        {
            "clientId": "TC002",
            "initials": "TS",
            "organization": "Future Solutions",
            "contactPerson": "Bob Smith",
            "assignedTo": null,
            "status": "Inactive",
            "action": "Deactivate"
        },
        {
            "clientId": "TC003",
            "initials": "TS",
            "organization": "GreenTech Industries",
            "contactPerson": "Cathy Brown",
            "assignedTo": "Cathy Brown",
            "status": "Active",
            "action": "Deactivate"
        },
        {
            "clientId": "TC004",
            "initials": "TS",
            "organization": "NextGen Innovations",
            "contactPerson": "David Lee",
            "assignedTo": null,
            "status": "Inactive",
            "action": "Deactivate"
        },
        {
            "clientId": "TC005",
            "initials": "TS",
            "organization": "Quantum Computing Co.",
            "contactPerson": "Eva Green",
            "assignedTo": null,
            "status": "Active",
            "action": "Deactivate"
        }
    ]

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(Number.parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = useMemo(() => {
        if (!data) return [];
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return data.slice(startIndex, endIndex);
    }, [page, rowsPerPage]);


    return (
        <>
            {/* {loading && <FallbackLoader />} */}
            <Box
                sx={{
                    maxWidth: "var(--Content-maxWidth)",
                    m: "var(--Content-margin)",
                    p: "var(--Content-padding)",
                    py: 3,
                    width: "var(--Content-width)",
                }}
            >
                <Stack spacing={4}>
                    <Grid container spacing={4}>

                        {

                            clientData?.map((data, index) => (
                                <Grid
                                    key={index}
                                    size={{
                                        md: 3,
                                        xs: 12,
                                    }}
                                >
                                    <ClientCards count={data?.count} header={data?.text} subheading={data?.subheading} icon={data?.icon} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Card>
                        <Divider />
                        <Box>
                            <Box sx={{
                                p: 2, display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 2,
                            }}>
                                <GlobalFilters
                                    search={search}
                                    onSearch={setSearch}
                                    organization={organization}
                                    organizations={[
                                        "Innovatech Dynamics",
                                        "Future Solutions",
                                        "GreenTech Industries",
                                        "NextGen Innovations",
                                        "Quantum Computing Co.",
                                    ]}
                                    onOrgChange={setOrganization}
                                    status={status}
                                    statuses={["Active", "Inactive"]}
                                    onStatusChange={setStatus}
                                    exportType={exportType}
                                    exportOptions={["CSV", "Excel"]}
                                    onExport={setExportType}
                                    searchPlaceholder="Search by client name/ ID"
                                />
                            </Box>
                            <ClientEngagementListTable rows={paginatedData} />
                            <TablePagination
                                component="div"
                                count={data?.length || 0}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleRowsPerPageChange}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                rowsPerPageOptions={[25, 50, 100]}
                            />
                        </Box>
                        <Divider />
                    </Card>
                </Stack>
            </Box>
        </>
    );
}
