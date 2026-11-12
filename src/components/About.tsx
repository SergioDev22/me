import { Box, Typography, Grid, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/DownloadRounded";
import CodeIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/CloudQueue";
import LayersIcon from "@mui/icons-material/Layers";
import { motion } from "framer-motion";
import { profile, highlights } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

const icons = [CodeIcon, CloudIcon, LayersIcon];

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="whoami" title="À propos de moi" />

      <Grid container spacing={5} sx={{ alignItems: "center", mb: 7 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ color: "#fff", mb: 2 }}>
              {profile.role}
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              {profile.about}
            </Typography>
            <Button
              href="https://drive.google.com/file/d/17ypnoopXM_NN58hSUpKuDbvPobtCIqMC/view?usp=sharing"
              startIcon={<DownloadIcon />}
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                color: "#05060f",
                fontWeight: 700,
                px: 3,
              }}
            >
              Télécharger mon CV
            </Button>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                width: { xs: 220, md: 260 },
                height: { xs: 220, md: 260 },
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(34,232,255,0.15), rgba(168,85,247,0.15))",
                border: "1px solid rgba(34,232,255,0.3)",
                boxShadow: "0 0 60px rgba(34,232,255,0.15)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "50%",
                  border: "1px dashed rgba(168,85,247,0.4)",
                  animation: "float 8s linear infinite",
                }}
              />
              <Box
                component="img"
                src="https://avatars.githubusercontent.com/u/85986819?v=4"
                alt="Photo de profil"
                sx={{
                  width: "calc(100% - 12px)",
                  height: "calc(100% - 12px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {highlights.map((h, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Grid key={h.title} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ height: "100%" }}
              >
                <GlassCard sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      background:
                        "linear-gradient(135deg, rgba(34,232,255,0.15), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(34,232,255,0.3)",
                    }}
                  >
                    <Icon sx={{ color: "neon.cyan" }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                    {h.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {h.description}
                  </Typography>
                </GlassCard>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
