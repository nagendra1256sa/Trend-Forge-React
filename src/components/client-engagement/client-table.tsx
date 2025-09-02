import React, {useRef, useState } from "react";
import { Box, IconButton, Menu, Typography, MenuItem } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { ColumnDef, DataTable } from "../../global/table";

const ActionMenu: React.FC<any> = ({ isAssigned }) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-label="more"
        onClick={handleOpen}
        size="small"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
        open={open}
        slotProps={{ paper: { sx: { width: "200px" } } }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>View</MenuItem>
      </Menu>
        <Menu
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
        open={open}
        slotProps={{ paper: { sx: { width: "200px" } } }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Edit</MenuItem>
      </Menu>
        <Menu
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
        open={open}
        slotProps={{ paper: { sx: { width: "200px" } } }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Unassign Consultant</MenuItem>
      </Menu>
    </>
  );
};

const columns = [
  {
    name: "Client Id",
    width: "auto",
    formatter: (row: any): React.JSX.Element => (
      <Typography sx={{ whiteSpace: "nowrap", textAlign: "left" }} variant="inherit">
        {row?.clientId ?? "-"}
      </Typography>
    ),
  },
  {
    name: "Organization Name",
    width: "auto",
    formatter: (row: any): React.JSX.Element => (
      <Typography sx={{ whiteSpace: "normal", textAlign: "left" }} variant="inherit">
        {row?.organization ?? "-"}
      </Typography>
    ),
  },
  {
    name: "Contact Person",
    width: "auto",
    formatter: (row: any): React.JSX.Element => (
      <Typography sx={{ whiteSpace: "nowrap" }} variant="inherit">
        {row?.contactPerson ?? "-"}
      </Typography>
    ),
  },
  {
    name: "Assigned Consultant",
    width: "auto",
    formatter: (row: any): React.JSX.Element => (
      <Typography sx={{ whiteSpace: "nowrap" }} variant="inherit">
        {row?.assignedTo ?? "-"}
      </Typography>
    ),
  },
  {
    name: "Status",
    width: "auto",
    formatter: (row: any): React.JSX.Element => (
      <Typography sx={{ whiteSpace: "nowrap" }} variant="inherit">
        {row?.status ?? "-"}
      </Typography>
    ),
  },
  {
    name: "Actions",
    width: "auto",
    columnName: "actions",
    formatter: (row: any): React.JSX.Element => (
      <ActionMenu row={row} isAssigned={!!row?.assignedTo} />
    ),
  },
] satisfies ColumnDef<any>[];

export function ClientEngagementListTable({
  rows,
}: any): React.JSX.Element {



  const handleRowClick = (_event: React.MouseEvent) => {
    // setSelectedMenuItem(row?.id);
    // setIsModalOpen(true);
  };




  return (
    <>
      <Box sx={{ height: "calc(100vh - 400px)", overflow: "auto" }}>
        <DataTable
          columns={columns}
          rows={rows}
          hover={true}
          onClick={handleRowClick}
          size="small"
          stickyHeader
        />
      </Box>

      {rows?.length === 0 ? (
        <Box sx={{ p: 3 }}>
          <Typography
            color="text.secondary"
            sx={{ textAlign: "center" }}
            variant="body2"
          >
            No records found
          </Typography>
        </Box>
      ) : null}
    </>
  );
}
