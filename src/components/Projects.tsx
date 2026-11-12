import { Box, Typography, Grid, Chip, Button, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import HourglassTopIcon from "@mui/icons-material/HourglassTopRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { projects } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

const statusMeta: Record<string, { icon: typeof LaunchIcon; color: string }> = {
  Démo: { icon: LaunchIcon, color: "#22e8ff" },
  Code: { icon: CodeIcon, color: "#a855f7" },
  "En cours": { icon: HourglassTopIcon, color: "#ff2fd0" },
};

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="portfolio"
        title="Réalisations & Contributions"
      />
      <Typography
        sx={{
          color: "text.secondary",
          textAlign: "center",
          maxWidth: 640,
          mx: "auto",
          mb: 6,
          mt: -3,
        }}
      >
        Voici quelques-uns de mes réalisations et contributions récentes,
        conçues avec attention aux détails, à la performance et à l'expérience
        utilisateur.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((p, i) => {
          const meta = statusMeta[p.status];
          const StatusIcon = meta.icon;
          return (
            <Grid key={p.name} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                style={{ height: "100%" }}
              >
                <GlassCard
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      {p.name}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      sx={{
                        alignItems: "center",
                        color: meta.color,
                        border: `1px solid ${meta.color}55`,
                        borderRadius: 999,
                        px: 1.2,
                        py: 0.3,
                        fontSize: "0.7rem",
                        fontFamily: '"JetBrains Mono", monospace',
                      }}
                    >
                      <StatusIcon
                        sx={{
                          fontSize: 14,
                          cursor: p.url ? "pointer" : "default",
                        }}
                        onClick={() => window.open(p.url, "_blank")}
                      />
                      <span>{p.status}</span>
                    </Stack>
                  </Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      mb: 2.5,
                      flexGrow: 1,
                    }}
                  >
                    {p.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    {p.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(34,232,255,0.08)",
                          color: "neon.cyan",
                          border: "1px solid rgba(34,232,255,0.25)",
                        }}
                      />
                    ))}
                  </Stack>
                </GlassCard>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Button
          href="https://github.com/SergioDev22"
          startIcon={<GitHubIcon />}
          variant="outlined"
          size="large"
          sx={{
            borderColor: "rgba(148,163,255,0.3)",
            color: "#fff",
            px: 4,
            "&:hover": {
              borderColor: "neon.cyan",
              background: "rgba(34,232,255,0.06)",
            },
          }}
        >
          Voir mon GitHub
        </Button>
      </Box>
    </Section>
  );
}
