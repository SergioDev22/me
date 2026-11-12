import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, Stack, Button, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

const NAV_ITEMS = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expériences", href: "#experience" },
  { label: "Parcours", href: "#education" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? "rgba(5,6,15,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(148,163,255,0.12)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ maxWidth: 1160, width: "100%", mx: "auto", py: 1 }}>
          <Typography
            component="a"
            href="#hero"
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: 700,
              fontSize: "1.15rem",
              letterSpacing: 1,
              color: "#fff",
              textDecoration: "none",
              "& span": { color: "neon.cyan", textShadow: "0 0 12px rgba(34,232,255,0.8)" },
            }}
          >
            SR<span>.</span>dev
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  px: 1.75,
                  "&:hover": { color: "neon.cyan", background: "transparent" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <IconButton
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            sx={{ ml: 1, display: { xs: "none", md: "inline-flex" }, color: "text.secondary", "&:hover": { color: "neon.cyan" } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { background: "#0b0d1c", width: 240, borderLeft: "1px solid rgba(148,163,255,0.14)" } } }}
      >
        <List sx={{ mt: 4 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton key={item.href} component="a" href={item.href} onClick={() => setOpen(false)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
