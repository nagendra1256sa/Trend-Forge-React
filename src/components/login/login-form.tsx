
import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeSimple, EyeIcon, EyeSlashIcon, LockSimple } from "@phosphor-icons/react";
import { useAuthContext } from "../../contexts/auth-context";
import { loginApi } from "../../services/login.service";
import { useNavigate } from "react-router-dom";



// ✅ Validation schema
const schema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email(),
  password: zod.string().min(1, { message: "Password is required" }),
});

export type Values = zod.infer<typeof schema>;

export default function LoginPage() {
  const auth = useAuthContext();
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  // Clear auth state on load
  useEffect(() => {
    auth.login(null);
  }, []);

  // ✅ Submit handler
  const onSubmit = useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const { success, loginData, message } = await loginApi(values);

      if (message) {
        setError("root", { type: "server", message });
        setIsPending(false);
        return;
      }
      if (success) {
        setIsPending(false);
        auth.login(loginData || null);
        navigate("/client-engagement");
      }
    },
    []
  );

  return (
    <>
      {/* {isPending && <FallbackLoader />} */}
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Left section - form */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 4,
          }}
        >
          <Container maxWidth="sm">
            <Box sx={{ mb: 4 }}>
              <img src="/logo.png" alt="MarketEdge" width={180} />
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>
            <Typography color="text.secondary" mb={3}>
              Enter your email and password to access your account
            </Typography>

            {/* ✅ Login Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                {/* Email */}
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormControl fullWidth error={Boolean(errors.email)}>
                      <InputLabel>Email</InputLabel>
                      <OutlinedInput
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                        value={field.value || ""}
                        startAdornment={
                          <InputAdornment position="start">
                            <EnvelopeSimple size={20} />
                          </InputAdornment>
                        }
                      />
                      {errors.email && (
                        <FormHelperText>{errors.email.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />

                {/* Password */}
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormControl fullWidth error={Boolean(errors.password)}>
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        {...field}
                        placeholder="Enter your password"
                        value={field.value || ""}
                        type={showPassword ? "text" : "password"}
                        startAdornment={
                          <InputAdornment position="start">
                            <LockSimple size={20} />
                          </InputAdornment>
                        }
                        endAdornment={
                          showPassword ? (
                            <EyeIcon
                              cursor="pointer"
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <EyeSlashIcon
                              cursor="pointer"
                              onClick={() => setShowPassword(true)}
                            />
                          )
                        }
                      />
                      {errors.password && (
                        <FormHelperText>
                          {errors.password.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />

                {/* Remember + Forgot */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Checkbox size="small" />
                    <Typography variant="body2">Remember Me</Typography>
                  </Box>
                  <Link href="#" underline="hover" variant="body2">
                    Forgot Your Password?
                  </Link>
                </Box>

                {/* Submit */}
                <Button
                  disabled={isPending}
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ bgcolor: "#1F51FF" }}
                >
                  Log In
                </Button>
              </Stack>
            </form>
          </Container>
        </Box>

        {/* Right section - banner */}
        <Box
          sx={{
            position: "relative",
            width: "50%",
            color: "white",
            px: 6,
            backgroundImage: "url('/login-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            py: 4,
          }}
        >
          <Box mt={18} width="70%">
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Effortlessly manage your team and operations.
            </Typography>
            <Typography variant="body1" mb={4} width="70%">
              Log in to access your dashboard and manage your team.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Copyright © 2025 MarketEdge LTD.
            </Typography>

            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontSize: "12px", opacity: 0.7 }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
