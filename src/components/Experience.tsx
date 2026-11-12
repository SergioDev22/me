import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { experiences } from "../data";
import { GlassCard, Section, SectionHeading } from "./Shared";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="career.log" title="Expériences Professionnelles" />

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: { xs: 11, md: "50%" },
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(180deg, #22e8ff, #a855f7, #ff2fd0)",
            transform: { md: "translateX(-50%)" },
            opacity: 0.5,
          }}
        />

        {experiences.map((exp, i) => {
          const leftSide = i % 2 === 0;
          return (
            <Box
              key={exp.company + exp.period}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: { xs: "flex-start", md: leftSide ? "flex-end" : "flex-start" },
                pl: { xs: 4, md: 0 },
                mb: 5,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 11, md: "50%" },
                  top: 6,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                  background: exp.current ? "#22e8ff" : "#a855f7",
                  boxShadow: exp.current ? "0 0 16px #22e8ff" : "0 0 12px #a855f7",
                  animation: exp.current ? "pulse-glow 2s ease-in-out infinite" : undefined,
                  zIndex: 1,
                }}
              />
              <Box sx={{ width: { xs: "100%", md: "46%" } }}>
                <motion.div
                  initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1, flexWrap: "wrap" }}>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        {exp.role}
                      </Typography>
                      {exp.current && (
                        <Chip
                          label="En poste"
                          size="small"
                          sx={{
                            bgcolor: "rgba(34,232,255,0.12)",
                            color: "neon.cyan",
                            border: "1px solid rgba(34,232,255,0.4)",
                            fontSize: "0.65rem",
                            height: 20,
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      sx={{
                        color: "neon.violet",
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: "0.85rem",
                        mb: 0.5,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.78rem", mb: 2 }}>
                      {exp.period}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.2, color: "text.secondary" }}>
                      {exp.bullets.map((b, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          sx={{ fontSize: "0.85rem", lineHeight: 1.75, mb: 0.8 }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </GlassCard>
                </motion.div>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}
