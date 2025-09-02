import React, { useRef, useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { ColumnDef, DataTable } from "../../global/table";

const ActionMenu: React.FC<any> = ({ row, isAssigned }) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Button
        variant="outlined"
        color="error"
        size="small"
        sx={{ textTransform: "none" }}
      >
        Deactivate
      </Button>

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
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{ paper: { sx: { width: "200px" } } }}
      >
        <MenuItem onClick={handleClose}>View</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        {isAssigned && (
          <MenuItem onClick={handleClose}>Unassign Consultant</MenuItem>
        )}
      </Menu>
    </Box>
  );
};

const columns = [
  {
    name: "Client ID",
    width: "auto",
    formatter: (row: any) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.clientId ?? "-"}</Typography>
    ),
  },
  {
    name: "Organization Name",
    width: "auto",
    formatter: (row: any) => (
      <Typography sx={{ whiteSpace: "normal" }}>{row?.organization ?? "-"}</Typography>
    ),
  },
  {
    name: "Contact Person",
    width: "auto",
    formatter: (row: any) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.contactPerson ?? "-"}</Typography>
    ),
  },
  {
    name: "Assigned Consultant",
    width: "auto",
    formatter: (row: any) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.assignedTo ?? "-"}</Typography>
    ),
  },
  {
    name: "Status",
    width: "auto",
    formatter: (row: any) => (
      <Chip
        label={row?.status ?? "-"}
        size="small"
        color={row?.status === "Active" ? "success" : "default"}
        sx={{
          fontWeight: 500,
          textTransform: "capitalize",
          bgcolor: row?.status === "Inactive" ? "grey.400" : undefined,
        }}
      />
    ),
  },
  {
    name: "Actions",
    width: "auto",
    formatter: (row: any) => (
      <ActionMenu row={row} isAssigned={!!row?.assignedTo} />
    ),
  },
] satisfies ColumnDef<any>[];

export function ClientEngagementListTable({ rows }: any) {
  return (
    <>
      <Box sx={{ height: "calc(100vh - 400px)", overflow: "auto" }}>
        <DataTable
          columns={columns}
          rows={rows}
          hover
          size="small"
          stickyHeader
        />
      </Box>

      {rows?.length === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography color="text.secondary" sx={{ textAlign: "center" }} variant="body2">
            No records found
          </Typography>
        </Box>
      )}
    </>
  );
}
