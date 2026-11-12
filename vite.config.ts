import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      "2126-2605-59ca-82a8-7008-6139-ce59-6ebf-24e9.ngrok-free.app",
    ],
  },
});
