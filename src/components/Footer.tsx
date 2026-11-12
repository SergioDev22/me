import { Box, Typography, IconButton, Stack, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/EmailRounded";
import { GradientText, Section } from "./Shared";
import { profile } from "../data";

export function Footer() {
  return (
    <Box component="footer" sx={{ position: "relative", borderTop: "1px solid rgba(148,163,255,0.12)" }}>
      <Section sx={{ py: { xs: 6, md: 7 } }}>
        <Box sx={{ textAlign: "center" }}>
          <GradientText variant="h4" sx={{ mb: 2 }}>
            Envie de collaborer ?
          </GradientText>
          <Typography sx={{ color: "text.secondary", maxWidth: 520, mx: "auto", mb: 4 }}>
            Basé à {profile.location} — disponible pour des missions freelance ou des opportunités full
            stack Python / React.
          </Typography>
          <Button
            href="mailto:contact@sergio.dev"
            startIcon={<EmailIcon />}
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(90deg, #22e8ff, #a855f7)",
              color: "#05060f",
              fontWeight: 700,
              px: 4,
              mb: 4,
              boxShadow: "0 0 30px rgba(34,232,255,0.3)",
            }}
          >
            Me contacter
          </Button>

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: "center", mb: 4 }}>
            {[GitHubIcon, LinkedInIcon, EmailIcon].map((Icon, i) => (
              <IconButton
                key={i}
                href="#"
                sx={{
                  color: "text.secondary",
                  border: "1px solid rgba(148,163,255,0.16)",
                  "&:hover": { color: "neon.cyan", borderColor: "rgba(34,232,255,0.4)", background: "rgba(34,232,255,0.06)" },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>

          <Typography sx={{ color: "text.secondary", fontSize: "0.8rem", fontFamily: '"JetBrains Mono", monospace' }}>
            {"</> "}designé & développé par {profile.name.split(" ")[1]} · {new Date().getFullYear()}
          </Typography>
        </Box>
      </Section>
    </Box>
  );
}
