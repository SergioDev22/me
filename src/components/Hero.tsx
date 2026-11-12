import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/DownloadRounded";
import { motion } from "framer-motion";
import { profile } from "../data";
import { NeonChip, gradientTextSx } from "./Shared";

const roles = ["Python", "React", "Odoo", "GCP", "Django"];

export function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 8 },
        pb: 8,
      }}
    >
      <Box
        sx={{ maxWidth: 1160, mx: "auto", px: { xs: 3, md: 5 }, width: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <NeonChip sx={{ mb: 3 }}>BIENVENUE DANS MON UNIVERS</NeonChip>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.1rem", sm: "3rem", md: "4.2rem" },
              lineHeight: 1.1,
              color: "#fff",
              mb: 2,
            }}
          >
            Bonjour, je suis
            <br />
            <Box
              component="span"
              sx={{
                ...gradientTextSx,
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              {profile.name}
            </Box>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              mb: 3,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
            }}
          >
            {profile.role} · basé à {profile.location}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 720,
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {profile.tagline}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ mb: 5, flexWrap: "wrap" }}
          >
            {roles.map((r) => (
              <Chip
                key={r}
                label={r}
                size="small"
                sx={{
                  bgcolor: "rgba(168,85,247,0.1)",
                  color: "neon.violet",
                  border: "1px solid rgba(168,85,247,0.35)",
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              />
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              href="#projects"
              endIcon={<ArrowOutwardIcon />}
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                color: "#05060f",
                fontWeight: 700,
                px: 3.5,
                py: 1.4,
                boxShadow: "0 0 30px rgba(34,232,255,0.35)",
                "&:hover": {
                  background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                  boxShadow: "0 0 40px rgba(168,85,247,0.55)",
                },
              }}
            >
              Voir mes réalisations
            </Button>
            <Button
              href="https://drive.google.com/file/d/17ypnoopXM_NN58hSUpKuDbvPobtCIqMC/view?usp=sharing"
              startIcon={<DownloadIcon />}
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(148,163,255,0.3)",
                color: "#fff",
                px: 3.5,
                py: 1.4,
                "&:hover": {
                  borderColor: "neon.cyan",
                  background: "rgba(34,232,255,0.06)",
                },
              }}
            >
              Télécharger mon CV
            </Button>
          </Stack>
        </motion.div>
      </Box>

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            width: 26,
            height: 42,
            borderRadius: 20,
            border: "2px solid rgba(148,163,255,0.35)",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 8,
              left: "50%",
              width: 4,
              height: 8,
              borderRadius: 4,
              background: "linear-gradient(180deg, #22e8ff, #a855f7)",
              transform: "translateX(-50%)",
              animation: "float 1.6s ease-in-out infinite",
            },
          }}
        />
      </Box>
    </Box>
  );
}
