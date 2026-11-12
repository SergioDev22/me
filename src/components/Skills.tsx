import { useMemo, useState } from "react";
import { Box, Typography, Tabs, Tab, Grid, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { skills, type SkillCategory } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

const CATEGORIES: ("Toutes" | SkillCategory)[] = [
  "Toutes",
  "Front-end",
  "Back-end",
  "Data & bases de données",
  "Cloud & DevOps",
];

export function Skills() {
  const [tab, setTab] = useState(0);
  const active = CATEGORIES[tab];

  const filtered = useMemo(
    () => (active === "Toutes" ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <Section id="skills">
      <SectionHeading eyebrow="stack" title="Mes Compétences" />

      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          slotProps={{
            indicator: {
              sx: {
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                boxShadow: "0 0 12px #22e8ff",
              },
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "text.secondary",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8rem",
              textTransform: "none",
              minHeight: 40,
            },
            "& .Mui-selected": { color: "#fff !important" },
          }}
        >
          {CATEGORIES.map((c) => (
            <Tab key={c} label={c} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={2.5}>
        {filtered.map((skill, i) => (
          <Grid key={skill.name} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <GlassCard sx={{ p: 2.5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>
                    {skill.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "neon.cyan",
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.85rem",
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 4,
                    bgcolor: "rgba(148,163,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 4,
                      background: "linear-gradient(90deg, #22e8ff, #a855f7)",
                      boxShadow: "0 0 8px rgba(34,232,255,0.6)",
                    },
                  }}
                />
              </GlassCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
