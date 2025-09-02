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
import EditClientEngagement from "./edit-client-engagement";
import { Actions } from "../../constants/client-engagement.constants";
import { Organization } from "../../models/client-engagement";

const ActionMenu: React.FC<any> = ({ row } ) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState({
    name : "",
    status : false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenDialog = (name: string, status : boolean) => {
     setOpenDialog({
      name: name,
      status: status
     })
  };

  return (
    <><Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
        <MenuItem onClick={() => { handleOpenDialog(Actions.VIEW, true); handleClose(); } }>View</MenuItem>
        <MenuItem onClick={() => { handleOpenDialog(Actions.EDIT, true); handleClose(); } }>Edit</MenuItem>
        <MenuItem onClick={() => { handleOpenDialog(Actions.VIEW, true); handleClose(); } }>Unassign Consultant</MenuItem>
      </Menu>
    </Box>
     {
       openDialog?.name ===  Actions.EDIT && <EditClientEngagement open={openDialog?.status} organizationDetails={row} close={() => setOpenDialog({
        name: "",
        status : false
       })}/>
     }
    </>
  );
};

const columns = [
  {
    name: "Client ID",
    width: "auto",
    formatter: (row) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.clientId ?? "-"}</Typography>
    ),
  },
  {
    name: "Organization Name",
    width: "auto",
    formatter: (row) => (
      <Typography sx={{ whiteSpace: "normal" }}>{row?.name ?? "-"}</Typography>
    ),
  },
  {
    name: "Contact Person",
    width: "auto",
    formatter: (row) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.contactPerson ?? "-"}</Typography>
    ),
  },
  {
    name: "Assigned Consultant",
    width: "auto",
    formatter: (row) => (
      <Typography sx={{ whiteSpace: "nowrap" }}>{row?.contactPerson ?? "-"}</Typography>
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
      <ActionMenu row={row} />
    ),
  },
] satisfies ColumnDef<Organization>[];

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
