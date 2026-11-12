import { Box } from "@mui/material";

export function BackgroundFX() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#05060f",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148,163,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 90%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,232,255,0.28), transparent 70%)",
          filter: "blur(20px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-15%",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.24), transparent 70%)",
          filter: "blur(20px)",
          animation: "float 15s ease-in-out infinite reverse",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          left: "20%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,47,208,0.18), transparent 70%)",
          filter: "blur(20px)",
          animation: "float 18s ease-in-out infinite",
        }}
      />
    </Box>
  );
}
