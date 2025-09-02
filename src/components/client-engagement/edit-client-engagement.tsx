import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { X as XIcon } from "@phosphor-icons/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
export interface EditClientEngagementProps {
  open: boolean;
  close: () => void;
}

const schema = zod.object({
  organizationName: zod.string().min(1, { message: "Organization Name is required" }),
  organizationAddress1: zod.string().min(1, { message: "Organization Address is required" }),
  organizationAddress2: zod.string().optional(),
  country: zod.string().min(1, { message: "Country is required" }),
  state: zod.string().min(1, { message: "State is required" }),
  zipCode: zod.string().min(1, { message: "Zipcode is required" }),
  taxId: zod.string().min(1, { message: "TaxId is required" }),
  contactPerson: zod.string().min(1, { message: "Contact person is required" }),
  contactNo: zod.string().min(1, { message: "Contact Number is required" }),
  renewalDate: zod.string().min(1, { message: "Renewal Date is required" }),
  email: zod.string().email({ message: "Invalid email address" }),
});

export type EditClientValues = zod.infer<typeof schema>;

const fields: { label: string; name: keyof EditClientValues; required?: boolean }[] = [
  { label: "Organization Name", name: "organizationName", required: true },
  { label: "Organization Address 1", name: "organizationAddress1", required: true },
  { label: "Organization Address 2", name: "organizationAddress2" },
  { label: "Country", name: "country", required: true },
  { label: "State", name: "state", required: true },
  { label: "Zip Code", name: "zipCode", required: true },
  { label: "Tax ID", name: "taxId", required: true },
  { label: "Contact Person", name: "contactPerson", required: true },
  { label: "Contact Number", name: "contactNo", required: true },
  { label: "Renewal Date", name: "renewalDate", required: true },
  { label: "Email", name: "email", required: true },
];

const EditClientEngagement: React.FC<EditClientEngagementProps> = ({ open, close }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<EditClientValues>({
    resolver: zodResolver(schema),
    defaultValues: {} as EditClientValues,
  });

  const onSubmit = (data: EditClientValues) => {
    console.log("Form Submitted:", data);
    close();
  };

  return (
    <Modal open={open} onClose={close} aria-labelledby="edit-client-title" >
      <Container
      maxWidth="sm"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}
      >
        <Paper
          sx={{
            width: "100%",
            maxHeight: "90vh",
            borderRadius: 2,
            boxShadow: 6,
            outline: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box sx={{ p: 3, pb: 0, flexShrink: 0 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Edit Client</Typography>
              <Typography variant="body2" color="text.secondary">
                - TC002
              </Typography>
              <IconButton onClick={close}>
                <XIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Form */}
          <Box sx={{ flex: 1, overflow: "auto", px: 3, py: 2 }}>
            <form id="edit-client-form" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                {fields.map(({ label, name, required }) => (
                  <Grid  key={name}>
                    <Controller
                      name={name}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={
                            <>
                              {label}
                              {required && <span style={{ color: "red" }}> *</span>}
                            </>
                          }
                          error={!!errors[name]}
                          helperText={errors[name]?.message?.toString()}
                        />
                      )}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={3}>
                {fields.map(({ label, name, required }) => (
                  <Grid  key={name}>
                    <Controller
                      name={name}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label={
                            <>
                              {label}
                              {required && <span style={{ color: "red" }}> *</span>}
                            </>
                          }
                          error={!!errors[name]}
                          helperText={errors[name]?.message?.toString()}
                        />
                      )}
                    />
                  </Grid>
                ))}
              </Grid>
            </form>
          </Box>

          {/* Footer */}
          <Box sx={{ p: 3, pt: 2, flexShrink: 0, borderTop: 1, borderColor: "divider" }}>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={close} variant="outlined">
                Cancel
              </Button>
              <Button type="submit" form="edit-client-form" variant="contained" disabled={!isDirty}>
                Save
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Modal>
  );
};

export default EditClientEngagement;
