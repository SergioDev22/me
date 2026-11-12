import { Box } from "@mui/material";
import { BackgroundFX } from "./components/BackgroundFX";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { EducationAwards } from "./components/EducationAwards";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundFX />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAwards />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
