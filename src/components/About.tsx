import { Box, Typography, Grid, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/DownloadRounded";
import CodeIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/CloudQueue";
import LayersIcon from "@mui/icons-material/Layers";
import { motion } from "framer-motion";
import { profile, highlights, stats } from "../data";
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
            <Typography variant="h4" sx={{ color: "#fff", mb: 0.5 }}>
              {profile.role}
            </Typography>
            <Typography
              sx={{
                color: "neon.cyan",
                fontFamily: '"JetBrains Mono", monospace',
                mb: 2,
              }}
            >
              {profile.specialty}
            </Typography>
            <Typography
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              {profile.about}
            </Typography>
            <Button
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                src={profile.photo}
                alt={`Photo de ${profile.name}`}
                sx={{
                  width: "calc(100% - 12px)",
                  height: "calc(100% - 12px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center 22%",
                  display: "block",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((s, i) => (
          <Grid key={s.label} size={{ xs: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ height: "100%" }}
            >
              <GlassCard sx={{ p: 2.5, textAlign: "center", height: "100%" }}>
                <Typography
                  sx={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", md: "1.9rem" },
                    background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", mt: 0.5 }}>
                  {s.label}
                </Typography>
              </GlassCard>
            </motion.div>
          </Grid>
        ))}
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
