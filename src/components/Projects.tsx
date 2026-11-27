import { useState } from "react";
import { Box, Typography, Grid, Chip, Button, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import HourglassTopIcon from "@mui/icons-material/HourglassTopRounded";
import LockIcon from "@mui/icons-material/LockRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { projects, profile, type Project } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

const statusMeta: Record<
  Project["status"],
  { icon: typeof LaunchIcon; color: string; label: string }
> = {
  Démo: { icon: LaunchIcon, color: "#22e8ff", label: "Voir le site" },
  Code: { icon: CodeIcon, color: "#a855f7", label: "Voir le code" },
  "En cours": { icon: HourglassTopIcon, color: "#ff2fd0", label: "En cours" },
  Privé: { icon: LockIcon, color: "#94a3ff", label: "Projet client" },
};

/** Vignette générée quand aucune capture n'est disponible. */
function ProjectPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 30% 20%, rgba(34,232,255,0.25), transparent 55%), radial-gradient(circle at 75% 80%, rgba(168,85,247,0.3), transparent 55%), #0a0c1d",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148,163,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        },
      }}
    >
      <Typography
        sx={{
          position: "relative",
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 800,
          fontSize: "3.2rem",
          letterSpacing: 4,
          background: "linear-gradient(90deg, #22e8ff, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 40px rgba(34,232,255,0.25)",
        }}
      >
        {initials}
      </Typography>
    </Box>
  );
}

function ProjectCover({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "16 / 9",
        mx: -3.5,
        mt: -3.5,
        mb: 2.5,
        overflow: "hidden",
        borderBottom: "1px solid rgba(148,163,255,0.14)",
        "& img": { transition: "transform 0.6s ease" },
        ".project-card:hover & img": { transform: "scale(1.05)" },
      }}
    >
      {showImage ? (
        <Box
          component="img"
          src={project.image}
          alt={`Aperçu du projet ${project.name}`}
          loading="lazy"
          onError={() => setFailed(true)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      ) : (
        <ProjectPlaceholder name={project.name} />
      )}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, transparent 55%, rgba(10,12,29,0.85) 100%)",
        }}
      />
    </Box>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="portfolio" title="Réalisations & Contributions" />
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
        Plateformes métier, SaaS, applications pour mes clients et projets
        open source : une sélection de ce que j'ai conçu et mis en production.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((p, i) => {
          const meta = statusMeta[p.status];
          const StatusIcon = meta.icon;
          const clickable = Boolean(p.url);
          return (
            <Grid key={p.name} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                style={{ height: "100%" }}
              >
                <GlassCard
                  className="project-card"
                  sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <ProjectCover project={p} />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 2,
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                      {p.name}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.5}
                      component={clickable ? "a" : "span"}
                      {...(clickable
                        ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      sx={{
                        flexShrink: 0,
                        alignItems: "center",
                        color: meta.color,
                        border: `1px solid ${meta.color}55`,
                        borderRadius: 999,
                        px: 1.2,
                        py: 0.3,
                        fontSize: "0.7rem",
                        fontFamily: '"JetBrains Mono", monospace',
                        textDecoration: "none",
                        transition: "background 0.2s ease",
                        ...(clickable && {
                          "&:hover": { background: `${meta.color}1a` },
                        }),
                      }}
                    >
                      <StatusIcon sx={{ fontSize: 14 }} />
                      <span>{meta.label}</span>
                    </Stack>
                  </Box>

                  {p.context && (
                    <Typography
                      sx={{
                        color: "neon.violet",
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: "0.75rem",
                        mb: 1.5,
                      }}
                    >
                      {p.context}
                    </Typography>
                  )}

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {p.description}
                  </Typography>

                  {p.metrics && (
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      sx={{ flexWrap: "wrap", mb: 2 }}
                    >
                      {p.metrics.map((m) => (
                        <Box
                          key={m}
                          sx={{
                            px: 1.2,
                            py: 0.4,
                            borderRadius: 1.5,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#fff",
                            background:
                              "linear-gradient(90deg, rgba(34,232,255,0.14), rgba(168,85,247,0.14))",
                            border: "1px solid rgba(168,85,247,0.3)",
                          }}
                        >
                          {m}
                        </Box>
                      ))}
                    </Stack>
                  )}

                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
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
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
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
