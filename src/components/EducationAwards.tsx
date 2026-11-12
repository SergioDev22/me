import { Box, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/SchoolRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEventsRounded";
import { motion } from "framer-motion";
import { education, awards } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

export function EducationAwards() {
  return (
    <Section id="education">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionHeading eyebrow="education" title="Ma Formation" align="left" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GlassCard sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2.5 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(34,232,255,0.15), rgba(168,85,247,0.15))",
                      border: "1px solid rgba(34,232,255,0.3)",
                    }}
                  >
                    <SchoolIcon sx={{ color: "neon.cyan", fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#fff", fontWeight: 600 }}>{e.degree}</Typography>
                    <Typography sx={{ color: "neon.violet", fontSize: "0.85rem" }}>{e.school}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.78rem" }}>{e.period}</Typography>
                  </Box>
                </GlassCard>
              </motion.div>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SectionHeading eyebrow="achievements" title="Prix & Distinctions" align="left" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <GlassCard sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2.5 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        a.rank === "1ère place"
                          ? "linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,47,208,0.15))"
                          : "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(34,232,255,0.1))",
                      border: a.rank === "1ère place" ? "1px solid rgba(255,215,0,0.4)" : "1px solid rgba(168,85,247,0.3)",
                    }}
                  >
                    <EmojiEventsIcon
                      sx={{ color: a.rank === "1ère place" ? "#ffd700" : "neon.violet", fontSize: 20 }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
                      <Typography sx={{ color: "#fff", fontWeight: 600 }}>{a.title}</Typography>
                      <Typography
                        sx={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: "0.72rem",
                          color: a.rank === "1ère place" ? "#ffd700" : "neon.violet",
                        }}
                      >
                        {a.rank}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", mt: 0.5 }}>{a.org}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.75rem", opacity: 0.7 }}>
                      {a.period}
                    </Typography>
                  </Box>
                </GlassCard>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
