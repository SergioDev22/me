import { styled, Box, Typography } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { NEON } from "../theme";

export const gradientTextSx = {
  backgroundImage: `linear-gradient(90deg, ${NEON.cyan}, ${NEON.violet} 45%, ${NEON.pink})`,
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradient-shift 6s ease infinite",
  display: "inline-block",
} as const;

export const GlassCard = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(15, 18, 38, 0.55)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(148, 163, 255, 0.14)",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3.5),
  overflow: "hidden",
  transition:
    "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: 1,
    borderRadius: theme.shape.borderRadius,
    background: `linear-gradient(135deg, ${theme.palette.neon.cyan}55, transparent 40%, ${theme.palette.neon.violet}44)`,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    opacity: 0.7,
  },
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(34, 232, 255, 0.35)",
    boxShadow: `0 20px 60px -20px ${theme.palette.neon.cyan}33`,
  },
}));

export const GradientText = styled(Typography)(gradientTextSx);

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: align }}>
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          color: "neon.cyan",
          letterSpacing: 4,
          fontSize: "0.78rem",
          mb: 1.5,
          textTransform: "uppercase",
        }}
      >
        {`// ${eyebrow}`}
      </Typography>
      <GradientText
        variant="h3"
        sx={{ fontSize: { xs: "1.9rem", md: "2.6rem" } }}
      >
        {title}
      </GradientText>
      <Box
        sx={{
          mt: 2,
          height: 3,
          width: 72,
          mx: align === "center" ? "auto" : 0,
          borderRadius: 2,
          background: (t) =>
            `linear-gradient(90deg, ${t.palette.neon.cyan}, ${t.palette.neon.violet})`,
          boxShadow: (t) => `0 0 16px ${t.palette.neon.cyan}`,
        }}
      />
    </Box>
  );
}

export const NeonChip = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 12px",
  borderRadius: 999,
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "0.72rem",
  color: theme.palette.neon.cyan,
  border: `1px solid ${theme.palette.neon.cyan}44`,
  background: `${theme.palette.neon.cyan}0f`,
}));

export function Section({
  id,
  children,
  ...props
}: { id?: string; children: React.ReactNode } & BoxProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ position: "relative", py: { xs: 9, md: 13 }, ...props.sx }}
      {...props}
    >
      <Box sx={{ maxWidth: 1160, mx: "auto", px: { xs: 3, md: 5 } }}>
        {children}
      </Box>
    </Box>
  );
}
