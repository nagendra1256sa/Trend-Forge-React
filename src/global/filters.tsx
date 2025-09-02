import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

interface GlobalFiltersProps {
  search: string;
  onSearch: (value: string) => void;
  searchPlaceholder?: string;

  organization: string;
  organizations: string[];
  onOrgChange: (value: string) => void;

  status: string;
  statuses: string[];
  onStatusChange: (value: string) => void;

  exportType: string;
  exportOptions: string[];
  onExport: (value: string) => void;
}

const GlobalFilters: React.FC<GlobalFiltersProps> = ({
  search,
  onSearch,
  searchPlaceholder = "Search...",
  organization,
  organizations,
  onOrgChange,
  status,
  statuses,
  onStatusChange,
  exportType,
  exportOptions,
  onExport,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        mb: 2,
        flexWrap: "wrap",
      }}
    >
      <TextField
        placeholder={searchPlaceholder}
        size="small"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        sx={{ minWidth: 250 }}
      />

      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel>Organizations</InputLabel>
        <Select
          value={organization}
          label="Organizations"
          onChange={(e) => onOrgChange(e.target.value)}
        >
          {organizations.map((org) => (
            <MenuItem key={org} value={org}>
              {org}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => onStatusChange(e.target.value)}
        >
          {statuses.map((st) => (
            <MenuItem key={st} value={st}>
              {st}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>Export</InputLabel>
        <Select
          value={exportType}
          label="Export"
          onChange={(e) => onExport(e.target.value)}
        >
          {exportOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GlobalFilters;
