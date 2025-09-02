'use client'

import React, { useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Card, Divider, Grid, TablePagination } from "@mui/material";
import { ClientCards } from "../../global/cards";
import { ClientEngagementListTable } from "./client-table";



interface MenuItemClientPageProps {
    name?: string;
    sku?: string;
};



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

export function MenuItemClient({ name, sku }: MenuItemClientPageProps): React.JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const clientData = [
        { count: 38, text: "All time Clients" },
        { count: 2, text: "Inactive Clients" },
        { count: 3, text: "Total Users" },
        { count: 5, text: "Active Projects" },
    ];

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

    // useEffect(() => {
    //     setHeaderTitle(t("menuItem:menu_items"));
    //     if (err) {
    //         toast.error('Oops something went wrong...!');
    //     }
    //     if (menuItem) {
    //         const index = menuDetails?.findIndex(item => item?.id === menuItem?.id);
    //         if (index !== undefined && index >= 0) {
    //             menuDetails?.splice(index, 1, menuItem);
    //         }
    //     }
    // }, [err, menuItem, menuDetails]);

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
                                    <ClientCards count={data?.count} text={data?.text} />
                                </Grid>
                            ))
                        }
                    </Grid>


                    <Card>
                        <Divider />
                        <Box>

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
